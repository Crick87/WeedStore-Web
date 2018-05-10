import { TestBed, inject } from '@angular/core/testing';

import { FirebaseCMService } from './firebase-cm.service';

describe('FirebaseCMService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseCMService]
    });
  });

  it('should be created', inject([FirebaseCMService], (service: FirebaseCMService) => {
    expect(service).toBeTruthy();
  }));
});
