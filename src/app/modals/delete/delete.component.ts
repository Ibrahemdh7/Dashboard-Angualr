import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  
  @Input() itemId: number | undefined;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() {}

  confirmDelete() {
    this.delete.emit(this.itemId);
  }
}
