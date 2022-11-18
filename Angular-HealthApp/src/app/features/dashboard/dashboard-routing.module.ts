import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ApiHttpService]
})
export class DashboardRoutingModule { }
