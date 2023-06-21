import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponderMensajePage } from './responder-mensaje.page';

describe('ResponderMensajePage', () => {
  let component: ResponderMensajePage;
  let fixture: ComponentFixture<ResponderMensajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResponderMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
