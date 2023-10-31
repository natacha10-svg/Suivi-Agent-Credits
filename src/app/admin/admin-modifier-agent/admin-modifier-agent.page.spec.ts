import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModifierAgentPage } from './admin-modifier-agent.page';

describe('AdminModifierAgentPage', () => {
  let component: AdminModifierAgentPage;
  let fixture: ComponentFixture<AdminModifierAgentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminModifierAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
