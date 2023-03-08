import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ISO_3166_1_CODES } from 'src/app/model/country-code/country-codes';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
})
export class PhoneNumberComponent implements OnInit {
  @ViewChild('phone') phone!: ElementRef;
  @Output() updateUserPhone: EventEmitter<string> = new EventEmitter<string>();
  countyCodes = ISO_3166_1_CODES;
  example: string = 'e.g. --- --- ---';
  phoneInput!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rootFormGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.phoneInput = this.rootFormGroup.control;
    this.phoneInput.get('country')?.valueChanges.subscribe((data) => {
      this.phone.nativeElement.style.width = String(data).length + 'em';
    });
  }

  changeInput() {
    this.updateUserPhone.emit(
      this.phoneInput.get('phone.country')?.value +
        this.phoneInput.get('phone.number')?.value
    );
  }
}
