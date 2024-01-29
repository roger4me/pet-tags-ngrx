import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { PetTagState } from '../core/pet-tag.reducer';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css'],
})
export class TagPreviewComponent implements OnChanges {
  @Input() petTagState!: PetTagState;
  imgSrc = '';
  tagClipText: string = '';
  gemsText: string = '';

  constructor() {}

  ngOnChanges() {
    this.imgSrc = `/assets/images/${this.petTagState?.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTagState.clip);
    this.gemsText = this.boolToText(this.petTagState.gems);
  }
  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }
}
