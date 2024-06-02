import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
import { Localization } from '../../../localization/localization';



@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {

  private translatedText: string = "";
  private lastText: string = "";
  private lastLang: string = "";

  constructor(private translateService: TranslateService,
    private change: ChangeDetectorRef,
    private locale: Localization
  ) {
  }

  transform(text: string, targetLang: string): string {
    if (!text || !targetLang) {
      return text;
    }

    if (text !== this.lastText || targetLang !== this.lastLang) {
      this.lastText = text;
      this.lastLang = targetLang;

      this.translateService.translate(text, targetLang).subscribe(translated => {
        this.translatedText = translated.translations[0].text;
        this.change.markForCheck(); // Change detection için
      });
    }

    return this.translatedText || text;
  }
}
