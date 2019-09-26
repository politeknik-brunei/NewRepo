import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxihomePage } from './watertaxihome.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxihomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxihomePage]
})
export class WatertaxihomePageModule {}
