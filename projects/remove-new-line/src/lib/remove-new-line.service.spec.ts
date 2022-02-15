import { TestBed } from '@angular/core/testing';

import { RemoveNewLineService } from './remove-new-line.service';

describe('RemoveNewLineService', () => {
  let service: RemoveNewLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveNewLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
