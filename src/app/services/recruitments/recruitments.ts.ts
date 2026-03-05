import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

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

@Injectable({
  providedIn: 'root',
})
export class RecruitmentsTs {
  private readonly options = { withCredentials: true };
  private http = inject(HttpClient);

  private recruitment = signal<IRecruitment | null>(null);
  public selectedRecruitment = this.recruitment.asReadonly();

  private candidates = signal<any>(null);
  public recruitmentCandidate = this.candidates.asReadonly();

  getRecruitments() {
    return this.http.get(environment.apiUrl, this.options);
  }

  getRecruitment(id: string) {
    return this.http.get(`${environment.apiUrl}/${id}`, this.options);
  }

  getCandidates(id: string) {
    const cachedData = this.candidates();
    if (cachedData) {
      return of(cachedData);
    }
    return this.http
      .get(`${environment.apiUrl}/${id}/candidates`, this.options)
      .pipe(tap((data) => this.candidates.set(data)));
  }

  setRecruitment(data: IRecruitment) {
    this.recruitment.set(data);
  }

  resetCandidates() {
    this.candidates.set(null);
  }

  updateStage(candidateID: string, stage: string) {
    const url = `${environment.apiUrl}/candidates/${candidateID}`;
    const body = { pipeline_stage: stage };

    return this.http.patch(url, body, this.options).pipe(
      tap((updatedCandidate) => {
        // Optional: Update your local signal cache if needed
        console.log('Backend updated:', updatedCandidate);
      }),
    );
  }
}
