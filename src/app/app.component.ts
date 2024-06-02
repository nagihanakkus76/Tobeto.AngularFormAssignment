import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlErrorMessagePipe } from './shared/pipes/form-control-error-message/form-control-error-message.pipe';
import { TranslatePipe } from './shared/pipes/translate/translate.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoadingOverlayComponent } from "./shared/overlays/loading-overlay/loading-overlay.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterModule,
    FormControlErrorMessagePipe,
    TranslatePipe,
    FormsModule,
    HttpClientModule, LayoutComponent,
    LoadingOverlayComponent
  ]
})
export class AppComponent {

}
