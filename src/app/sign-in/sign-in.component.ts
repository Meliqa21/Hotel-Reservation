import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToolService } from '../tool.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(public Api:ApiService,public cookie:CookieService,public tools:ToolService,public router:Router){

  }
public FormInfo:FormGroup = new FormGroup({
  email : new FormControl("",[Validators.required]),
  password : new FormControl("",[Validators.required])
})

LogIn() {
  this.Api.signIn(this.FormInfo.value).subscribe({
    next: (data: any) => {
      this.cookie.set("User", data.access_token);
      this.tools.setLoginStatus(true);
      this.router.navigate(['/']);
    },
    error: err => alert('Login failed')
  });
}

}
