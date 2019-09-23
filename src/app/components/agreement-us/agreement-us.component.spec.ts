import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementUsComponent } from './agreement-us.component';

describe('AgreementUsComponent', () => {
  let component: AgreementUsComponent;
  let fixture: ComponentFixture<AgreementUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
