import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  @Input() item: any; // Input data to be updated
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onSubmit(data: any) {
    this.update.emit(data);
  }
}
