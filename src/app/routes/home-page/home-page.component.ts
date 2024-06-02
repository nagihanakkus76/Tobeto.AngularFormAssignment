import { Component } from '@angular/core';
import { LayoutComponent } from "../../shared/layout/layout.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [LayoutComponent]
})
export class HomePageComponent {
}
