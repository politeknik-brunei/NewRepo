import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    public alertController: AlertController,
    private menuCtrl: MenuController) {}

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Select type of Booking:',
      buttons: [
        {
          text:'Book Now',
          handler: () => {
            window.location.pathname = '/';
        }
      },

      {
        text: 'Advance booking',
        handler: () => {
          window.location.pathname = '/';
      }
    }
  ]

});

    await alert.present();
  }

  ngOnInit() {
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

}

