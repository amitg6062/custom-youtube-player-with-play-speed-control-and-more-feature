import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmitGuptaComponent } from './amit-gupta.component';

describe('AmitGuptaComponent', () => {
  let component: AmitGuptaComponent;
  let fixture: ComponentFixture<AmitGuptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmitGuptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmitGuptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
