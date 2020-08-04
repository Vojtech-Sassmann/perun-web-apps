import { Component, HostListener, OnInit } from '@angular/core';
import { CacheHelperService } from './core/services/common/cache-helper.service';
import { StoreService } from '@perun-web-apps/perun/services';
import { PerunPrincipal } from '@perun-web-apps/perun/openapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private cache: CacheHelperService,
    private store: StoreService
  ) {

    this.cache.init();
    this.getScreenSize(null);
  }

  public static minWidth = 992;

  sidebarMode: 'over' | 'push' | 'side' = 'side';
  lastScreenWidth: number;

  principal: PerunPrincipal;
  navBackgroundColor = this.store.get('theme', 'nav_bg_color');
  sideBarBorderColor = this.store.get('theme', 'sidemenu_border_color');
  contentBackgroundColor = this.store.get('theme', 'content_bg_color');
  sideMenubackgroundColor = this.store.get('theme', 'sidemenu_bg_color');

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.sidebarMode = this.isMobile() ? 'over' : 'side';

    this.lastScreenWidth = window.innerWidth;
  }

  isMobile(): boolean {
    return window.innerWidth <= AppComponent.minWidth;
  }

  ngOnInit(): void {
    this.principal = this.store.getPerunPrincipal();
  }

  getTopGap() {
    return 64;
  }

  getSideNavMarginTop() {
    return '64px';
  }

  getSideNavMinHeight() {
    return 'calc(100vh - 64px)';
  }

  getNavMenuTop() {
    return '0';
  }

  getContentInnerMinHeight() {
    // 64 for nav (+48) when alert is shown
    // 210 for footer, 510 for footer on mobile

    let footerSpace = this.isMobile() ? '510' : '210';
    footerSpace = '0';
    return 'calc((100vh - 64px) + ' + footerSpace + 'px)';
  }
}
