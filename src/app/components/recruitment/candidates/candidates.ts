import { Component, inject, input, effect, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  CdkDropListGroup,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { RecruitmentsTs } from '../../../services/recruitments/recruitments.ts';

interface ICandidate {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  social: string;
  url: string;
  pipeline_stage: 'sourced' | 'interview' | 'hired' | 'rejected' | 'in_progress';
  recruitment: {
    id: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface ICandidates {
  data: ICandidate[];
}
@Component({
  selector: 'app-candidates',
  imports: [LucideAngularModule, CdkDrag, CdkDropList, CdkDropListGroup],
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates {
  private dataService = inject(RecruitmentsTs);
  public sourced: WritableSignal<ICandidate[]> = signal<ICandidate[]>([]);
  public inProgress: WritableSignal<ICandidate[]> = signal<ICandidate[]>([]);
  public interview: WritableSignal<ICandidate[]> = signal<ICandidate[]>([]);
  public hired: WritableSignal<ICandidate[]> = signal<ICandidate[]>([]);
  public rejected: WritableSignal<ICandidate[]> = signal<ICandidate[]>([]);

  id = input.required<string>();

  constructor() {
    effect(() => {
      const recruitmentID = this.id();
      this.getCandidates(recruitmentID);
    });
  }

  getCandidates(recruitmentID: string) {
    this.dataService.getCandidates(recruitmentID).subscribe({
      next: (response: ICandidates) => {
        console.log(response.data);
        const all_candidates = response.data;
        this.sourced.set(all_candidates.filter((c: ICandidate) => c.pipeline_stage === 'sourced'));
        this.inProgress.set(
          all_candidates.filter((c: ICandidate) => c.pipeline_stage === 'in_progress'),
        );
        this.interview.set(
          all_candidates.filter((c: ICandidate) => c.pipeline_stage === 'interview'),
        );
        this.hired.set(all_candidates.filter((c: ICandidate) => c.pipeline_stage === 'hired'));
        this.rejected.set(
          all_candidates.filter((c: ICandidate) => c.pipeline_stage === 'rejected'),
        );
      },
      error(err) {
        console.log(err);
      },
    });
  }

  drop(event: CdkDragDrop<ICandidate[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      // If dropped in the same column, just reorder
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const candidate = event.previousContainer.data[event.previousIndex];
      const newStage = event.container.id; // This is the ID we set in HTML

      // If dropped in a different column, move the item between arrays
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      // Optional: Log which status it moved to
      console.log('Moved to:', event.container.id);

      // make the API call to update the drag on drop
      this.updateCandidateStage(candidate.id, newStage);
    }
  }

  updateCandidateStage(candidateId: string, stage: string) {
    // this update the pipeline stage
    this.dataService.updateStage(candidateId, stage).subscribe({
      next: () => console.log('Stage updated successfully'),
      error: (err) => {
        console.error('Failed to update stage', err);
      },
    });
  }
}
