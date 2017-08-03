import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioResultListComponent } from './portfolio-result-list.component';

describe('PortfolioResultListComponent', () => {
  let component: PortfolioResultListComponent;
  let fixture: ComponentFixture<PortfolioResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
