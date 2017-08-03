import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyComponent } from './strategy.component';

@NgModule({
  imports: [
    CommonModule,
    StrategyRoutingModule
  ],
  declarations: [
    StrategyComponent
  ]
})
export class StrategyModule { }
