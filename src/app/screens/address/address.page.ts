import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage {
  constructor(private router: Router) {}

  goToAddAdress() {
    this.router.navigate(['/add-address']);
  }
}
