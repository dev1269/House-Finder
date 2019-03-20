/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/house';
import { HouseService } from 'src/app/services/house.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  //pagination
  p: number = 1;

  list: House[] = [];
  filtered: House[] = [];
  searchText: string = "";
  radioSelected: any;
  noInfo: string = "Information is not available at the moment";

  // sister house details
  private sisterHouse: House = {
    street: 'Eberswalder Straße 55',
    params: undefined,
    coords: { lat: 52.5418707, lon: 13.40792650000003 },
    distance: 0
  };

  // map marker options
  public markerOptions = {
    origin: { label: 'Sister' },
    destination: { label: 'You', }
  }

  constructor(private houseService: HouseService, private mapsAPILoader: MapsAPILoader, private spinner: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.mapsAPILoader.load().then(() => {
      this.getHouses();
    });
  }

  getHouses() {
    this.houseService.getHouses().then((data) => {
      this.list = data;
      this.list.map((elem: House) => {
        elem.distance = parseFloat(this.getDistanceFromSisterHouse(elem));
      });
      this.list.sort((a, b) => a.distance - b.distance);
      this.filtered = this.list;
      this.spinner.hide();
    });
  }

  getGeoCodes(house: House): any {
    return { lat: house.coords.lat, lng: house.coords.lon };
  }

  getDistanceFromSisterHouse(house: House) {
    const from = new google.maps.LatLng(this.sisterHouse.coords.lat, this.sisterHouse.coords.lon);
    const to = new google.maps.LatLng(house.coords.lat, house.coords.lon);
    return (google.maps.geometry.spherical.computeDistanceBetween(from, to) * 0.001).toFixed(2);
  }

  onSelectChange(filter: string) {
    this.spinner.show();
    switch (filter) {
      case 'by_distance':
        this.filtered = this.list.sort((a, b) => a.distance - b.distance);
        this.spinner.hide();
        break;
      case 'by_rooms':
        this.filtered = this.list
          .filter(house => (house.params && house.params.rooms && house.params.rooms) > 5)
          .sort((a, b) => a.params.rooms - b.params.rooms);
        this.spinner.hide();
        break;
      case 'by_missing_info':
        this.filtered = this.list.filter(item =>
          !(item.hasOwnProperty("coords") && Object.keys(item.coords).length == 2) ||
          !(item.hasOwnProperty("params") && Object.keys(item.params).length == 2) ||
          !item.hasOwnProperty("street"))
          .sort((a, b) => a.street.localeCompare(b.street));
        this.spinner.hide();
        break;
      case 'suggest':
        this.filtered = this.list
          .filter(house => (house.params && house.params.rooms && house.params.rooms) > 10 &&
            (house.params && house.params.value && house.params.value) <= 5000000)
          .sort((a, b) => a.distance - b.distance);
        this.filtered = [this.filtered[0]];
        this.spinner.hide();
        break
      default:
        console.log("wrong input filter");
        this.filtered = this.list;
        this.spinner.hide();
    }
  }

  clearAll() {
    this.filtered = this.list
  }

  getLatitudeLongitude(house: House) {
    let address = house.street;
    // Initialize the Geocoder
    let geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //callback(results[0], house);
          console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng())
        }
      });
    }
  }

  ngOnDestroy() {
  }
}
