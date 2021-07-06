export interface ICardClick {
  event: MouseEvent;
  data: any;
}

export interface IViewMoreClick {
  event: MouseEvent;
  data: any;
}


interface IFilters {
  channel: string;
  primaryCategory: string[];
  visibility: string[];
}

interface ISoftConstraints {
  badgeAssertions?: number;
  channel?: number;
}

export interface IContentSearchRequest {
  request: {
    filters: IFilters;
    query?: string;
    fields: string[];
    softConstraints: ISoftConstraints;
    mode: string,
    facets: string[]
  };
}
