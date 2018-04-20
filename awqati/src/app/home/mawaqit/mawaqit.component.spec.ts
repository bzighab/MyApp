import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawaqitComponent } from './mawaqit.component';

describe('MawaqitComponent', () => {
  let component: MawaqitComponent;
  let fixture: ComponentFixture<MawaqitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaqitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawaqitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
