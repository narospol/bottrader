import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { StrategyModule } from './pages/strategy/strategy.module';
import { UserManagementModule } from './pages/user-management/user-management.module';
import { StaticPageModule } from './pages/static-page/static-page.module';
import { Page404Component } from './pages/static-page/404.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BreadcrumbsComponent,
    Page404Component,
    AsideToggleDirective,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ChartsModule,
    PortfolioModule,
    StrategyModule,
    UserManagementModule,
    StaticPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
