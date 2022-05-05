export interface ITableData {
  name: string;
  age: number;
  email: string;
  servicesAvailed: string;
  servicedBy: string;
  ambianceRating: number;
  cleanlinessRating: number;
  serviceRating: number;
  overallRating: number;
  experienceRating: number;
  comments: string;
}

export interface IServices {
  service: string;
  value: number;
}
