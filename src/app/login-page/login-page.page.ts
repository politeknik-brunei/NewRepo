import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
   
})
export class LoginPagePage implements OnInit {
  
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
  
  

  

  constructor(
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    public router: Router,
    public user: UserService
    

    
    
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

  // login(){
  //   console.log('username: ', this.loginForm.value.username);
  //   console.log('password: ', this.loginForm.value.password);

  // }

  

  async login(){

    console.log('username: ', this.loginForm.value.username);
    console.log('password: ', this.loginForm.value.password);

    const { username , password } = this
    try {

      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)

      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
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
