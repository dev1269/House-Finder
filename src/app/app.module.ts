import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseService } from './services/house.service';
import { HouseFinderComponent } from './components/house-finder/house-finder.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './components/list/list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HouseFinderComponent,
    ListComponent,
    FilterPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCccNBRpvXwuk5MO8goZxyzv-09d9ED4Vo',
      libraries: ['geometry']
    }),
    AgmDirectionModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    HouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
