import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProbaComponent } from './components/proba/proba/proba.component';


const routes: Routes = [
  { path: "", redirectTo: "/proba", pathMatch: "full" },
  { path: "proba", component: ProbaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
