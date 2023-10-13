import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
