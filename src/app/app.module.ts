import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { PositionsComponent } from './positions/positions.component';
import { StatementComponent } from './statement/statement.component';
import { RegisterComponent } from './register/register.component';
import { MyModalComponent } from './my-modal/my-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyComponent,
    PositionsComponent,
    StatementComponent,
    RegisterComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //for template-drive forms
    ReactiveFormsModule //for the reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
