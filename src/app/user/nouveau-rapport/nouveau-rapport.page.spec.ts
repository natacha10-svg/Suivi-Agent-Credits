import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouveauRapportPage } from './nouveau-rapport.page';

describe('NouveauRapportPage', () => {
  let component: NouveauRapportPage;
  let fixture: ComponentFixture<NouveauRapportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NouveauRapportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
