import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }


  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
    ) {}
    
  //   doLogout(){
  //     return new Promise((resolve, reject) => {
  //       this.afAuth.auth.signOut()
  //       .then(() => {
  //         this.firebaseService.unsubscribeOnLogOut();
  //         resolve();
  //       }).catch((error) => {
  //         reject();
  //       });
  //     })
  //   }
  // }
    
  }

