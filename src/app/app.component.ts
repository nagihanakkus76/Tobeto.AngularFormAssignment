
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControlErrorMessagePipe } from './shared/pipes/form-control-error-message/form-control-error-message.pipe';
import { TranslatePipe } from './shared/pipes/translate/translate.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FormControlErrorMessagePipe,
    TranslatePipe,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
