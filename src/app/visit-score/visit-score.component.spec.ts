import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitScoreComponent } from './visit-score.component';

describe('VisitScoreComponent', () => {
  let component: VisitScoreComponent;
  let fixture: ComponentFixture<VisitScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
