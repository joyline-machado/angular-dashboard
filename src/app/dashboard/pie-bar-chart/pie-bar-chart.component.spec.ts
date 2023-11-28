import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBarChartComponent } from './pie-bar-chart.component';

describe('PieBarChartComponent', () => {
  let component: PieBarChartComponent;
  let fixture: ComponentFixture<PieBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieBarChartComponent]
    });
    fixture = TestBed.createComponent(PieBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
