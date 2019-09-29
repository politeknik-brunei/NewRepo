import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface bus{
  username: string, 
  uid: string,

}
  

@Injectable({
  providedIn: 'root'
})

export class BusService {
  private bus:bus
  public isDriver = false;

  constructor(
    private afAuth: AngularFireAuth,
    public http: Http
 ) { }
  
  ngOnInit() {
    firebase.auth().onAuthStateChanged(driver => {
      if (driver) {
        firebase
          .firestore()
          .doc(`/userProfile/${driver.uid}`)
          .get()
          .then(userProfileSnapshot => {
            this.isDriver = userProfileSnapshot.data().isDriver;
          });
      }
    });
  }

  setUser(bus:bus) {
    this.bus = bus
  }
  getUID(){
    
    if(!this.bus){
      if(this.afAuth.auth.currentUser){
        const bus = this.afAuth.auth.currentUser
        this.setUser({
          username: bus.email.split('@')[0],
          uid:bus.uid,
          
        })
        return bus.uid
      } else {
        throw new Error("User not logged in")
      }
    } else {
      return this.bus.uid
    }

  
  }
  }