import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RecruitmentsTs } from '../../../services/recruitments/recruitments.ts';

@Component({
  selector: 'app-job-description',
  imports: [LucideAngularModule, DatePipe],
  templateUrl: './job-description.html',
  styleUrl: './job-description.css',
})
export class JobDescription {
  private dataService = inject(RecruitmentsTs);

  public recruitment = this.dataService.selectedRecruitment;
}
