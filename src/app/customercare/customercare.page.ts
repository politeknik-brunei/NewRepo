import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
// import { EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-customercare',
  templateUrl: './customercare.page.html',
  styleUrls: ['./customercare.page.scss'],
})
export class CustomercarePage implements OnInit {

  constructor(
    public composer:EmailComposer,
    private callSvc: CallNumber,
    private sms: SMS) {
     }

     senSMS(){
      var options: {
        replaceLineBreaks: true,
        android: {
          intent: 'INTENT'
        }
      }
      this.sms.send("8950164", "Message", options).then(()=>{
        console.log('sms worked');
      }).catch((err)=>{
        alert(JSON.stringify(err))
      });
    }
  
  
  
    // callNow(number) {
    //   this.callNumber.callNumber(number, true)
    //     .then(res => console.log('Launched dialer!', res))
    //     .catch(err => console.log('Error launching dialer', err));
    // }
  
    call(){
      this.callSvc.callNumber('8950164', true).then(()=>{
        console.log('call worked');
      }).catch((err)=>{
        alert(JSON.stringify(err))
      });
    }
  
  
    
  
    OpenEmailComposer(){
      this.composer.open({
        to:'withbytheway@gmail.com'
      })
    }
  


  ngOnInit() {
  }

}
