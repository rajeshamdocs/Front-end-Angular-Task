import { Component, OnInit, Input } from '@angular/core';
import { LocationDataPoint } from '../maps.service';

@Component({
    selector: 'map-table',
    templateUrl: './map-table.component.html',
    styleUrls: [ './map-table.component.css' ]
})

export class MapTableComponent implements OnInit
{
    _dataSourceMap: Array<LocationDataPoint>;
    displayedColumns: string[] = [ 'id', 'fuel_type_code', 'station_name', 'city', 'cards_accepted', 'lpg_primary' ];
    
    filterProperties: Array<any> = [ 
        { name : 'Fuel Type', value : 'fuel_type_code' },
        { name : 'Cards Accepted', value : 'cards_accepted' },
        { name : 'Station Name', value : 'station_name' },
        { name : 'LPG', value : 'lpg_primary' },
      ]
    
      filterField: any;

    ngOnInit( )
    {
        this.filterField = this.filterProperties[0];
    }

    @Input()
    set dataSourceMap ( dataSource : Array<LocationDataPoint> )
    {
        if( dataSource && dataSource.length > 0 )
        {
            this._dataSourceMap = dataSource;
        }
    }

    get dataSourceMap ( ) : Array<LocationDataPoint>
    {
        return this._dataSourceMap;
    }

    onRowClick( row )
    {
        console.log( row );
    }
}