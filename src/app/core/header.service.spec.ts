import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: HeaderService = TestBed.get(HeaderService);
    expect(service).toBeTruthy();
  });
});
