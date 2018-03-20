import { TestBed, inject } from '@angular/core/testing';

import { JoggingServiceService } from './jogging-service.service';

describe('JoggingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoggingServiceService]
    });
  });

  it('should be created', inject([JoggingServiceService], (service: JoggingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
