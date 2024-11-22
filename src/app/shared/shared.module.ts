import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [LayoutComponent,HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    PrimengModule
  ],
  exports: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
