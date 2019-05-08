import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CasesService } from './cases.service';

describe('CasesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CasesService = TestBed.get(CasesService);
    expect(service).toBeTruthy();
  });
});
