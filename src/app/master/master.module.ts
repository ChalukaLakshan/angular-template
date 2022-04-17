import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterRoutingModule } from './mater-routing.module';
import { UserComponent } from './user/user/user.component';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MaterRoutingModule
  ]
})
export class MasterModule { }
