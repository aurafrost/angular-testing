import { TestBed } from '@angular/core/testing';

import { Child1Service } from './child1.service';

describe('Child1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Child1Service = TestBed.get(Child1Service);
    expect(service).toBeTruthy();
  });
});
