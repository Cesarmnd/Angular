import { Student } from "./student";

export interface Course {
  id: number;
  name: string;
  teacher: string;
  start: Date;
  end: Date;
  ongoing: boolean;
  enrroll: boolean;
  img: string;
  students: Student[]
}

