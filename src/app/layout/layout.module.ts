import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ScreenComponent } from '../components/screen/screen.component';
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ScreenComponent,
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
