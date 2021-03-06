import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StatementComponent } from './statement/statement.component';
import { PositionsComponent } from './positions/positions.component';
import { BuyComponent } from './buy/buy.component';
import { RegisterComponent } from './register/register.component';
import {GuardService} from './guard.service';


const routes: Routes = [
  { path: 'buy', component: BuyComponent },
  { path: 'positions', component: PositionsComponent, canActivate:[GuardService] },
  { path: 'statement', component: StatementComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
