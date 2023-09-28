export interface IChirp {
    // columns
    id: number
    user_id: number
    message: string
    created_at: string|null
    updated_at: string|null
    // relations
    user: IUser
}

export type IChirps = IChirp[]

export interface IUser {
    // columns
    id: number
    name: string
    email: string
    email_verified_at: string|null
    password?: string
    remember_token?: string|null
    created_at: string|null
    updated_at: string|null
    // relations
    chirps: IChirps
}

export type Users = IUser[]
