import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BOX } from '../Models/box';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})

export class BoxComponent implements OnInit {

  @Input() box: BOX;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(box: BOX): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: box,
      width: '380px',
    });
  }

}
