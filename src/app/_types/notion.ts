export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface IncrementIdProperty {
  id: string;
  type: string;
  unique_id: UniqueId;
}

export interface UniqueId {
  prefix: string;
  number: number;
}

export interface TitleProperty {
  id: string;
  type: string;
  title: Title2[];
}

export interface Title2 {
  type: string;
  text: TextInTitle;
  annotations: AnnotationsInTitle;
  plain_text: string;
  href: any;
}

export interface TextInTitle {
  content: string;
  link: any;
}

export interface AnnotationsInTitle {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface TagsProperty {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface MediaProperty {
  id: string;
  type: string;
  files: Files[];
}

export interface Files {
  name: string;
  type: string;
  file: File;
}

export interface File {
  url: string;
  expiry_time: string;
}

export interface TextProperty {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PageOrDatabase {}
