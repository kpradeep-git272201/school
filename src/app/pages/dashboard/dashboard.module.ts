import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideMenuComponent } from 'src/app/components/side-menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SideMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
