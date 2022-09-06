import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import paymentsJson from '../payments_default.json';
import { PAYMENTS } from '../Models/payments';
import { FormControl } from '@angular/forms';
import moment from 'moment';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements AfterViewInit {
  selected = 'TODAY'
  period: string = '';
  startDay: any = moment().toDate()
  endDay: any = moment().toDate()
  amountMin: string = '0';
  amountMax: string = '0';
  isValidateAmount = false;

  level1 = ['All'];
  level2 = ['All'];
  level3 = ['All'];
  locationLevel1: any = [
    { text: 'All', value: 'All' },
    { text: 'MARKET', value: 'MARKET' },
    { text: 'United Kingdom', value: 'United Kingdom' },
    { text: 'France', value: 'France' }];

  locationLevel2: any = [
    { text: 'All', value: 'All' },
    { text: 'Alexandrie', value: 'Alexandrie' },
    { text: 'Brighton', value: 'Brighton' },
    { text: 'Paris', value: 'Paris' }];

  locationLevel3: any = [
    { text: 'All', value: 'All' },
    { text: 'Alexandrie_Shop1', value: 'Alexandrie_Shop1' },
    { text: 'Brighton_shop2', value: 'Brighton_shop2' },
    { text: 'Paris_shop1', value: 'Paris_shop1' }];

  periods: any = [
    { text: 'Today', value: 'TODAY' },
    { text: 'Yesterday', value: 'YESTERDAY' },
    { text: 'This Week', value: 'THIS_WEEK' },
    { text: 'Last Week', value: 'LAST_WEEK' },
    { text: 'This Month', value: 'THIS_MONTH' },
    { text: 'Last 30 Days', value: 'LAST_30_DAYS' },
    { text: 'Last Month', value: 'LAST_MONTH' }];

  EmpData: PAYMENTS[] = [paymentsJson]
  payments: PAYMENTS = paymentsJson as any;
  displayedColumns: string[] = ['transaction_date', 'receipt_date', 'amount', 'charity_amount', 'total_amount', 'user_structure1', 'user_structure2', 'user_structure3', 'trx_types', 'trx_mode', 'card_schemes', 'payment_id', 'order_ref', 'authorization', 'trx_channel'];
  dataSource = new MatTableDataSource(this.payments.data);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      const filtered = JSON.parse(filter)
      console.log(filtered)
      if (filtered.typeFilter == 0) {
        let startDate = moment(filtered.startDate)
        let endDate = moment(filtered.endDate)
        const transactionDate = moment(data.transaction_date)
        console.log({ startDate, endDate, transactionDate })
        console.log(data)
        return (startDate.isSameOrBefore(transactionDate)) && (endDate.isSameOrAfter(transactionDate))
      }
      else if (filtered.typeFilter == 1) {
        return Number(data.amount.substring(3)) >= Number(filtered.amountMin) && Number(data.amount.substring(3)) <= Number(filtered.amountMax)
      } else {
        let condition1 = true;
        if (!filtered.level1.includes('All')) {
          condition1 = filtered.level1.includes(data.user_structure1);
        }
        let condition2 = true;
        if (!filtered.level2.includes('All')) {
          condition2 = filtered.level2.includes(data.user_structure2);
        }
        let condition3 = true;
        if (!filtered.level3.includes('All')) {
          condition3 = filtered.level3.includes(data.user_structure3);
        }
        console.log({ condition1, condition2, condition3 })
        return condition1 && condition2 && condition3;
      }
    };
  }
  changePeriod() {
    if (this.period == 'TODAY') {
      this.startDay = moment().toDate()
      this.endDay = moment().toDate()
    }
    else if (this.period == 'YESTERDAY') {
      this.startDay = moment().add(-1, 'days').toDate()
      this.endDay = moment().add(-1, 'days').toDate()
    }
    else if (this.period == 'THIS_WEEK') {
      this.startDay = moment().startOf('week').toDate()
      this.endDay = moment().endOf('week').toDate()
    }
    else if (this.period == 'LAST_WEEK') {
      this.startDay = moment().add(-1, 'weeks').startOf('week').toDate()
      this.endDay = moment().add(-1, 'weeks').endOf('week').toDate()
    }
    else if (this.period == 'THIS_MONTH') {
      this.startDay = moment().startOf('month').toDate()
      this.endDay = moment().endOf('month').toDate()
    }
    else if (this.period == 'LAST_30_DAYS') {
      this.startDay = moment().add(-30, 'days').toDate()
      this.endDay = moment().toDate()
    }
    else {
      this.startDay = moment().add(-1, 'months').startOf('month').toDate()
      this.endDay = moment().add(-1, 'months').endOf('month').toDate()
    }
  }
  getSelectedPeriod(): string {
    const selectedPeriod = this.periods.find((item: any) => item.value == this.period);
    if (selectedPeriod)
      return selectedPeriod.text
    else return ''
  }
  apply(typeFilter: number, $event: any) {
    if (typeFilter == 0) {
      const startDate = moment(this.startDay).format("YYYY-MM-DD")
      const endDate = moment(this.endDay).format("YYYY-MM-DD")
      const filtered = { startDate: startDate, endDate: endDate, typeFilter }
      this.dataSource.filter = JSON.stringify(filtered)
    }
    else if (typeFilter == 1) {
      this.isValidateAmount = this.isValidate();
      if (!this.isValidateAmount) {
        const filtered = { amountMin: this.amountMin, amountMax: this.amountMax, typeFilter }
        this.dataSource.filter = JSON.stringify(filtered)
      } else {
        $event.stopPropagation();
      }
    } else {
      const filtered = { level1: this.level1, level2: this.level2, level3: this.level3, typeFilter }
      this.dataSource.filter = JSON.stringify(filtered)
    }
  }
  isValidate() {
    return Number(this.amountMin) > Number(this.amountMax)
  }
  reset() {
    this.dataSource.data = this.payments.data
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    }
    else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
