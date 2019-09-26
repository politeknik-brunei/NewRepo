import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule} from 'angularfire2/database'



// import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from './user.service';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

// import { Contacts } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
// import { createCredentials } from 'crypto';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  //  AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    AngularFireDatabaseModule,
   
    
     
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EmailComposer,
    SMS,
    CallNumber,
    PayPal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService, 
    AngularFireModule,
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
