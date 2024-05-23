
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormContentComponent } from "../../../shared/forms/form-content/form-content.component";
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../shared/pipes/translate/translate.pipe';
import { AppNoCharacterInputDirective } from '../../../shared/directives/inputs/app-no-character-input.directive';
import { AppMultipleDirective } from '../../../shared/directives/structurals/app-multiple.directive';
import { AppWelcomeDirective } from '../../../shared/directives/structurals/app-welcome.directive';

@Component({
  selector: 'app-built-in-pipes-content',
  standalone: true,
  templateUrl: './built-in-pipes-content.component.html',
  styleUrl: './built-in-pipes-content.component.scss',
  imports: [CommonModule, FormContentComponent, ReactiveFormsModule, TranslatePipe,AppNoCharacterInputDirective,AppMultipleDirective,
 AppWelcomeDirective  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiltInPipesContentComponent {
  @Input() date: Date = new Date();
  @Input() title: string = 'Lorem, ipsum dolor.';
  @Input() num: number = 23.95;
  @Input() num2: number = 245;

  constructor() {}



}
