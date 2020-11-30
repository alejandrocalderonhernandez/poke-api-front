import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFootComponent } from './poke-foot.component';

describe('PokeFootComponent', () => {
  let component: PokeFootComponent;
  let fixture: ComponentFixture<PokeFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
