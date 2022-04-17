import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board/dash-board.component';
import { LoginComponent } from './login/login/login.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [DashBoardComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
