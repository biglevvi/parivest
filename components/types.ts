export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  client_id: string;
  phone: number;
  status: { access: string };
  acsess: string;
  createdAt: string;
}

export interface SingleUser {
  _id: string;
  name: string;
  first_name: string;
  last_name: string;
  accountName: string;
  investment: {
    experience: string;
    goal: string;
    marital_status: string;
    next_of_kin_email: string;
    next_of_kin_name: string;
    next_of_kin_phone: string;
    next_of_kin_relationship: string;
  };
  image: string;
  phone: string;
  role: string;
  email: string;
  client_id: string;
  document: {
    image: string;
    name: string;
  };
  employment: {
    annual_income: string;
  };
  status: {
    access: string;
    bank: string;
    biodata: string;
    document: string;
    employment: string;
    investment: string;
  };
  createdAt: string;
}
