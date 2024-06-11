import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  hidePassword: boolean = true; // Variabel untuk mengontrol apakah password harus disembunyikan atau ditampilkan

  constructor() {}

  // Fungsi untuk mengubah status hidePassword
  togglePassword() {
    this.hidePassword = !this.hidePassword; // Mengubah nilai boolean untuk menampilkan atau menyembunyikan password
  }
}
