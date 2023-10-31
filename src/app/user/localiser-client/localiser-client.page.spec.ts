import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaliserClientPage } from './localiser-client.page';

describe('LocaliserClientPage', () => {
  let component: LocaliserClientPage;
  let fixture: ComponentFixture<LocaliserClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocaliserClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
