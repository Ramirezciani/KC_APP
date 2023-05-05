import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajeRecibidoPage } from './mensaje-recibido.page';

describe('MensajeRecibidoPage', () => {
  let component: MensajeRecibidoPage;
  let fixture: ComponentFixture<MensajeRecibidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensajeRecibidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
