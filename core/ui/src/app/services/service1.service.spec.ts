import {TestBed} from '@angular/core/testing';

import {TrendingRepositoriesService} from './trendingRepositories.service';

describe('Service1', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingRepositoriesService = TestBed.get(TrendingRepositoriesService);
    expect(service).toBeTruthy();
  });
});
