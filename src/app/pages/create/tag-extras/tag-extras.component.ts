import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.css'],
})
export class TagExtrasComponent {
  tagClip: boolean = false;
  gems: boolean = false;
  @Output() toggleClipEvent = new EventEmitter();
  @Output() toggleGemsEvent = new EventEmitter();
  constructor() {}

  toggleClip(tagClip: boolean) {
    this.toggleClipEvent.emit(tagClip);
  }

  toggleGems(gems: boolean) {
    this.toggleGemsEvent.emit(gems);
  }
}
