import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeRapportsPage } from './liste-rapports.page';

describe('ListeRapportsPage', () => {
  let component: ListeRapportsPage;
  let fixture: ComponentFixture<ListeRapportsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeRapportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
