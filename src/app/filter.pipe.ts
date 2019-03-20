/**
 * This is the filter for search bar
 * Compares the given street name tith street property
 * Can be extended
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.street.toLocaleLowerCase().includes(searchText);
    });
  }

}
