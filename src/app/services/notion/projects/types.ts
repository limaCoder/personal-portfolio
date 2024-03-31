import {
  CreatedBy,
  IncrementIdProperty,
  LastEditedBy,
  MediaProperty,
  PageOrDatabase,
  Parent,
  TextProperty,
  TitleProperty,
} from "@/_types/notion";

export interface NotionProjectsDatabaseResponse {
  object: string;
  results: ProjectsResult[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
}

export interface ProjectsResult {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: ProjectsProperties;
  url: string;
  public_url: any;
}

export interface ProjectsProperties {
  id: IncrementIdProperty;
  projectName: TitleProperty;
  projectImage: MediaProperty;
  projectImageAltText: TextProperty;
  techImage: MediaProperty;
  techImageAltText: TextProperty;
  techName: TextProperty;
  projectLink: TextProperty;
}
