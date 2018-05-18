import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMyListComponent } from './bike-my-list.component';

describe('BikeMyListComponent', () => {
  let component: BikeMyListComponent;
  let fixture: ComponentFixture<BikeMyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeMyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
