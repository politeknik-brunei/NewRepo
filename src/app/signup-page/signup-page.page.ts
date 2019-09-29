import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FormBuilder, FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { LoadingController, AlertController } from '@ionic/angular'
import { UserService } from '../user.service'
import { AuthService } from '../auth.service'
import { AngularFirestore } from '@angular/fire/firestore'
// import firebaseConfig from '../firebase'
import {firebaseConfig} from '../credentials'
import { FirebaseAppConfig } from '@angular/fire';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { TaxiService } from '../taxi.service'


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})
export class SignupPagePage implements OnInit {
  
 signupForm: FormGroup;
  public loading: any;
  public isCustomer = false;

  username: string = ""
  email: string = ""
  password: string = ""
  cpassword: string = ""
  phonenumber: string = ""
  // gender: string = ""
  dob: string = ""
  // card: string = ""


  constructor(
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController, 
    private router: Router,
    private user: UserService,
    private afstore: AngularFirestore,
    private http: Http, 
    private taxi: TaxiService,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  

    ) {  this.signupForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([Validators.minLength(4), Validators.required]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
      dob: [
        '',
        Validators.compose([ Validators.required]),
      ],
      phonenumber: [
        '',
        Validators.compose([Validators.maxLength(7), Validators.required]),
      ],


    });
  }



  ngOnInit() {}
  

  async signupUser(signupForm: FormGroup): Promise<void> {

    
    if (!signupForm.valid) {
      console.log(
        'Need to complete the form, current value: ', signupForm.value
      );
    } else {
      const email: string = signupForm.value.email;
      const password: string = signupForm.value.password;
      const username: string = signupForm.value.username;
      const phonenumber: string = signupForm.value.phonenumber;
      const dob: string = signupForm.value.dob;
  
      this.authService.signupUser(username, email, password,dob,phonenumber).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl('login-page');
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            await alert.present();
          });
        }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }

}

