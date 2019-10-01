import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmepageComponent } from './aboutmepage.component';

describe('AboutmepageComponent', () => {
  let component: AboutmepageComponent;
  let fixture: ComponentFixture<AboutmepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
