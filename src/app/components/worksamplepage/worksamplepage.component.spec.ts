import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksamplepageComponent } from './worksamplepage.component';

describe('WorksamplepageComponent', () => {
  let component: WorksamplepageComponent;
  let fixture: ComponentFixture<WorksamplepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksamplepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksamplepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
