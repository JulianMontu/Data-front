import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { FooterComponent } from './assets/footer/footer.component';
import { IndexComponent } from './assets/index/index.component';
import { ErrorComponent } from './assets/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PrimengModule } from './primeng/primeng.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
