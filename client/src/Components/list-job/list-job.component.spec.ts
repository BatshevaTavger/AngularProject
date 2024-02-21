import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobComponent } from './list-job.component';

describe('ListJobComponent', () => {
  let component: ListJobComponent;
  let fixture: ComponentFixture<ListJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJobComponent]
    });
    fixture = TestBed.createComponent(ListJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
