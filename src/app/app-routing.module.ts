import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ServComponent } from './serv/serv.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
   { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
   { path: 'acceuil', component: AcceuilComponent },
   {path:'entreprise', component: EntrepriseComponent},
   {path:'serv', component:ServComponent},
   {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
