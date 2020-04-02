import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {
  AddEditNotificationDialogComponent
} from '../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component';
import {TranslateService} from 'ngx-polygloat';
import {NotificatorService} from '../../../core/services/common/notificator.service';
import {ApplicationMail, RegistrarManagerService} from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnChanges, AfterViewInit {

  constructor(
    private registrarService: RegistrarManagerService,
    private translate: TranslateService,
    private notificator: NotificatorService,
    private dialog: MatDialog) {
  }

  @Input()
  applicationMails: ApplicationMail[];

  @Input()
  voId: number;

  @Input()
  groupId: number;

  displayedColumns: string[] = ['select', 'id', 'mailType', 'appType', 'send'];
  dataSource: MatTableDataSource<ApplicationMail>;

  @Input()
  selection = new SelectionModel<ApplicationMail>(true, []);

  @Output()
  selectionChange = new EventEmitter<SelectionModel<ApplicationMail>>();

  @ViewChild(MatSort, {static: true}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private sort: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<ApplicationMail>(this.applicationMails);
    this.setDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.selectionChange.emit(this.selection);
  }

  checkboxLabel(row?: ApplicationMail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  changeSending(applicationMail: ApplicationMail) {
    if (applicationMail.send) {
      this.registrarService.setSendingEnabled({mails: [applicationMail], enabled: false}).subscribe(() => {
        applicationMail.send = false;
      });
    } else {
      this.registrarService.setSendingEnabled({mails: [applicationMail], enabled: true}).subscribe(() => {
        applicationMail.send = true;
      });
    }
  }

  openApplicationMailDetail(applicationMail: ApplicationMail) {
    const dialog = this.dialog.open(AddEditNotificationDialogComponent, {
      width: '1400px',
      height: '700px',
      data: {voId: this.voId, groupId: this.groupId, createMailNotification: false, applicationMail: applicationMail}
    });
    dialog.afterClosed().subscribe(success => {
      if (success) {
        this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.EDIT_SUCCESS').subscribe(text => {
          this.notificator.showSuccess(text);
        });
        this.selection.clear();
        this.selectionChange.emit(this.selection);
        this.update();
      }
    });
  }

  getMailType(applicationMail: ApplicationMail): string {
    return !!applicationMail.mailType ? this.translate.instant('VO_DETAIL.SETTINGS.NOTIFICATIONS.MAIL_TYPE_' + applicationMail.mailType) : '';
  }

  update() {
    if (this.groupId) {
      this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(mails => {
        this.updateTable(mails);
      });
    } else {
      this.registrarService.getApplicationMailsForVo(this.voId).subscribe(mails => {
        this.updateTable(mails);
      });
    }
  }

  toggle(row: any) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection);
  }

  updateTable(mails: ApplicationMail[]) {
    this.applicationMails = mails;
    this.dataSource = new MatTableDataSource<ApplicationMail>(this.applicationMails);
    this.setDataSource();
  }

  private setDataSource() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }
}
