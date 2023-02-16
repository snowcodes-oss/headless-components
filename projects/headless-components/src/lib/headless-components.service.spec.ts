import { TestBed } from '@angular/core/testing';

import { HeadlessComponentsService } from './headless-components.service';

describe('HeadlessComponentsService', () => {
  let service: HeadlessComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlessComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
