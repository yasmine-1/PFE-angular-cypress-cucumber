import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MesInfoService } from '../Services/mes-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  title = 'angular-phrase-example';
  message: any;
  public MonNom: any;
  public MesLangues: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public translate: TranslateService, private mesInfoService: MesInfoService) {
    translate.addLangs(['English', 'Français', 'Italiano', 'Deutsh']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password
      });
      if (user) {
        this.loginForm.reset();
        this.MonNom = user.fullname;
        sessionStorage.setItem('user', this.MonNom)
        this.mesInfoService.SetNom(this.MonNom)
        this.MesLangues = user.Languages;
        sessionStorage.setItem('languages', this.MesLangues)
        this.mesInfoService.SetLanguages(this.MesLangues)
        this.router.navigate(['home']);
        return this.message = "Login success"
      }
      else {
        return this.message = "user not found"
      }
    }, err => { return this.message = "something went wrong" })
  }
}

