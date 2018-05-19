import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRouteViewComponent } from './map-route-view.component';

describe('MapRouteViewComponent', () => {
  let component: MapRouteViewComponent;
  let fixture: ComponentFixture<MapRouteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRouteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRouteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
