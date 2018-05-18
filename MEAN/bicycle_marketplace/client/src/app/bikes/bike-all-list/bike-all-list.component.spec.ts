import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAllListComponent } from './bike-all-list.component';

describe('BikeAllListComponent', () => {
  let component: BikeAllListComponent;
  let fixture: ComponentFixture<BikeAllListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeAllListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
