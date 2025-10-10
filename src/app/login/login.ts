import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styles: ``
})
export class Login implements OnInit{

user = new User();
err : number = 0;

  ngOnInit(): void {
  }

   constructor(private authService : AuthService, 
             private  router: Router) { } 

  onLoggedin(){ 
    this.authService.login(this.user).subscribe({ 
        next: (data) => { 
          let jwToken = data.headers.get('Authorization')!; 
          this.authService.saveToken(jwToken); 
          this.router.navigate(['/']);   
        }, 
        error: (err: any) => { 
          this.err = 1;  
        } 
        });

}
}
