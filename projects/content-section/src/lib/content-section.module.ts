import { NgModule } from '@angular/core';
import { ContentSectionComponent } from './components/content-section.component';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption-v8';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ContentSectionComponent],
  imports: [CommonConsumptionModule, HttpClientModule, CommonModule],
  exports: [ContentSectionComponent]
})
export class ContentSectionModule { }
