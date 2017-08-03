import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PortfolioSearchComponent } from './components/portfolio-search/portfolio-search.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from './individual/individual.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrderExecutionComponent } from './components/order-execution/order-execution.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PortfolioResultListComponent } from './components/portfolio-result-list/portfolio-result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortfolioRoutingModule,
    TabsModule,
    Ng2TableModule,
    PaginationModule,
  ],
  declarations: [
    PortfolioComponent,
    PortfolioSearchComponent,
    PortfolioListComponent,
    IndividualComponent,
    AccountInfoComponent,
    OrderExecutionComponent,
    OrderStatusComponent,
    PortfolioResultListComponent
  ]
})
export class PortfolioModule { }
