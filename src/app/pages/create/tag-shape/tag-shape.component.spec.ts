import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagShapeComponent } from './tag-shape.component';

describe('TagShapeComponent', () => {
  let component: TagShapeComponent;
  let fixture: ComponentFixture<TagShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagShapeComponent]
    });
    fixture = TestBed.createComponent(TagShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
