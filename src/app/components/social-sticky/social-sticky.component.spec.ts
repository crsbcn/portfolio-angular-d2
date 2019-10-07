import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStickyComponent } from './social-sticky.component';

describe('SocialStickyComponent', () => {
  let component: SocialStickyComponent;
  let fixture: ComponentFixture<SocialStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
