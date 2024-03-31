import {
  CreatedBy,
  IncrementIdProperty,
  LastEditedBy,
  MediaProperty,
  PageOrDatabase,
  Parent,
  TagsProperty,
  TextProperty,
  TitleProperty,
} from "@/_types/notion";

export interface NotionExperiencesDatabaseResponse {
  object: string;
  results: ExperiencesResult[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
}

export interface ExperiencesResult {
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
  properties: ExperiencesProperties;
  url: string;
  public_url: any;
}

export interface ExperiencesProperties {
  id: IncrementIdProperty;
  name: TitleProperty;
  imageUrl: TextProperty;
  companyURL: TextProperty;
  role: TextProperty;
  periodInCompany: TextProperty;
  description: TextProperty;
}
