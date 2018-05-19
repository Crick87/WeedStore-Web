import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRouteListComponent } from './map-route-list.component';

describe('MapRouteListComponent', () => {
  let component: MapRouteListComponent;
  let fixture: ComponentFixture<MapRouteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRouteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
