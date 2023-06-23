import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialFichaPage } from './historial-ficha.page';

describe('HistorialFichaPage', () => {
  let component: HistorialFichaPage;
  let fixture: ComponentFixture<HistorialFichaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
