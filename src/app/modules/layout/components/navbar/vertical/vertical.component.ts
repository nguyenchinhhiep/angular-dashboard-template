import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LayoutConfigService } from '../../../services/config.service';
import { NavigationService } from '../../navigation/navigation.service';
import { SidebarService } from '../../sidebar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'navbar-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class NavbarVerticalComponent implements OnInit {

    layoutConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {LayoutConfigService} _layoutConfigService
     * @param {NavigationService} _navigationService
     * @param {FuseSidebarService} _sidebarService
     * @param {Router} _router
     */
    constructor(
        private _layoutConfigService: LayoutConfigService,
        private _navigationService: NavigationService,
        private _sidebarService: SidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._sidebarService.getSidebar('navbar') )
                    {
                        this._sidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._layoutConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.layoutConfig = config;
            });

        // Get current navigation
        this._navigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._navigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


}
