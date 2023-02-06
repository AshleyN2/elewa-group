import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsSectionComponent } from './pages/jobs-section/jobs-section.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'jobs',
    component: JobsSectionComponent,
  },
];

@NgModule({
  declarations: [JobsSectionComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [JobsSectionComponent],
})
export class JobsSectionModule {}

