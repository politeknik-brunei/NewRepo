import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router'
import { TaxiService } from '../taxi.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-taxi',
  templateUrl: './login-taxi.page.html',
  styleUrls: ['./login-taxi.page.scss'],
   
})
export class LoginTaxiPage implements OnInit {
  
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;


  

  constructor(
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    public router: Router,
    public taxi: TaxiService,
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

  

  async loginTaxi(loginForm: FormGroup): Promise<void> {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
  
      const username = loginForm.value.username;
      const password = loginForm.value.password;

    
  
      this.authService.loginTaxi(username, password).then(
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

