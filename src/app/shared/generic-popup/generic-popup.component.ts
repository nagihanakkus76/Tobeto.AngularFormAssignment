import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-generic-popup',
  standalone: true,
  imports: [],
  templateUrl: './generic-popup.component.html',
  styleUrl: './generic-popup.component.scss'
})
export class GenericPopupComponent {
  @Output() confirm = new EventEmitter<boolean>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  onYesClick() {
    this.confirm.emit(true);
  }

  onNoClick() {
    this.confirm.emit(false);
  }
}
