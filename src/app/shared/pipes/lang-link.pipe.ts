import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Pipe({
  name: 'langLink',
  standalone: true,
})
export class LangLinkPipe implements PipeTransform {
  private lang = inject(LanguageService);

  transform(value: string | null | undefined): string {
    if (!value) return this.lang.link('');
    return this.lang.link(value);
  }
}
