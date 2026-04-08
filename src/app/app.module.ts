import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EntrepriseComponent } from './entreprise/entreprise.component';

// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SrvComponent } from './srv/srv.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    EntrepriseComponent,
    SrvComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
