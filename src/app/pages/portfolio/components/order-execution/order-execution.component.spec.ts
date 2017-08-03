import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExecutionComponent } from './order-execution.component';

describe('OrderExecutionComponent', () => {
  let component: OrderExecutionComponent;
  let fixture: ComponentFixture<OrderExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
