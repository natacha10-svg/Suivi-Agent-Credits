import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeClientsPage } from './liste-clients.page';

describe('ListeClientsPage', () => {
  let component: ListeClientsPage;
  let fixture: ComponentFixture<ListeClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
