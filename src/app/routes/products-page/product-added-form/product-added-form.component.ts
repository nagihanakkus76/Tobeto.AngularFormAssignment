import { Component } from '@angular/core';
import { ProductAddedFormContentComponent } from "../../../features/products/components/product-added-form-content/product-added-form-content.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { LoadingOverlayComponent } from "../../../shared/overlays/loading-overlay/loading-overlay.component";

@Component({
  selector: 'app-product-added-form',
  standalone: true,
  templateUrl: './product-added-form.component.html',
  styleUrl: './product-added-form.component.scss',
  imports: [ProductAddedFormContentComponent, LayoutComponent, LoadingOverlayComponent]
})
export class ProductAddedFormComponent {

}
