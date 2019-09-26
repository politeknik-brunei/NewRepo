import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

interface taxi{
  username: string, 
  uid: string,
  email: string,
  
}


@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  private taxi:taxi

  constructor(private afAuth: AngularFireAuth) { }

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
          email: taxi.email
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

