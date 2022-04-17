import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashBoardComponent } from './dash-board/dash-board/dash-board.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'dash-board', component: DashBoardComponent, children: [
            { path: 'master', loadChildren: () => import('../../master/master.module').then(m => m.MasterModule) }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}