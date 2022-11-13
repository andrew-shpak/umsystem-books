import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value
      console.log(formValue)
    }
  }

  getErrorMessage(name: string) {
    if (this.form.controls[name].hasError('required')) {
      return 'Поле обязательно для заполнения'
    }
    return 'Помилка валідації'
  }
}
