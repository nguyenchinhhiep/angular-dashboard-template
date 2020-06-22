import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { LayoutConfigService } from './modules/layout/services/config.service';
import { NavigationService } from './modules/layout/components/navigation/navigation.service';
import { SidebarService } from './modules/layout/components/sidebar/sidebar.service';
import { Platform } from '@angular/cdk/platform';
import { navigation } from './modules/layout/components/navigation/navigation';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  layoutConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {LayoutConfigService} _layoutConfigService
   * @param {NavigationService} _navigationService
   * @param {SidebarService} _sidebarService
   * @param {Platform} _platform
   */
  constructor(
    @Inject(DOCUMENT) private document: any,
    private _layoutConfigService: LayoutConfigService,
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService,
    private _platform: Platform
  ) {
    // Get default navigation
    this.navigation = navigation;

    // Register the navigation to the service
    this._navigationService.register('main', this.navigation);

    // Set the main navigation as our current navigation
    this._navigationService.setCurrentNavigation('main');

    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._layoutConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.layoutConfig = config;

        // Color theme - Use normal for loop for IE11 compatibility
        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.layoutConfig.colorTheme);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
