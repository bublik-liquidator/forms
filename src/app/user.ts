export interface UserData {
    id: number;
    picture: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birth_date: Date;
    gender: string;
    address: string;
    city: string;
    country: string;
    password: string;
    password_confirmation: string;
    data_processing_consent: boolean;
  }