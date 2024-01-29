import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagExtrasComponent } from './tag-extras.component';

describe('TagExtrasComponent', () => {
  let component: TagExtrasComponent;
  let fixture: ComponentFixture<TagExtrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagExtrasComponent]
    });
    fixture = TestBed.createComponent(TagExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
