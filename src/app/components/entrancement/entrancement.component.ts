import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user/user.model';

@Component({
  selector: 'app-entrancement',
  templateUrl: './entrancement.component.html',
  styleUrls: ['./entrancement.component.css'],
})
export class EntrancementComponent implements OnInit {
  user: User = new User();
  userPhone = this.formBuilder.group({
    phone: this.formBuilder.group({
      country: ['+98', Validators.required],
      number: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  updateUserPhoneNumber(phone: string) {
    this.user.phone = phone;
  }

  submit() {
    console.log(this.user.phone);
  }
}
