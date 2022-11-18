import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutModule { }
