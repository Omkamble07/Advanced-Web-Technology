import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTP } from './http';

describe('HTTP', () => {
  let component: HTTP;
  let fixture: ComponentFixture<HTTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HTTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
