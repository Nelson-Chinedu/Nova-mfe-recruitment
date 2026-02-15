import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App } from './app';
import { Recruitment } from './components/recruitment/recruitment';
import { Recruitments } from './components/recruitments/recruitments';
import { JobDescription } from './components/recruitment/job-description/job-description';
import { Candidates } from './components/recruitment/candidates/candidates';

export const routes: Routes = [
  // ... your actual routes
  {
    path: 'recruitment',
    children: [
      { path: '', component: Recruitments, pathMatch: 'full' },
      {
        path: ':id',
        component: Recruitment,
        children: [
          { path: '', redirectTo: 'job-description', pathMatch: 'full' },
          { path: 'job-description', component: JobDescription },
          { path: 'candidates', component: Candidates },
        ],
      },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];
