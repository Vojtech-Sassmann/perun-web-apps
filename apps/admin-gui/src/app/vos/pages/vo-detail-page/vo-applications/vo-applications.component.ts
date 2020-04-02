import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Application, RegistrarManagerService, Vo, VosManagerService } from '@perun-web-apps/perun/openapi';
import { PageEvent } from '@angular/material/paginator';
import {
  TABLE_VO_APPLICATIONS_DETAILED, TABLE_VO_APPLICATIONS_NORMAL,
  TableConfigService
} from '@perun-web-apps/config/table-config';

@Component({
  selector: 'app-vo-applications',
  templateUrl: './vo-applications.component.html',
  styleUrls: ['./vo-applications.component.scss']
})
export class VoApplicationsComponent implements OnInit {

  static id = 'VoApplicationsComponent';

  @HostBinding('class.router-component') true;

  constructor(private voService: VosManagerService,
              private registrarManager: RegistrarManagerService,
              private tableConfigService: TableConfigService,
              protected route: ActivatedRoute) { }

  state = 'pending';
  loading = false;
  applications: Application[] = [];
  vo: Vo;
  displayedColumns: string[] = ['id', 'createdAt', 'type', 'state', 'user', 'extSourceLoa', 'group', 'modifiedBy'];
  firstSearchDone: boolean;
  filterValue = '';
  showAllDetails = false;
  detailPageSize: number;
  pageSize: number;
  detailTableId = TABLE_VO_APPLICATIONS_DETAILED;
  tableId = TABLE_VO_APPLICATIONS_NORMAL;

  ngOnInit() {
    this.detailPageSize = this.tableConfigService.getTablePageSize(this.detailTableId);
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);

    this.loading = true;
    this.route.parent.params.subscribe(parentParams => {
      const voId = parentParams['voId'];
      this.voService.getVoById(voId).subscribe(vo => {
        this.vo = vo;
        this.setData(['NEW', 'VERIFIED']);
      });
    });
  }


  setData(state: string[]) {
    this.registrarManager.getApplicationsForVo(this.vo.id, state).subscribe(applications => {
      this.applications = applications;
      this.loading = false;
    });
  }

  select() {
    this.loading = true;
    switch (this.state) {
      case 'approved': {
        this.setData(['APPROVED']);
        break;
      }
      case 'rejected': {
        this.setData(['REJECTED']);
        break;
      }
      case 'wfmv': {
        this.setData(['NEW']);
        break;
      }
      case 'submited': {
        this.setData(['VERIFIED']);
        break;
      }
      case 'pending': {
        this.setData(['NEW', 'VERIFIED']);
        break;
      }
      case 'all': {
        this.registrarManager.getApplicationsForVo(this.vo.id).subscribe(applications => {
          this.applications = applications;
          this.loading = false;
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  detailPageChanged(event: PageEvent) {
    this.detailPageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.detailTableId, event.pageSize);
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }
}
