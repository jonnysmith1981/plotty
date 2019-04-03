import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotty } from '../plotty.component';

describe('PlottyComponent', () => {
  let component: Plotty;
  let fixture: ComponentFixture<Plotty>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotty ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
