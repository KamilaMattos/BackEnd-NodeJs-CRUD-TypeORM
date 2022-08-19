export interface ICreateUser {
  name: string
  password: string
  email: string
  age: number
  created_at?: string
  updated_at?: string
}

export interface IUserID {
  id: string
}

export interface IUpdated {
  name?: string
  password?: string
  email?: string
  age?: number
  updated_at?: string
  id: string
}
