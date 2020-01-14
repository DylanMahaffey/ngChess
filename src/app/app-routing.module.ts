import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArenaComponent } from './arena/arena.component';
import { VsComponent } from './vs/vs.component';


const routes: Routes = [
  {
    path: '', component: VsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
