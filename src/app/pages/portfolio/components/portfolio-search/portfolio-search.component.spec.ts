import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSearchComponent } from './portfolio-search.component';

describe('PortfolioSearchComponent', () => {
  let component: PortfolioSearchComponent;
  let fixture: ComponentFixture<PortfolioSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
