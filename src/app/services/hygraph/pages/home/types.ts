export interface WorkExperience {
  uniqueId: number;
  companyName: string;
  companyImage: {
    url: string;
  };
  companyUrl: string;
  role: string;
  periodInCompany: string;
  description: string;
}

export interface HomePageInfo {
  workExperiences: WorkExperience[];
}

export interface HomePageData {
  page: HomePageInfo;
}
