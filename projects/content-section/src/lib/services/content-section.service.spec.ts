import { TestBed } from '@angular/core/testing';

import { ContentSectionService } from './content-section.service';

describe('ContentSectionService', () => {
  let service: ContentSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
