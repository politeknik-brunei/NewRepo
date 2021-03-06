import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Http } from '@angular/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


interface taxi{
  username: string, 
  uid: string,
  
}


@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  private taxi:taxi
  public isDriver = false;

  constructor(
    private afAuth: AngularFireAuth,
    public http: Http,
   
 ) { }
  
  ngOnInit() {
    firebase.auth().onAuthStateChanged(driver => {
      if (driver) {
        firebase
          .firestore()
          .doc(`/TaxiDrivers/${driver.uid}`)
          .get()
          .then(taxiDriversSnapshot => {
            this.isDriver = taxiDriversSnapshot.data().isDriver;
          });
      }
    });
  }

  setUser(taxi:taxi) {
    this.taxi = taxi
  }
  getUID(){
    
    if(!this.taxi){
      if(this.afAuth.auth.currentUser){
        const taxi = this.afAuth.auth.currentUser
        this.setUser({
          username: taxi.email.split('@')[0],
          uid:taxi.uid,
          
        })
        return taxi.uid
      } else {
        throw new Error("User not logged in")
      }
    } else {
      return this.taxi.uid
    }

  
  }
  }


