import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IContentSearchRequest } from './model';
import { ContentSectionService } from '../services/content-section.service';
import { IContent, LibraryCardGridTypes } from '@project-sunbird/common-consumption-v8';

const DEFAULT_LAYOUT_CONFIG = {
  source: '',
  name: 'newLayout',
  options: ''
};
const DEFAULT_TITLE = 'Section';
const DEFAULT_MAX_CARD_COUNT = 4;
const DEFAULT_LOADING = false;

@Component({
  selector: 'sb-content-section',
  templateUrl: './content-section.component.html',
  styles: []
})
export class ContentSectionComponent implements OnInit {

  @Input() title: string = DEFAULT_TITLE;
  @Input() searchRequest: IContentSearchRequest = { request: { filters: { channel: '01268904781886259221', primaryCategory: ['Collection', 'Resource', 'Content Playlist', 'Course', 'Course Assessment', 'Digital Textbook', 'eTextbook', 'Explanation Content', 'Learning Resource', 'Lesson Plan Unit', 'Practice Question Set', 'Teacher Resource', 'Textbook Unit', 'LessonPlan', 'FocusSpot', 'Learning Outcome Definition', 'Curiosity Questions', 'MarkingSchemeRubric', 'ExplanationResource', 'ExperientialResource', 'Practice Resource', 'TVLesson'], visibility: ['Default', 'Parent'] }, query: 'test', fields: ['name', 'appIcon', 'mimeType', 'gradeLevel', 'identifier', 'medium', 'pkgVersion', 'board', 'subject', 'resourceType', 'primaryCategory', 'contentType', 'channel', 'organisation', 'trackable'], softConstraints: { badgeAssertions: 98, channel: 100 }, mode: 'soft', facets: ['se_boards', 'se_gradeLevels', 'se_subjects', 'se_mediums', 'primaryCategory'] } };
  @Input() layoutConfig = DEFAULT_LAYOUT_CONFIG;
  @Input() cardType: string = LibraryCardGridTypes.INFINITE_CARD_GRID;
  @Input() maxCardCount: number = DEFAULT_MAX_CARD_COUNT; /* Max card count to be shown */
  @Input() isMenu = false; /* Show Menu on each card */
  @Input() isLoading: boolean = DEFAULT_LOADING;

  @Output() cardClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() menuClick: EventEmitter<MouseEvent> = new EventEmitter();

  contentList: IContent[] = [];
  count: number;
  constructor(private contentSectionService: ContentSectionService) { }

  ngOnInit(): void {
    this.fetchContents();
  }

  fetchContents() {
    if (this.searchRequest) {
      console.log(this.searchRequest);
      this.contentSectionService.search().subscribe((res: any) => {
        console.log('res', res);
        this.contentList = res.content;
        this.count = res.count;
      });
    }
  }

  /**
   * Triggers event on card click
   * @param event HTML Click event
   * @param data Content data for selected card
   */
  onCardClick(event: MouseEvent) {
    this.cardClick.emit(event);
  }

  onCardMenuClick(event: MouseEvent) {
    this.menuClick.emit(event);
  }
}
