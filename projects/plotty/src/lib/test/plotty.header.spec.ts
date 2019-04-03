import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottyHeader } from '../plotty.header';

describe('PlottyComponent', () => {
  let component: PlottyHeader;
  let fixture: ComponentFixture<PlottyHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlottyHeader ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlottyHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
