import { TestBed } from '@angular/core/testing';

import { ProcessoResolver } from './processo.resolver';

describe('ProcessoResolver', () => {
  let resolver: ProcessoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProcessoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
