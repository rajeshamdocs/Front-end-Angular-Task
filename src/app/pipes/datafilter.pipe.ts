import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  transform(mapData: any, filterField: string, filterText: string ): any {
    if( !mapData || !filterField || !filterText )
    {
        return mapData;
    }

    return mapData.filter( data =>
    {
        data[filterField].indexOf( filterText ) >= 0;
    });
  }

}
