import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLogradouroComponent } from './tipo-logradouro.component';

describe('TipoLogradouroComponent', () => {
  let component: TipoLogradouroComponent;
  let fixture: ComponentFixture<TipoLogradouroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLogradouroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
