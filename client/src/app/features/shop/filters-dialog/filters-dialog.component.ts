import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider'
import { MatSelectionList, MatListOption } from '@angular/material/list'
import { ShopService } from '../../../core/services/shop.service';
import { FormsModule } from '@angular/forms'
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filters-dialog',
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule
  ],
  templateUrl: './filters-dialog.component.html',
  styleUrl: './filters-dialog.component.scss',
})
export class FiltersDialogComponent {
  private dialogRef = inject(MatDialogRef<FiltersDialogComponent>);
  data = inject(MAT_DIALOG_DATA);
  shopService = inject(ShopService);
  
  selectedBrands: string[] = this.data.dialogSelectedBrands;
  selectedTypes: string[] = this.data.dialogSelectedTypes;

  applyFilters(){
    this.dialogRef.close({
      dialogSelectedBrands: this.selectedBrands,
      dialogSelectedTypes: this.selectedTypes
    });
  }
}
