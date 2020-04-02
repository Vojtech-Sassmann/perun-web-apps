import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {TranslateService} from "ngx-polygloat";

@Component({
  selector: 'perun-web-apps-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {

  constructor(
    private location: Location,
    private translateService: TranslateService
  ) {
    translateService.get("Back").subscribe(t => this.text = t);
  }

  text = null;

  goBack() {
    this.location.back();
  }
}
