import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { StudentsComponent } from './students.component';



@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ComponentsModule
  ]
})
export class StudentsModule { }
