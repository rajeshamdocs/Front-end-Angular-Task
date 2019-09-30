import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Location
{
    latitude: string;
    longitude: string;
}

export interface LocationDataPoint
{
  id: string;
  fuel_type_code: string;
  station_name: string;
  street_address: string;
  intersection_directions: string;
  city: string;
  state: string;
  zip: string;
  station_phone: string;
  status_code: string;
  groups_with_access_code: string;
  access_days_time: string;
  cards_accepted: string;
  geocode_status: string;
  latitude: string;
  longitude: string;
  date_last_confirmed: string;
  updated_at: string;
  owner_type_code: string;
  lpg_primary: string;
  location: Location;
}
@Injectable({
  providedIn: 'root'
})

export class MapsService {


  constructor( private http: HttpClient ) { }

  dataUrl : string = "https://data.cityofchicago.org/resource/f7f2-ggz5.json";
  
  getLocation() : Observable<Location> {
    return this.http.get<Location>( 'http://api.ipapi.com/134.201.250.155?access_key=bacef28c84287c42b4a3c0cb79fc75b6' );
  }

  getLocationDataPoints( )
  {
    return this.http.get<LocationDataPoint[]>( this.dataUrl );
  }

  getChicagoDataPoints() : Array<any>
  {
    return [
      {
        "id": "13050",
        "fuel_type_code": "LPG",
        "station_name": "AmeriGas",
        "street_address": "700 County Highway H",
        "intersection_directions": "Route 12 exit",
        "city": "Elkhorn",
        "state": "WI",
        "zip": "53121",
        "station_phone": "262-723-7410",
        "status_code": "E",
        "groups_with_access_code": "Public",
        "access_days_time": "8am-3pm M-F",
        "cards_accepted": "Cash M V",
        "geocode_status": "200-9",
        "latitude": "42.660919",
        "longitude": "-88.522923",
        "date_last_confirmed": "2018-11-08T00:00:00.000",
        "updated_at": "2019-05-14T16:16:45.000Z",
        "owner_type_code": "P",
        "lpg_primary": "false",
        "location": {
          "latitude": "42.660919",
          "longitude": "-88.522923"
        },
        ":@computed_region_6mkv_f3dw": "12099"
      }
    ];
  }

  setCurrentLocation()
  {
    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //     this.zoom = 15;
    //   });
    // }
  }
  // getAllDataPoints() : Observable<any>
  // {
    // return this.http.get( this.dataUrl ).pipe();
  // }
}