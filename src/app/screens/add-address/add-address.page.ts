import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage {
  addressForm: FormGroup;
  provinces: string[] = [];
  cities: any = {};
  selectedCities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private actionSheetController: ActionSheetController,
    private http: HttpClient
  ) {
    this.addressForm = this.fb.group({
      addressName: [''],
      receiverName: [''],
      phoneNumber: [''],
      province: [''],
      city: [''],
      districts: [''],
      village: [''],
      address: [''],
      addressNotes: [''],
    });

    this.loadProvinces();
    this.loadCities();
  }

  loadProvinces() {
    this.http.get<any[]>('assets/provinces.json').subscribe((data) => {
      this.provinces = data.map((province) => province.name);
    });
  }

  loadCities() {
    this.http.get<any>('assets/cities.json').subscribe((data) => {
      this.cities = data;
    });
  }

  async openProvinceActionSheet() {
    const buttons = this.provinces.map((province) => ({
      text: province,
      handler: () => {
        this.addressForm.patchValue({ province: province });
        this.selectedCities = this.cities[province] || [];
        this.addressForm.patchValue({ city: '' }); // Reset city field
      },
    }));

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Province',
      buttons: [...buttons, { icon: 'close', text: 'Cancel', role: 'cancel' }],
    });

    await actionSheet.present();
  }

  async openCityActionSheet() {
    const buttons = this.selectedCities.map((city) => ({
      text: city,
      handler: () => {
        this.addressForm.patchValue({ city: city });
      },
    }));

    const actionSheet = await this.actionSheetController.create({
      header: 'Select City',
      buttons: [...buttons, { icon: 'close', text: 'Cancel', role: 'cancel' }],
    });

    await actionSheet.present();
  }

  onSubmit() {
    console.log(this.addressForm.value);
    // Here you can add the logic to submit the form data to your backend
  }
}
