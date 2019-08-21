export interface RespuestaUsuarios {
  usuarios: User[];
}
export interface User {
  id: number;
  name: string;
  email?: any;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
}
export interface Contact {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
}
export interface Countries {
  id: number;
  name: string;
  border?: any;
  continent?: any;
  created_at: string;
  updated_at: string;
}
export interface Universities {
  id: number;
  name: string;
  website?: any;
  country?: any;
  created_at: string;
  updated_at: string;
}

