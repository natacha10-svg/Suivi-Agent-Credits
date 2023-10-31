import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLocaliserClientPage } from './admin-localiser-client.page';

describe('AdminLocaliserClientPage', () => {
  let component: AdminLocaliserClientPage;
  let fixture: ComponentFixture<AdminLocaliserClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminLocaliserClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
