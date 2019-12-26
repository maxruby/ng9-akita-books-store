import { TestBed, async, inject } from '@angular/core/testing';

import { BooksGuard } from './books.guard';

describe('BooksGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksGuard]
    });
  });

  it('should ...', inject([BooksGuard], (guard: BooksGuard) => {
    expect(guard).toBeTruthy();
  }));
});
