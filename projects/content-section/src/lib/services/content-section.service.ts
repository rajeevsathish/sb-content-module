import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentSectionService {

  constructor(private http: HttpClient) { }

  search() {
    const body = {
      request:
      {
        filters: {
          channel: '01268904781886259221',
          primaryCategory: ['Collection', 'Resource', 'Content Playlist', 'Course', 'Course Assessment', 'Digital Textbook', 'eTextbook', 'Explanation Content', 'Learning Resource', 'Lesson Plan Unit', 'Practice Question Set', 'Teacher Resource', 'Textbook Unit', 'LessonPlan', 'FocusSpot', 'Learning Outcome Definition', 'Curiosity Questions', 'MarkingSchemeRubric', 'ExplanationResource', 'ExperientialResource', 'Practice Resource', 'TVLesson'],
          visibility: ['Default', 'Parent']
        },
        query: 'test',
        fields: ['name', 'appIcon', 'mimeType', 'gradeLevel', 'identifier', 'medium', 'pkgVersion', 'board', 'subject', 'resourceType', 'primaryCategory', 'contentType', 'channel', 'organisation', 'trackable'],
        softConstraints: { badgeAssertions: 98, channel: 100 },
        mode: 'soft',
        facets: ['se_boards', 'se_gradeLevels', 'se_subjects', 'se_mediums', 'primaryCategory']
      }
    };
    return this.http.post('https://staging.sunbirded.org/api/content/v1/search?orgdetails=orgName,email', body).pipe(map((val: any) => {
      return val.result;
    }));
  }
}
