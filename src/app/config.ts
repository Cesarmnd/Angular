import { InjectionToken } from "@angular/core"
import { CourseService } from "./services/course.service"
import { StudentService } from "./services/student.service"

export interface Settings {
  courses: CourseService,
  students: StudentService
}

export const config: Settings = {
  courses: new CourseService(),
  students: new StudentService()
}

export const token = new InjectionToken<Settings>('Config')