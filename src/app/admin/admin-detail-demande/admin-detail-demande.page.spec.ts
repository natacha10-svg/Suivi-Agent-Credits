import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDetailDemandePage } from './admin-detail-demande.page';

describe('AdminDetailDemandePage', () => {
  let component: AdminDetailDemandePage;
  let fixture: ComponentFixture<AdminDetailDemandePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDetailDemandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
