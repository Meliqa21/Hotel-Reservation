import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(public api:ApiService){

}

public formInfo:FormGroup = new FormGroup({
  firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [ Validators.required, Validators.email ]),
    password: new FormControl("", [ Validators.minLength(8), Validators.required, Validators.maxLength(20) ]),
    age: new FormControl("", Validators.required,),
    address: new FormControl("",),
    phone: new FormControl("+995",Validators.required),
    zipcode: new FormControl("", [Validators.required,]),
    avatar: new FormControl("", Validators.required),
    gender: new FormControl(""),
})

register(){
  this.api.SignUp(this.formInfo.value).subscribe({
    next : (data:any) => {alert("succesfully registered");
      this.formInfo.reset();
    
    },
    error: (err) => {
      alert("something went wrong")
    }
  });
}
}
