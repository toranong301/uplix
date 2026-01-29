import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangLinkPipe } from '../../shared/pipes/lang-link.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, LangLinkPipe],
  templateUrl: './investor-relations.html',
  styleUrl: './investor-relations.scss',
})
export class InvestorRelationsComponent {}
