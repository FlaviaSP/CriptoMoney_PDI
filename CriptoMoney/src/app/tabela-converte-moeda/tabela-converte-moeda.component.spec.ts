import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConverteMoedaComponent } from './tabela-converte-moeda.component';

describe('TabelaConverteMoedaComponent', () => {
  let component: TabelaConverteMoedaComponent;
  let fixture: ComponentFixture<TabelaConverteMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaConverteMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaConverteMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
