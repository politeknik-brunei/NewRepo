import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'maintype', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'aboutpage', loadChildren: './aboutpage/aboutpage.module#AboutpagePageModule' },
  { path: 'busmap', loadChildren: './busmap/busmap.module#BusmapPageModule' },
  { path: 'bustypes', loadChildren: './bustypes/bustypes.module#BustypesPageModule' },
  { path: 'customercare', loadChildren: './customercare/customercare.module#CustomercarePageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'fare4', loadChildren: './fare4/fare4.module#Fare4PageModule' },
  { path: 'fare6', loadChildren: './fare6/fare6.module#Fare6PageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'mainloginsignup-page', loadChildren: './mainloginsignup-page/mainloginsignup-page.module#MainloginsignupPagePageModule' },
  { path: 'maintype', loadChildren: './maintype/maintype.module#MaintypePageModule' },
  { path: 'paymentsetting', loadChildren: './paymentsetting/paymentsetting.module#PaymentsettingPageModule' },
  { path: 'pick4', loadChildren: './pick4/pick4.module#Pick4PageModule' },
  { path: 'pick6', loadChildren: './pick6/pick6.module#Pick6PageModule' },
  { path: 'qrcodebus', loadChildren: './qrcodebus/qrcodebus.module#QrcodebusPageModule' },
  { path: 'signup-page', loadChildren: './signup-page/signup-page.module#SignupPagePageModule' },
  { path: 'taxihome', loadChildren: './taxihome/taxihome.module#TaxihomePageModule' },
  { path: 'taxitypes', loadChildren: './taxitypes/taxitypes.module#TaxitypesPageModule' },
  { path: 'taxitypes1', loadChildren: './taxitypes1/taxitypes1.module#Taxitypes1PageModule' },
  { path: 'totalpayment2', loadChildren: './totalpayment2/totalpayment2.module#Totalpayment2PageModule' },
  { path: 'totalpaymentbus', loadChildren: './totalpaymentbus/totalpaymentbus.module#TotalpaymentbusPageModule' },
  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
  { path: 'userprofile-page', loadChildren: './userprofile-page/userprofile-page.module#UserprofilePagePageModule' },
  { path: 'watertaxihome', loadChildren: './watertaxihome/watertaxihome.module#WatertaxihomePageModule' },
  { path: 'login-taxi', loadChildren: './login-taxi/login-taxi.module#LoginTaxiPageModule' },
  { path: 'login-bus', loadChildren: './login-bus/login-bus.module#LoginBusPageModule' },
  // { path: 'sidemenu', loadChildren: './sidemenu/sidemenu.module#SidemenuPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
