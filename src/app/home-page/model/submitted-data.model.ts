import {Note} from './note.model';

export interface SubmittedData {
  type: string;
  body: Note;
  id: number;
}
