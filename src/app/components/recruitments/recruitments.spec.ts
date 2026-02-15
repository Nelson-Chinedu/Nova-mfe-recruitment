import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recruitments } from './recruitments';

describe('Recruitments', () => {
  let component: Recruitments;
  let fixture: ComponentFixture<Recruitments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recruitments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recruitments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
