import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizikitComponents } from './dizikit-components';

describe('DizikitComponents', () => {
  let component: DizikitComponents;
  let fixture: ComponentFixture<DizikitComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DizikitComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizikitComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
