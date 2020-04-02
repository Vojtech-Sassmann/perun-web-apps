import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {NotificatorService} from '../../../../core/services/common/notificator.service';
import {TranslateService} from 'ngx-polygloat';
import {ApplicationMail, RegistrarManagerService} from '@perun-web-apps/perun/openapi';
import {from, Observable} from "rxjs";

export interface DeleteApplicationFormMailDialogData {
  voId: number;
  groupId: number;
  mails: ApplicationMail[];
}

@Component({
  selector: 'app-delete-notification-dialog',
  templateUrl: './delete-notification-dialog.component.html',
  styleUrls: ['./delete-notification-dialog.component.scss']
})
export class DeleteNotificationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteNotificationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DeleteApplicationFormMailDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private registrarService: RegistrarManagerService) {
  }

  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<ApplicationMail>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ApplicationMail>(this.data.mails);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.data.groupId) {
      for (const mail of this.data.mails) {
        this.registrarService.deleteApplicationMailForGroup(this.data.groupId, mail.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    } else {
      for (const mail of this.data.mails) {
        this.registrarService.deleteApplicationMailForVo(this.data.voId, mail.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  getMailType(applicationMail: ApplicationMail): string {
    return this.translate.instant('VO_DETAIL.SETTINGS.NOTIFICATIONS.MAIL_TYPE_' + applicationMail.mailType);
  }
}
