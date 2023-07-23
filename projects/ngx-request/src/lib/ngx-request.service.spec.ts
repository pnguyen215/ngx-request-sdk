import { TestBed } from '@angular/core/testing';

import { NgxRequestService } from './ngx-request.service';

describe('NgxRequestService', () => {
  let service: NgxRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
