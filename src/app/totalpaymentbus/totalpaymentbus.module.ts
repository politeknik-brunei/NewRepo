import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotalpaymentbusPage } from './totalpaymentbus.page';

const routes: Routes = [
  {
    path: '',
    component: TotalpaymentbusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotalpaymentbusPage]
})
export class TotalpaymentbusPageModule {}
