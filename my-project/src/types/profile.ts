export interface ProfileResponse {
  status: number;
  message: string;
  data: Profile | null;
}

export interface Profile {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}
