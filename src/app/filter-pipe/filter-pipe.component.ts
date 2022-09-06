import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class FilterPipeComponent implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.transaction_date.includes(filter));
  }

  constructor() { }

  ngOnInit(): void { }

}
