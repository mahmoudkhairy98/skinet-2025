import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card'
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common'
import { RouterLink } from "@angular/router";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIcon,
    MatButton,
    CurrencyPipe,
    RouterLink
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product?: Product;
}
