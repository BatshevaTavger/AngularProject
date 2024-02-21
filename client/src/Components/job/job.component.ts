import { Component, Input } from '@angular/core';
import { Job } from 'src/Models/Job';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  
  @Input() selectedJob!: Job;

}
