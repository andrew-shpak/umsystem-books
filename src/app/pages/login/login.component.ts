import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false

  signInForm:FormGroup;
  constructor(
    private readonly supabase: SupabaseService,
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const { error } = await this.supabase.signIn(email)
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
  getErrorMessage(name: string) {
    if (this.signInForm.controls[name].hasError('required')) {
      return 'Поле обязательно для заполнения'
    }
    return 'Помилка валідації'
  }
}
