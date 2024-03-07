import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  // Output event to emit data back to the parent component
  @Output() create: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onSubmit(data: any) {
    this.create.emit(data);
  }
}
