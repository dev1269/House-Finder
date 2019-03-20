import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-finder',
  templateUrl: './house-finder.component.html',
  styleUrls: ['./house-finder.component.scss']
})
export class HouseFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
