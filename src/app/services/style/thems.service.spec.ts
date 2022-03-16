import { TestBed } from '@angular/core/testing';

import { ThemsService } from './thems.service';

describe('ThemsService', () => {
  let service: ThemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
