import { TestBed } from '@angular/core/testing';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleBooksService = TestBed.get(GoogleBooksService);
    expect(service).toBeTruthy();
  });
});
