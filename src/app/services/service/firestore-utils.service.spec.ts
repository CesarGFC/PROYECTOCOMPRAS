 import { TestBed } from '@angular/core/testing';

import { FirestoreUtilsService } from './firestore-utils.service';

describe('FirestoreUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreUtilsService = TestBed.get(FirestoreUtilsService);
    expect(service).toBeTruthy();
  });
});
