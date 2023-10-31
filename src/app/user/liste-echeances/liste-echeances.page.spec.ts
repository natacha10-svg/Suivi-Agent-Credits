import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEcheancesPage } from './liste-echeances.page';

describe('ListeEcheancesPage', () => {
  let component: ListeEcheancesPage;
  let fixture: ComponentFixture<ListeEcheancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeEcheancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
