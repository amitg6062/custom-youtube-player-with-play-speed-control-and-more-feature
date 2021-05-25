import { TestBed } from '@angular/core/testing';

import { PenpencilplayerService } from './penpencilplayer.service';

describe('PenpencilplayerService', () => {
  let service: PenpencilplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenpencilplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
