import { TestBed, inject } from '@angular/core/testing';

import { HttpConnectService } from './http-connect.service';

describe('HttpConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConnectService]
    });
  });

  it('should be created', inject([HttpConnectService], (service: HttpConnectService) => {
    expect(service).toBeTruthy();
  }));
});
