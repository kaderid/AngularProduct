import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  title ='MesProduits';

constructor (public authService: AuthService, private router: Router) {} 

ngOnInit () { 
 this.authService.loadToken(); 
if (this.authService.getToken()==null ||  
this.authService.isTokenExpired()) 
this.router.navigate(['/login']); 
} 


onLogout(){ 
this.authService.logout(); 
} 
}
