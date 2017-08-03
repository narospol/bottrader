import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent, data: { title: 'Summary' } },
    { path: 'individual', component: IndividualComponent, data: { title: 'Individual Account Information' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule { }
