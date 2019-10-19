import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedLocationsComponent } from './paginated-locations.component';

describe('PaginatedLocationsComponent', () => {
  let component: PaginatedLocationsComponent;
  let fixture: ComponentFixture<PaginatedLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
