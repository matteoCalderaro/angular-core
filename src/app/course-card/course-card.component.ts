import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  AfterViewInit,
  ElementRef,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit {
  // INPUT
  // input sintax with input required (optional configuation)
  // in case of an obj, the requirement is also satisfied if the obj is null or undefined
  @Input({
    required: true,
  })
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  //OUTPUT
  @Output()
  courseSelected = new EventEmitter();

  onCourseViewed() {
    this.courseSelected.emit(this.course);
    console.log("event emitted");
  }

  classCategory() {
    return { beginner: this.course.category == "BEGINNER" };
    // if (this.course.category == "BEGINNER") {
    //   return "beginner";
    // }
  }

  styleCategory() {
    if (this.course.category == "BEGINNER") {
      return {
        "background-image": "url(" + this.course.iconUrl + ")",
        "background-size": "cover",
        color: "yellow",
      };
    }
  }
}
