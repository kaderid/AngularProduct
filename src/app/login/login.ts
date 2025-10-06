import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login implements OnInit{

user = new User();

  ngOnInit(): void {
  }

  onLoggedin() {
     console.log(this.user);
     }

}
