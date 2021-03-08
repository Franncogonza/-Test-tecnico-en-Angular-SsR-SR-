import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateLicensesComponent } from './empty-state-licenses.component';

describe('EmptyStateLicensesComponent', () => {
  let component: EmptyStateLicensesComponent;
  let fixture: ComponentFixture<EmptyStateLicensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyStateLicensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
