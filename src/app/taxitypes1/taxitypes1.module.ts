import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Taxitypes1Page } from './taxitypes1.page';

const routes: Routes = [
  {
    path: '',
    component: Taxitypes1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Taxitypes1Page]
})
export class Taxitypes1PageModule {}
