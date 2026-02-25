import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZivaComponents } from './ziva-components';

describe('ZivaComponents', () => {
  let component: ZivaComponents;
  let fixture: ComponentFixture<ZivaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZivaComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZivaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
