import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenpencilplayerComponent } from './penpencilplayer.component';

describe('PenpencilplayerComponent', () => {
  let component: PenpencilplayerComponent;
  let fixture: ComponentFixture<PenpencilplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenpencilplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenpencilplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
