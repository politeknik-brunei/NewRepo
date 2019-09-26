import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
// import { CallNumber } from '@ionic-native/call-number/ngx';
// import { AngularFireDatabase } from 'angularfire2/database';
import firebaseConfig from './firebase'
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private callNumber: CallNumber
    // private readonly afDatabase: AngularFireDatabase,
    private afstore: AngularFirestore,
  ) 
  
  
  {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
      // this.callNumber.callNumber("1234567", true)
      // .then(res => console.log('Launched dialer!' , res))
      // .catch(err => console.log('Error launching dialer', err));
    });
  }
}
