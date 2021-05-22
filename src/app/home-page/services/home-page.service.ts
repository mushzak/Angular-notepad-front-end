import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  notes = [
    {
      id: 1,
      title: 'Note 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    }, {
      id: 2,
      title: 'Note 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    }, {
      id: 3,
      title: 'Note 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    }, {
      id: 4,
      title: 'Note 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    }, {
      id: 5,
      title: 'Note 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    }, {
      id: 6,
      title: 'Note 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est et nulla! Ab amet asperiores aspernatur,cum delectus distinctio eius eos est incidunt ipsa ipsam iste nesciunt officiis quas sint?'
    },
  ];

  constructor(
    private http: HttpClient
  ) {
  }

}
