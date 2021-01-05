import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFilterComponent } from './cards-filter.component';

describe('CardsFilterComponent', () => {
  let component: CardsFilterComponent;
  let fixture: ComponentFixture<CardsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
