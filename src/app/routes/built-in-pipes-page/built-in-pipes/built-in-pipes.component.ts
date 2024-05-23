import { Component } from '@angular/core';
import { LayoutComponent } from "../../../shared/layout/layout.component";
import { BuiltInPipesContentComponent } from "../../../features/build-in-pipes/built-in-pipes-content/built-in-pipes-content.component";


@Component({
    selector: 'app-built-in-pipes',
    standalone: true,
    templateUrl: './built-in-pipes.component.html',
    styleUrl: './built-in-pipes.component.scss',
    imports: [LayoutComponent, BuiltInPipesContentComponent]
})
export class BuiltInPipesComponent {

}
