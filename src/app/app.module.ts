import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { ToastsManager } from 'ng2-toastr';
import { ToastModule } from 'ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent],
  imports: [
   
    ToastModule.forRoot(), BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
