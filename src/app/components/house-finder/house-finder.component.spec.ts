import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFinderComponent } from './house-finder.component';

describe('HouseFinderComponent', () => {
  let component: HouseFinderComponent;
  let fixture: ComponentFixture<HouseFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
