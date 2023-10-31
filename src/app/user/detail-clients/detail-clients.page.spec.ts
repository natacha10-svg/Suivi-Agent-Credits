import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailClientsPage } from './detail-clients.page';

describe('DetailClientsPage', () => {
  let component: DetailClientsPage;
  let fixture: ComponentFixture<DetailClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
