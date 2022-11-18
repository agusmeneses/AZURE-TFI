import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent]
})
export class SharedModule { }
