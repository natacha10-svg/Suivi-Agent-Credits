import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeImpayesPage } from './admin-liste-impayes.page';

describe('AdminListeImpayesPage', () => {
  let component: AdminListeImpayesPage;
  let fixture: ComponentFixture<AdminListeImpayesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeImpayesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
