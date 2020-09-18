import { TestBed } from '@angular/core/testing';

import { CadastroImobiliarioService } from './cadastro-imobiliario.service';

describe('CadastroImobiliarioService', () => {
  let service: CadastroImobiliarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroImobiliarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
