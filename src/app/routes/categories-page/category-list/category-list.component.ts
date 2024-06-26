import { Component } from '@angular/core';
import { CategoriesTableComponent } from "../../../features/categories/components/categories-table/categories-table.component";
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { LoadingOverlayComponent } from "../../../shared/overlays/loading-overlay/loading-overlay.component";

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  imports: [CategoriesTableComponent, LayoutComponent, LoadingOverlayComponent]
})
export class CategoryListComponent {
}
