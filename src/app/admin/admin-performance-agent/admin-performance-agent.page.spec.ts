import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPerformanceAgentPage } from './admin-performance-agent.page';

describe('AdminPerformanceAgentPage', () => {
  let component: AdminPerformanceAgentPage;
  let fixture: ComponentFixture<AdminPerformanceAgentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminPerformanceAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
