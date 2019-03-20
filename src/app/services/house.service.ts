import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { House } from '../shared/house';

@Injectable({
  providedIn: 'root'
})

export class HouseService {

  constructor(private http: HttpClient) { }

  public getHouses(): Promise<House[]> {
    return this.http.get('/api').pipe(
      map((res: any) => res.houses.map((house: House) => new House(house))))
      .toPromise();
  }
}
