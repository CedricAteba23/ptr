import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MddComponent } from './mdd.component';

describe('MddComponent', () => {
  let component: MddComponent;
  let fixture: ComponentFixture<MddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
