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

export interface Project {
  id: string;
  projectName: string;
  projectImage: {
    url: string;
  };
  projectImageAltText: string;
  techName: string;
  techImage: {
    url: string;
  };
  techImageAltText: string;
  projectLink: string;
}

export interface Skill {
  uniqueId: number;
  name: string;
  skillType: string;
  description: string;
  image: {
    url: string;
  };
  alternativeText: string;
}

export interface HomePageInfo {
  workExperiences: WorkExperience[];
  projects: Project[];
  skills: Skill[];
}

export interface HomePageData {
  page: HomePageInfo;
}
