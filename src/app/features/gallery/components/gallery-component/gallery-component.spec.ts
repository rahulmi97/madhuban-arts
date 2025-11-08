import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalarryComponent } from './gallery-component';

describe('GalarryComponent', () => {
  let component: GalarryComponent;
  let fixture: ComponentFixture<GalarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalarryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
