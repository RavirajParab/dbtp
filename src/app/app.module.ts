import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { PositionsComponent } from './positions/positions.component';
import { StatementComponent } from './statement/statement.component';
import { RegisterComponent } from './register/register.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyComponent,
    PositionsComponent,
    StatementComponent,
    RegisterComponent,
    MyModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //for template-drive forms
    ReactiveFormsModule, //for the reactive forms
    HttpClientModule //for the HTTP operations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
