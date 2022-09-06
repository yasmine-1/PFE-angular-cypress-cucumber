import { Component, OnInit } from '@angular/core';
import boxesJson from '../_db.json';
import { BOX } from '../Models/box';



@Component({
  selector: 'app-omnichannel-component',
  templateUrl: './omnichannel-component.component.html',
  styleUrls: ['./omnichannel-component.component.scss']
})
export class OmnichannelComponentComponent implements OnInit {

  boxes: BOX[] = boxesJson;

  constructor() { }

  ngOnInit(): void {
  }

}
