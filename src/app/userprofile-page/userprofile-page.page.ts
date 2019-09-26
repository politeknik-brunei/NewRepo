import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile-page',
  templateUrl: './userprofile-page.page.html',
  styleUrls: ['./userprofile-page.page.scss'],
})
export class UserprofilePagePage implements OnInit {

  constructor() {
   }

   


  ngOnInit() {
  }

}
