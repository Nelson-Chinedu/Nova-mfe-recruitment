import { NgClass } from '@angular/common';
import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-recruitment',
  imports: [LucideAngularModule, NgClass, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './recruitment.html',
  styleUrl: './recruitment.css',
})
export class Recruitment {
  private router = inject(Router);
  public activeTab: WritableSignal<string> = signal('');

  constructor() {
    this.activeTab = signal('job_description');
  }

  @Input() id?: string;

  ngOnInit() {
    console.log(this.id, 'ID from url');
  }

  handleBack = () => {
    this.router.navigate(['/recruitment']);
    console.log('Back to job list clicked');
  };
  handleActiveTab = (tab: string) => {
    this.activeTab.set(tab);
  };
}
