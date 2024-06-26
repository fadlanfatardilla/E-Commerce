import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goToAddAddress() {
    this.navCtrl.navigateForward('/address');
  }

  goToLogout() {
    this.navCtrl.navigateForward('/mainscreen');
  }

  async presentLogoutConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Logout canceled');
          },
        },
        {
          text: 'Logout',
          handler: () => {
            this.goToLogout();
          },
        },
      ],
    });

    await alert.present();
  }
}
