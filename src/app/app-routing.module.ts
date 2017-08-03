import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: FullLayoutComponent,
    data: {
      title: 'Portfolio'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/portfolio/portfolio.module#PortfolioModule'
      }
    ]
  },
  {
    path: 'strategy',
    component: FullLayoutComponent,
    data: {
      title: 'Strategy'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/strategy/strategy.module#StrategyModule'
      }
    ]
  },
  {
    path: 'users',
    component: FullLayoutComponent,
    data: {
      title: 'User Management'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/user-management/user-management.module#UserManagementModule'
      }
    ]
  },
  {
    path: 'dashboard',
    component: FullLayoutComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
