import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindPageComponent } from './tailwind-page.component';

describe('TailwindPageComponent', () => {
  let component: TailwindPageComponent;
  let fixture: ComponentFixture<TailwindPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
