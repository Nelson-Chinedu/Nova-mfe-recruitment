import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App } from './app';
import { Recruitment } from './src/components/recruitment/recruitment';
import { Recruitments } from './src/components/recruitments/recruitments';
import { JobDescription } from './src/components/recruitment/job-description/job-description';
import { Candidates } from './src/components/recruitment/candidates/candidates';

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
