import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroImobiliarioComponent } from './cadastro-imobiliario.component';

describe('CadastroImobiliarioComponent', () => {
  let component: CadastroImobiliarioComponent;
  let fixture: ComponentFixture<CadastroImobiliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroImobiliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroImobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
