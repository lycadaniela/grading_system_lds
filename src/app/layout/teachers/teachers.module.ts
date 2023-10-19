import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teachers-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TeachersComponent } from './teachers.component';



@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    ComponentsModule
  ]
})
export class TeachersModule { }
