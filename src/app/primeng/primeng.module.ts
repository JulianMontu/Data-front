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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DropdownModule,
    FloatLabelModule,
    IconFieldModule,
    InputGroupAddonModule,
    InputGroupModule, 
    InputIconModule, 
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SidebarModule,
    TableModule,
    TabMenuModule,
    ToastModule,
  ]
})
export class PrimengModule { }
