import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hadsup-add-advertise',
  templateUrl: './add-advertise.component.html',
  styleUrl: './add-advertise.component.scss'
})
export class AddAdvertiseComponent implements OnInit {
  advertiserForm: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.advertiserForm = this.fb.group({
      brandName: ['', Validators.required],
      advertiserName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.advertiserForm.valid) {
      console.log('Form Submitted!', this.advertiserForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onDiscard(): void {
    this.advertiserForm.reset();
  }
}