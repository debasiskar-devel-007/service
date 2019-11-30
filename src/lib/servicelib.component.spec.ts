import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelibComponent } from './servicelib.component';

describe('ServicelibComponent', () => {
  let component: ServicelibComponent;
  let fixture: ComponentFixture<ServicelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
