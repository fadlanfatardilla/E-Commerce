import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addressForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      addressName: ['', Validators.required],
      receiverName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      province: ['', Validators.required],
      city: ['', Validators.required],
      districts: ['', Validators.required],
      village: ['', Validators.required],
      address: ['', Validators.required],
      addressNotes: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      // Lakukan sesuatu dengan data form, misalnya navigasi atau menyimpan data
    }
  }
}
