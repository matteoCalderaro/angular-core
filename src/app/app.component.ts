import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  inputValue = this.courses[0].description;

  date = new Date();

  changeInput(param) {
    this.courses[0].description = param;
  }

  printEventListener(course: Course) {
    console.log("event bubbled", course);
  }

  style() {
    //return "green";
  }
}
