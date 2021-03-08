import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseInformationComponent } from './license-information.component';

describe('LicenseInformationComponent', () => {
  let component: LicenseInformationComponent;
  let fixture: ComponentFixture<LicenseInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
