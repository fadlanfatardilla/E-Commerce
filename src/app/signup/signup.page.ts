import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  hidePassword: boolean = true; // Variabel untuk mengontrol apakah password harus disembunyikan atau ditampilkan

  constructor(private navCtrl: NavController) {}

  // Fungsi untuk mengubah status hidePassword
  togglePassword() {
    this.hidePassword = !this.hidePassword; // Mengubah nilai boolean untuk menampilkan atau menyembunyikan password
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
