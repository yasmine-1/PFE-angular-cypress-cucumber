import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import boxesJson from '../_db.json';
import { BOX } from '../Models/box';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  boxes: BOX[] = boxesJson;

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return { miniCard: { cols: 1, rows: 1 }, };
      }
      return { miniCard: { cols: 1, rows: 1 }, };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
