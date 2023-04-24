import { TestBed } from '@angular/core/testing';

import { CrudemployeeService } from './crudemployee.service';

describe('CrudemployeeService', () => {
  let service: CrudemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
