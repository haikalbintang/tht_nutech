export interface ProfileResponse {
  status: number;
  message: string;
  data: ProfileType | null;
}

export interface ProfileType {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}
