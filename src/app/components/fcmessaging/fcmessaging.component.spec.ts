import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmessagingComponent } from './fcmessaging.component';

describe('FcmessagingComponent', () => {
  let component: FcmessagingComponent;
  let fixture: ComponentFixture<FcmessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmessagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
