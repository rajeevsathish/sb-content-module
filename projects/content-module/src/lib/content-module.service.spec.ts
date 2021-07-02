import { TestBed } from '@angular/core/testing';

import { ContentModuleService } from './content-module.service';

describe('ContentModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentModuleService = TestBed.get(ContentModuleService);
    expect(service).toBeTruthy();
  });
});
