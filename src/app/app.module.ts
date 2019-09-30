import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material.module';
import { MapChartsComponent } from './charts/map-charts.component';
import { MapTableComponent } from './table/map-table.component';
import { DatafilterPipe } from './pipes/datafilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapTableComponent,
    MapChartsComponent,
    DatafilterPipe
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOTrK0WwjWacjrvvhxty3Q7nus3YlsNxo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ MaterialModule ]
})
export class AppModule { }
