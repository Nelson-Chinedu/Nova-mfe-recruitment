import { TestBed } from '@angular/core/testing';

import { RecruitmentsTs } from './recruitments.ts';

describe('RecruitmentsTs', () => {
  let service: RecruitmentsTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentsTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
