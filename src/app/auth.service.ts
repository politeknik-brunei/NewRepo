import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TaxiService } from './taxi.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    public taxi: TaxiService, 
    ) {}
    
    loginUser(
      username:string, 
      password:string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().signInWithEmailAndPassword(username + '@gmail.com', password);
}

  loginTaxi(
  username:string, 
  password:string): Promise<firebase.auth.UserCredential> {
  
    return firebase.auth().signInWithEmailAndPassword(username + '@gmail.com', password);
     
  }

  loginBus(
  username:string, 
  password:string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(username + '@gmail.com', password);
}
    signupUser(username: string, email: string, password: string, dob:string,phonenumber:string ): Promise<any> {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((newUserCredential: firebase.auth.UserCredential) => {
          firebase
            .firestore()
            .doc(`/UserCustomer/${newUserCredential.user.uid}`)
            .set({ email,
                  username,
                  dob,
                  phonenumber, 
             });
        })
        .catch(error => {
          console.error(error);
          throw new Error(error);
        });
      }
       
      resetPassword(email:string): Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email);
      }
      
    logoutUser():Promise<void> {
      return firebase.auth().signOut();
    }

  }