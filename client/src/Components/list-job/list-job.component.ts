import { Component, OnInit } from '@angular/core';
import { JobService } from '../../app/Services/job.service';
import { Job } from 'src/Models/Job';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})

export class ListJobComponent implements OnInit {

  jobs!: any[];
  filteredJobs!: any[];
  regionFilter: string | undefined;
  filterByArea: boolean = true;
  countSendCv: number = 0;
  user: any;
  selectedJob!: Job;
  clickShowJobDetails: boolean = false;

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit() {

    console.log("consoleeee");

    this.jobService.getJobs().subscribe(
      (jobs: Job[]) => {
        localStorage.setItem('listJob', JSON.stringify(jobs));
        this.user = JSON.parse(localStorage.getItem('user') || '{}');

        this.jobs = jobs;
        this.filteredJobs = this.jobs.filter(job => job.jobField === this.user.jobSearchField);

      });
  }

  showJobDetails(job: Job) {

    this.selectedJob = job;
    this.clickShowJobDetails = true;

  }

  sendCV(job: Job[]) {
    this.countSendCv++;
  }

  clickFilterByArea(area: string | null): void {
    if (area) {
      this.filteredJobs = this.jobs.filter(j => {
        return j.area.toLowerCase() === area.toLowerCase() && j.jobField === this.user.jobSearchField;
      });

    } else {

      this.filteredJobs = this.jobs.filter(job => job.jobField === this.user.jobSearchField);
    }
  }
}