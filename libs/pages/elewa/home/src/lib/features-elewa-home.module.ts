import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobsSectionComponent } from './pages/jobs-section/jobs-section.component';
import { Routes, RouterModule } from '@angular/router';

// routes
const routes: Routes = [
  {
    path: 'jobs',
    component: JobsSectionComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [JobsSectionComponent], //[HomePageComponent]
  exports: [JobsSectionComponent], //[HomePageComponent]
})
export class JobsSectionModule {}
//export class HomePageModule {}

