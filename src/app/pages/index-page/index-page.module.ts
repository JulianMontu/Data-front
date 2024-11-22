import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPageRoutingModule } from './index-page-routing.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { IndexPageComponent } from './index-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    IndexPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageModule { }
