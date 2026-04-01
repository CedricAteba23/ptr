import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petro';

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

this.http.post('http://localhost:3000/send-mail', this.contact)
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
