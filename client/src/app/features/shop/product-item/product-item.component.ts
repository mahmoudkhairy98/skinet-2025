import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card'
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIcon,
    CurrencyPipe
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product?: Product;
}
