import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    TableComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
