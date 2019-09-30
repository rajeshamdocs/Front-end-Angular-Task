import { Component, OnInit, Input } from "@angular/core";
import * as CanvasJS from '../../assets/canvasjs.min';
import { LocationDataPoint } from '../maps.service';

@Component({
    selector: 'map-chart',
    templateUrl: './map-charts.component.html',
    styleUrls: [ './map-charts.component.css' ]
})

export class MapChartsComponent implements OnInit
{
  _dataSourceMap: Array<LocationDataPoint>;
  
  chartData: Array<any> = [];
  cities: Array<string> = [];
  
  ngOnInit()
  {
    
  }

  @Input()
  set dataSourceMap ( dataSource : Array<LocationDataPoint> )
  {
    if( dataSource && dataSource.length > 0 )
    {
      this._dataSourceMap = dataSource;
      
      // Filter out unique city names
      this.cities = dataSource.map( ( data : any ) => data.city ).filter( ( data : any, index : number, self: any ) => ( self.indexOf( data ) == index ) );
      
      // Find how many times a city is mentioned
      let cityCount = { };
      dataSource.forEach( data =>
      {
          if( cityCount[data.city] )
          {
            let count = cityCount[ data.city ];
            cityCount[ data.city ] = count + 1;
          }
          else
          {
            cityCount[ data.city ] = 1;
          }
      });

      this.cities.forEach( city =>
      {
        this.chartData.push( { 'y' : cityCount[ city ], 'label' : city } );
      });

      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Map Data Charts"
        },
        data: [{
          type: "column",
          dataPoints: this.chartData
         /*  dataPoints: [
            { y: 71, label: "Apple" },
            { y: 55, label: "Mango" },
            { y: 50, label: "Orange" },
            { y: 65, label: "Banana" },
            { y: 95, label: "Pineapple" },
            { y: 68, label: "Pears" },
            { y: 28, label: "Grapes" },
            { y: 34, label: "Lychee" },
            { y: 14, label: "Jackfruit" }
          ] */
        }]
      });
        
        chart.render();
    }
  }

  get dataSourceMap ( ) : Array<LocationDataPoint>
  {
      return this._dataSourceMap;
  }
}