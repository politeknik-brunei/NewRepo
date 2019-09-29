import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router'
import { BusService } from '../bus.service'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-login-bus',
  templateUrl: './login-bus.page.html',
  styleUrls: ['./login-bus.page.scss'],
})
export class LoginBusPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'username':[
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username length must be longer or equal than 4 characters.'},
      { type: 'maxlength', message: 'Username length must be lower or equal to 20 characters.'},
      { type: 'pattern', message: 'Please enter your Username.'}
    ],
    'password': [
      { type: 'required', message: 'Password is required.'},
      { type: 'minlength', message: 'Password length must be longer or equal than 6 characters.'},
      { type: 'maxlength', message: 'Password length must be lower or equal to 30 characters.'},
      // { type: 'pattern', message: 'Password must contain numbers, uppercase and lowercase characters.'}
    ],
  }
  
 

  
  username: string = ""
  password: string = ""
  title: string = ""
  email: string = ""
  phonenumber: string = ""
  dob: string =  ""

  constructor(
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    public router: Router,
    public bus: BusService,
    public afstore: AngularFirestore
  ) { 

    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  
    
  }


ngOnInit() {
}



async login(){

console.log('username: ', this.loginForm.value.username);
console.log('password: ', this.loginForm.value.password);

const { username , password } = this
try {

  const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)

  this.afstore.doc(`busdriver/${res.user.uid}`).set({
    username,
    isDriver: true
  })

  if(res.user){
    this.bus.setUser({
      username,
      uid: res.user.uid,
      
    })
    this.router.navigate(['/homepage'])
  }

} catch(err) {
  console.dir(err)
  if(err.code === "auth/user-not-found"){
      console.log("User not found")
  }
}
 


}

}