import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type BuItem = {
  label: string;
  route: string;
  enabled: boolean;
  badge?: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  open = signal(false);
  toggle(){ this.open.update(v => !v); }
  close(){ this.open.set(false); }
  buItems: BuItem[] = [
    { label: 'Firefighting Training', route: '/bu/firefighting-training', enabled: false, badge: 'Coming soon' },
    { label: 'PPE', route: '/bu/ppe', enabled: true },
    { label: 'HRD', route: '/bu/hrd', enabled: false, badge: 'Coming soon' },
    { label: 'Waste Management', route: '/bu/waste-management', enabled: false, badge: 'Coming soon' },
  ];
}
