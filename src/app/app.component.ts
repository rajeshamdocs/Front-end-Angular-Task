import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsService, LocationDataPoint } from './maps.service';
import { AgmMap } from '@agm/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'frontend-task';
  
  @ViewChild( 'map', { static : false } ) map : AgmMap;
  
  constructor( private mapService: MapsService )
  {

  }

  defaultData : any;
  lat : number;
  lng : number;
  zoom: number;
  location: Object;

/**
 * latitude = -28.68352;
   longitude = -147.20785;
   mapType = 'satellite';
 */

  private geoCoder;
  dataSource : Array<LocationDataPoint> = [];
  
  displayedColumns: string[] = [ 'id', 'fuel_type_code', 'station_name', 'city', 'cards_accepted', 'owner_type_code', 'lpg_primary' ];
  filterOptions: Array<any> = [ ];
  searchProp: string;
  filterProperties: Array<any> = [ 
                                   { name : 'Fuel', value : 'fuel_type_code' },
                                   { name : 'Cards', value : 'cards_accepted' },
                                   { name : 'Station Name', value : 'station_name' },
                                   { name : 'LPG', value : 'lpg_primary' },
                                 ]
  selectedProperty: any;

  ngOnInit( )
  {
    this.selectedProperty = this.filterProperties[0];
      // this.mapService.getLocation().subscribe( data =>
      //   {
      //       console.log( data );
      //       this.lat = data.latitude;
      //       this.lng = data.longitude;
      //   });
      this.defaultData = this.mapService.getChicagoDataPoints()[0];
      this.lat = Number(this.defaultData.latitude);
      this.lng = Number(this.defaultData.longitude);
      this.mapService.getLocationDataPoints( ).subscribe( data =>
      {
        console.log( data );
        this.dataSource = data;
      });
  }

  onSelectionChange( event: MatSelectChange )
  {
    console.log( event );
  }

  getAddress( latitude, longitude ) {
    
    this.geoCoder.geocode( { 'location': { lat: latitude, lng: longitude } }, ( results, status ) => {
      
    console.log( results );
    console.log( status );
      
    if ( status === 'OK' ) {
      if ( results[0] ) {
         this.map.zoom = 12;
          // this.map.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

   // Get Current Location Coordinates
   private setCurrentLocation() {
    this.mapService.setCurrentLocation();
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.latitude = position.coords.latitude;
        // this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}