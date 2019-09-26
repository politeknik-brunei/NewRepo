import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'
import { UserService } from '../user.service'
import { AngularFirestore } from '@angular/fire/firestore'
import firebaseConfig from '../firebase'
import { FirebaseAppConfig } from '@angular/fire';
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})
export class SignupPagePage implements OnInit {

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
    public afAuth: AngularFireAuth,
    public alert: AlertController, 
    public router: Router,
    public user: UserService,
    public afstore: AngularFirestore,
    public http: Http, 
 
    
   
    ) { }

  ngOnInit() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase
            .firestore()
            .doc(`/userProfile/${user.uid}`)
            .get()
            .then(userProfileSnapshot => {
              this.isCustomer = userProfileSnapshot.data().isCustomer;
            });
        }
      });
  }

  async register(){
    const { username, email, password, cpassword, phonenumber, dob} = this
    if(password !== cpassword) {
      this.showAlert("Error!", "password don't match")
        return console.error("Error, password don't match")
    }
    
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)

      console.log(res)
      this.showAlert("Success!", "Welcome to By The Way! Please proceed to Login to access")
      
      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
        email,
        phonenumber,
        dob,
        isCustomer: true
      })

      this.user.setUser({
        username,
        uid: res.user.uid,
        
      })
      
   
      
      this.router.navigate(['/login-page'])
    } catch(error){
      console.dir(error)
      this.showAlert("Error", error.message)
    }
    
  }
  
  async showAlert(header: string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })


    await alert.present()
  }


}

