import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      shortName: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.form.valid) {
      const formValue = this.form.value;
      console.log(formValue);
    }
  }

  getErrorMessage(name: string) {
    if (this.form.controls[name].hasError('required')) {
      return  "Поле обязательно для заполнения";
    }
    return 'Помилка валідації';
  }
}
