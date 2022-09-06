import { TestBed } from '@angular/core/testing';

import { MesInfoService } from './mes-info.service';

describe('MesInfoService', () => {
  let service: MesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
