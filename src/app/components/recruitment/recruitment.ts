import { NgClass } from '@angular/common';
import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { RecruitmentsTs } from '../../services/recruitments/recruitments.ts';

interface IRecruitment {
  id: string;
  job_title: string;
  job_type: string;
  department: string;
  location: string;
  description: string;
  about_company: string;
  active_until: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-recruitment',
  imports: [LucideAngularModule, NgClass, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './recruitment.html',
  styleUrl: './recruitment.css',
})
export class Recruitment {
  private router = inject(Router);
  private dataService = inject(RecruitmentsTs);

  public activeTab: WritableSignal<string> = signal('job_description');

  public loading: WritableSignal<boolean> = signal<boolean>(false);

  public recruitment = this.dataService.selectedRecruitment;
  public resetCandidate = this.dataService.resetCandidates();

  @Input() id?: string;

  ngOnInit() {
    if (this.id) {
      this.getRecruitment();
    }
  }

  handleBack = () => {
    this.resetCandidate;
    this.router.navigate(['/recruitment']);
  };

  handleActiveTab = (tab: string) => {
    this.activeTab.set(tab);
  };

  getRecruitment() {
    this.loading.set(true);

    this.dataService.getRecruitment(this.id as string).subscribe({
      next: (value) => {
        this.loading.set(false);
        this.dataService.setRecruitment(value as IRecruitment);
      },
      error: (err) => {
        this.loading.set(false);
      },
    });
  }
}
