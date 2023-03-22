import { TestBed } from '@angular/core/testing';

import { PassGetterService } from './pass-getter.service';

describe('PassGetterService', () => {
  let service: PassGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
