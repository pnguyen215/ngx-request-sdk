import { TestBed } from '@angular/core/testing';

import { NgxAuthzService } from './ngx-authz.service';

describe('NgxAuthzService', () => {
  let service: NgxAuthzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAuthzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
