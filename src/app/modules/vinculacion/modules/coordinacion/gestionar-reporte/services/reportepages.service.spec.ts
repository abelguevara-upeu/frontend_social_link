import { TestBed } from '@angular/core/testing';

import { ReportepagesService } from './reportepages.service';

describe('ReportepagesService', () => {
  let service: ReportepagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportepagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
