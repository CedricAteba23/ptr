import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MddComponent } from './mdd/mdd.component';




const routes: Routes = [
   { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
   { path: 'acceuil', component: AcceuilComponent },
   {path:'entreprise', component: EntrepriseComponent},
   {path:'contacts', component: ContactsComponent},
   {path:'mdd', component:MddComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
