import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RecruitmentsTs } from '../../services/recruitments/recruitments.ts';

interface IRecruitment {
  id: string;
  job_title: string;
  job_type: string;
  description: string;
  active_until: string;
  department: string;
  location: string;
  about_company: string;
}

@Component({
  selector: 'app-recruitments',
  imports: [LucideAngularModule, NgxSkeletonLoaderModule],
  templateUrl: './recruitments.html',
  styleUrl: './recruitments.css',
})
export class Recruitments implements OnInit {
  private router = inject(Router);
  private dataService = inject(RecruitmentsTs);

  public recruitmentList: IRecruitment[] = [];

  recruitments = signal<any[]>([]);
  loading = signal<boolean>(false);

  ngOnInit() {
    this.getRecruitments();
  }

  getRecruitments() {
    this.loading.set(true);

    this.dataService.getRecruitments().subscribe({
      next: (data: any) => {
        console.log(data);
        this.recruitments.set(data.data);
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.loading.set(false);
      },
    });
  }

  handleViewRecruitment = (id: string) => {
    this.router.navigate(['/recruitment', id]);
  };
}
