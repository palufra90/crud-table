import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FruitSchema } from '@test/data-access-fruits';

@Component({
  selector: 'my-fruit-detail-dialog',
  templateUrl: './fruit-detail-dialog.component.html',
  styleUrls: ['./fruit-detail-dialog.component.scss'],
})
export class FruitDetailDialogComponent {
  fruit!: FruitSchema;
  fruitForm = new FormGroup({
    name: new FormControl(),
    genus: new FormControl(),
    family: new FormControl(),
    order: new FormControl(),
    id: new FormControl(),
  });
  titleDialog = 'Edit fruit';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    data: FruitSchema
  ) {
    this.fruit = data;
    this.fruitForm.patchValue(data);
    if (!data) {
      this.titleDialog = 'Add a new fruit';
    }
  }
}
