import { Component, OnInit } from '@angular/core';
import { MesInfoService } from '../Services/mes-info.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any;

  constructor(private mesInfoService: MesInfoService) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('user');
  }

}
