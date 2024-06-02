import { Component } from '@angular/core';
import { CategoryAddedFormContentComponent } from "../../../features/categories/components/category-added-form-content/category-added-form-content.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { LoadingOverlayComponent } from "../../../shared/overlays/loading-overlay/loading-overlay.component";

@Component({
  selector: 'app-category-added-form',
  standalone: true,
  templateUrl: './category-added-form.component.html',
  styleUrl: './category-added-form.component.scss',
  imports: [CategoryAddedFormContentComponent, LayoutComponent, LoadingOverlayComponent]
})
export class CategoryAddedFormComponent {

}
