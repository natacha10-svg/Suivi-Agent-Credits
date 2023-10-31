import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeRapportsPage } from './admin-liste-rapports.page';

describe('AdminListeRapportsPage', () => {
  let component: AdminListeRapportsPage;
  let fixture: ComponentFixture<AdminListeRapportsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeRapportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
