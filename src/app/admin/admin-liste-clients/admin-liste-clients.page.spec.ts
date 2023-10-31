import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeClientsPage } from './admin-liste-clients.page';

describe('AdminListeClientsPage', () => {
  let component: AdminListeClientsPage;
  let fixture: ComponentFixture<AdminListeClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
