import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsResolversComponent } from './formations-resolvers.component';

describe('FormationsResolversComponent', () => {
  let component: FormationsResolversComponent;
  let fixture: ComponentFixture<FormationsResolversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsResolversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsResolversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
