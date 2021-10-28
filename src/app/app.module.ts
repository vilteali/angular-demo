import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// external temp
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CreateComponent } from './components/product/create/create.component';
import { DetailComponent } from './components/product/detail/detail.component';
import { ListComponent } from './components/product/list/list.component';
import { UpdateComponent } from './components/product/update/update.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ApiInterceptorService } from './shared/services/api-interceptor/api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DetailComponent,
    ListComponent,
    UpdateComponent,
    SpinnerComponent,
    ModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalModule
  ],
  providers: [
    NgxSpinnerService,
    BsModalService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
