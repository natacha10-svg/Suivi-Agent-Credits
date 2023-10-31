import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModifierClientPage } from './admin-modifier-client.page';

describe('AdminModifierClientPage', () => {
  let component: AdminModifierClientPage;
  let fixture: ComponentFixture<AdminModifierClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminModifierClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
