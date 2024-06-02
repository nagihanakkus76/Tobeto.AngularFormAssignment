import { Component } from '@angular/core';
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { BuiltInPipesContentComponent } from "../../../features/build-in-pipes/built-in-pipes-content/built-in-pipes-content.component";
import { LoadingOverlayComponent } from "../../../shared/overlays/loading-overlay/loading-overlay.component";


@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss',
  imports: [LayoutComponent, BuiltInPipesContentComponent, LoadingOverlayComponent]
})
export class BuiltInPipesComponent {

}
