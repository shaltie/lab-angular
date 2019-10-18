import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTabsComponent } from './two-tabs.component';

describe('TwoTabsComponent', () => {
  let component: TwoTabsComponent;
  let fixture: ComponentFixture<TwoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
