import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouveauClientPage } from './nouveau-client.page';

describe('NouveauClientPage', () => {
  let component: NouveauClientPage;
  let fixture: ComponentFixture<NouveauClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NouveauClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
