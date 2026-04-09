import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';




const routes: Routes = [
   { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
   { path: 'acceuil', component: AcceuilComponent },
   {path:'entreprise', component: EntrepriseComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
