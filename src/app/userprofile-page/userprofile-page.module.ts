import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserprofilePagePage } from './userprofile-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserprofilePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserprofilePagePage]
})
export class UserprofilePagePageModule {}
