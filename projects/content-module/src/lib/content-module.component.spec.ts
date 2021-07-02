import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentModuleComponent } from './content-module.component';

describe('ContentModuleComponent', () => {
  let component: ContentModuleComponent;
  let fixture: ComponentFixture<ContentModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
