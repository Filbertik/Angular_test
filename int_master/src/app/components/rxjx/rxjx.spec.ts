import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjx } from './rxjx';

describe('Rxjx', () => {
  let component: Rxjx;
  let fixture: ComponentFixture<Rxjx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
