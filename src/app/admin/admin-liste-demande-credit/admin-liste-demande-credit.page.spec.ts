import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeDemandeCreditPage } from './admin-liste-demande-credit.page';

describe('AdminListeDemandeCreditPage', () => {
  let component: AdminListeDemandeCreditPage;
  let fixture: ComponentFixture<AdminListeDemandeCreditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeDemandeCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
