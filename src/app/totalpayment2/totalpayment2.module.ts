import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Totalpayment2Page } from './totalpayment2.page';

const routes: Routes = [
  {
    path: '',
    component: Totalpayment2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Totalpayment2Page]
})
export class Totalpayment2PageModule {}
