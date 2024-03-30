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
} from "@/app/_types/notion";

export interface NotionSkillsDatabaseResponse {
  object: string;
  results: SkillsResult[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
}

export interface SkillsResult {
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
  properties: SkillsProperties;
  url: string;
  public_url: any;
}

export interface SkillsProperties {
  id: IncrementIdProperty;
  name: TitleProperty;
  skillType: TagsProperty;
  description: TextProperty;
  image: MediaProperty;
  alternativeText: TextProperty;
}
