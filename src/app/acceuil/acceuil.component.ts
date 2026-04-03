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

successMessage: string = '';

  // Affiche le message pendant 3 secondes
  showSuccess(msg: string) {
    this.successMessage = msg;

    setTimeout(() => {
      this.successMessage = '';
    }, 3000); // disparaît après 3 secondes
  }

sendMessage(){

this.http.post("https://xback-cm6g.onrender.com/api/sendMail", this.contact)
.subscribe({

next: () => {
this.showSuccess("Message envoyé avec succès !");
console.log("Envoyé avec succès");
},

error: () => {
alert("Erreur lors de l'envoi");
}

})

}

}
