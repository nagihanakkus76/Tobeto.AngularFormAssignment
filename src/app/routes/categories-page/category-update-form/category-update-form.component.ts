import { Component } from '@angular/core';
import { CategoriesUpdateFormContentComponent } from "../../../features/categories/components/categories-update-form-content/categories-update-form-content.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { LoadingOverlayComponent } from "../../../shared/overlays/loading-overlay/loading-overlay.component";

@Component({
  selector: 'app-category-update-form',
  standalone: true,
  templateUrl: './category-update-form.component.html',
  styleUrl: './category-update-form.component.scss',
  imports: [CategoriesUpdateFormContentComponent, LayoutComponent, LoadingOverlayComponent]
})
export class CategoryUpdateFormComponent {
}
