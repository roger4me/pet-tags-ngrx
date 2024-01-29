import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTextComponent } from './tag-text.component';

describe('TagTextComponent', () => {
  let component: TagTextComponent;
  let fixture: ComponentFixture<TagTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagTextComponent]
    });
    fixture = TestBed.createComponent(TagTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
