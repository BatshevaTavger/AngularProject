import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Job } from '../../Models/Job';
// import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  listJobs: Job[] = [];
  private baseUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/Job`);
  }

  private listJobsDetails = new Subject<Job[]>();

  getListJobsDetails(){
    return this.listJobsDetails.asObservable();
  }

  setListJobsDetails(listJobs: Job[]){
    console.log(listJobs);
    this.listJobsDetails.next(listJobs);
  }

  // getJobs(): Observable<Job[]> {
  //   return this.http.get<Job[]>('http://localhost:3000/jobs')
  //     .pipe(
  //       tap((jobs: Job[]) => this.showJobs(jobs))
  //     );
  // } 

  // showJobs(jobs: Job[]): void {
  //   this.jobs = jobs;
  // }
}

