import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConfettiComponent } from './js-confetti.component';

describe('JsConfettiComponent', () => {
  let component: JsConfettiComponent;
  let fixture: ComponentFixture<JsConfettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsConfettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConfettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
