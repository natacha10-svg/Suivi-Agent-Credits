import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListeAgentsPage } from './admin-liste-agents.page';

describe('AdminListeAgentsPage', () => {
  let component: AdminListeAgentsPage;
  let fixture: ComponentFixture<AdminListeAgentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListeAgentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
