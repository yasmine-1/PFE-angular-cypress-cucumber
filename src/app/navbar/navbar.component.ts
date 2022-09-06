import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MesInfoService } from '../Services/mes-info.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ListLanguagesAfterSplit: any;
  name: any;
  langue: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public translate: TranslateService, private mesInfoService: MesInfoService) {
    this.langue = sessionStorage.getItem('languages');
    this.ListLanguagesAfterSplit = []
    try {
      this.ListLanguagesAfterSplit = this.ListLanguagesAfterSplit.concat(this.langue.split(','))
    } catch (error) {
      console.log("undefined !")
    }
    translate.addLangs(this.ListLanguagesAfterSplit);
    translate.setDefaultLang('English');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  selected = 'English';

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user');
  }

}

