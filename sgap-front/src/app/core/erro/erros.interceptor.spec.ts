import { TestBed } from '@angular/core/testing';

import { ErrosInterceptor } from './erros.interceptor';

describe('ErrosInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrosInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrosInterceptor = TestBed.inject(ErrosInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
