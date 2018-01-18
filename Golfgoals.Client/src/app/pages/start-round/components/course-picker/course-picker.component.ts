import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-course-picker',
  templateUrl: './course-picker.component.html',
  styleUrls: ['./course-picker.component.css']
})
export class CoursePickerComponent implements OnInit {

  constructor(
    private coursesService: CoursesService
  ) { }

  states: Array<string> = ["Oklahoma", "Texas", "Kansas"];
  courses: Array<string> = ["Lake Hefner (south)", "Lake Hefner (north)"];

  ngOnInit() {
    
  }

}
