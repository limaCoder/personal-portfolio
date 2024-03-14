interface ICompany {
  name: string;
  imageUrl: string;
  companyURL: string;
  role: string;
  periodInCompany: string;
  description: string;
}

export interface IExperienceProps {
  company: ICompany;
}
