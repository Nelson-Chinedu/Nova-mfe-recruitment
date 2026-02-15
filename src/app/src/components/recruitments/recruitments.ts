import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

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
  imports: [LucideAngularModule],
  templateUrl: './recruitments.html',
  styleUrl: './recruitments.css',
})
export class Recruitments {
  private router = inject(Router);

  public recruitmentList: IRecruitment[] = [];

  constructor() {
    this.recruitmentList = [
      {
        id: '7a61c3a7-6d9a-4243-b919-41ab1e9ae507',
        job_title: 'Software Engineer',
        job_type: 'Full Time',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.',
        active_until: 'Jan 20, 2026',
        department: 'Engineering',
        location: 'Onsite',
        about_company: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur 
        iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.`,
      },
      {
        id: '7a61c3a7-6d9a-4243-b919-41ab1e9ae508',
        job_title: 'Product Manager',
        job_type: 'Full Time',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.',
        active_until: 'Jan 20, 2026',
        department: 'Engineering',
        location: 'Onsite',
        about_company: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur 
        iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.`,
      },
      {
        id: '7a61c3a7-6d9a-4243-b919-41ab1e9ae510',
        job_title: 'Senior QA Engineer',
        job_type: 'Full Time',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.',
        active_until: 'Jan 20, 2026',
        department: 'Engineering',
        location: 'Onsite',
        about_company: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur 
        iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.`,
      },
      {
        id: '7a61c3a7-6d9a-4243-b919-41ab1e9ae511',
        job_title: 'UX/UI Designer',
        job_type: 'Full Time',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.',
        active_until: 'Jan 20, 2026',
        department: 'Design',
        location: 'Remote',
        about_company: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos tenetur iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores. lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur 
        iusto incidunt dolor dicta totam itaque voluptas explicabo nobis maiores.`,
      },
    ];
  }

  handleViewRecruitment = (id: string) => {
    this.router.navigate(['/recruitment', id]);
  };
}
