import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcontentComponent } from './bookcontent.component';

describe('BookcontentComponent', () => {
  let component: BookcontentComponent;
  let fixture: ComponentFixture<BookcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
