import { TestBed } from '@angular/core/testing';

import { TipoLogradouroService } from './tipo-logradouro.service';

describe('TipoLogradouroService', () => {
  let service: TipoLogradouroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoLogradouroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
