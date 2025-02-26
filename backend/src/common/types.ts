export enum Role {
    admin = 'Admin',
    user = 'User',
}
  
export enum UserAccountStatus {
  active = 'Active',
  pending = 'Pending',
  inactive = 'Inactive',
}

export enum UserCommandStatus {
  inTeam = 'In the team',
  expelled = 'Expelled',
}

export enum StatusProject {
  searchTeam = 'Search for team',
  teamFound = 'Team found',
}

export enum StatusIdea {
  new = 'New',
  underEditing = 'Under Editing',
  underApproval = 'Under Approval',
  approved = 'Approved',
  published = 'Published',
}

export enum StatusTeam {
  searchProject = 'Search for a project',
  inProgress = 'In progress',
}

export enum PrivacyTeam {
  open = 'Open',
  close = 'Close',
}

export enum Competence {
  no = 'No',
  html = 'HTML',
  typescript = 'TypeScript',
  postgresql = 'PostgeSQL',
}
  
export interface LoginResponseDto {
  access_token: string;
  username: string;
  firstname: string;
  lastname: string;
  roles: Role[];
}
  
export interface SignUpRequestDto {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}
  
export interface SignupResponseDto {
  success: boolean;
}
  
export interface CreateUserDto {
  name: string;
  firstname: string;
  lastname: string;
  password: string;
  roles: Role[];
  status: UserAccountStatus;
}
  
export type UpdateUserDto = Omit<CreateUserDto, 'password'>;
  
export type SecuredUser = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  roles: Role[];
  status: UserAccountStatus;
};