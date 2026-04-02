import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
sidebarOpen = false;

toggleSidebar(){
this.sidebarOpen = !this.sidebarOpen;
}

currentYear: number = new Date().getFullYear();
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

constructor(private http: HttpClient){}

contact = {
name:'',
email:'',
subject:'',
message:''
}

sendMessage(){

this.http.post("https://ptbc.vercel.app/api/sendMail", this.contact)
.subscribe({

next: () => {
alert("Message envoyé avec succès");
},

error: () => {
alert("Erreur lors de l'envoi");
}

})

}

}
