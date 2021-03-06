import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
   
})
export class LoginPagePage implements OnInit {
  

  
  username: string = ""
  password: string = ""
  title: string = ""
  email: string = ""
  phonenumber: string = ""
  dob: string =  ""
  
  

public loginForm: FormGroup;
public loading: HTMLIonLoadingElement;

  constructor(
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    private router: Router,
    public user: UserService,
    public afstore: AngularFirestore,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService
   
    ) { 

      this.loginForm = this.formBuilder.group({
        username: ['',
          Validators.compose([Validators.minLength(4), Validators.required])],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      });
    }

  ngOnInit() {
  }
  

  async loginUser(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  
      const username = loginForm.value.username;
      const password = loginForm.value.password;
  
      this.authService.loginUser(username, password).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl('homepage');
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
    }
  }
}
