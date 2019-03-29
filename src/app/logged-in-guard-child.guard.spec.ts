import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedInGuardChildGuard } from './logged-in-guard-child.guard';

describe('LoggedInGuardChildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInGuardChildGuard]
    });
  });

  it('should ...', inject([LoggedInGuardChildGuard], (guard: LoggedInGuardChildGuard) => {
    expect(guard).toBeTruthy();
  }));
});
