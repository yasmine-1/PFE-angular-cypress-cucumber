import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public translate: TranslateService) {
    translate.addLangs(['English', 'Français', 'Italiano', 'Deutsh']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  signUp() {
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
      .subscribe(res => {
        alert("Sign up successful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Something went wrong")
      }
      )
  }

}
