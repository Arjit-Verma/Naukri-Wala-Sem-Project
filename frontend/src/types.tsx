export interface ResumeData {
  name: string;
  email: string;
  experience: string;
  education: string;
  skills: string[];
}

export interface Template {
  id: number;
  name: string;
  thumbnail: string; // image path or base64
}

export type MenuItem2 = {
  id: number;
  title: string;
  link: string;
};

export type ProfileCardProps = {
  name: string;
  rollnum: string;
  img: string;
  company: string;
  date: string;
};

export type CompanyProfileCardProps = {
  name: string;
  college: string;
  date: string;
};
