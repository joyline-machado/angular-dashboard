import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeBarChartComponent } from './negative-bar-chart.component';

describe('NegativeBarChartComponent', () => {
  let component: NegativeBarChartComponent;
  let fixture: ComponentFixture<NegativeBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NegativeBarChartComponent]
    });
    fixture = TestBed.createComponent(NegativeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
