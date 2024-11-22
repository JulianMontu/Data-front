import { NgModule } from '@angular/core';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  exports: [
    ConfirmDialogModule,
    ToastModule,
    MenubarModule,
    PanelModule,
    CardModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputGroupModule, 
    InputGroupAddonModule,
    InputIconModule, 
    IconFieldModule,
    FloatLabelModule,
    TabMenuModule,
    SidebarModule,
    MenuModule,
  ]
})
export class PrimengModule { }
