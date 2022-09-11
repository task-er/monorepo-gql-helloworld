export interface User {
	userId: string
	email: string
	age: number
	isSubscribed: boolean
}

export interface GetUser {
	user: User
}

export interface CreateUser {
	createUser: User
}

export interface UpdateUser {
	updateUser: User
}

export interface DeleteUser {
	deleteUser: User
}

export interface GetUsers {
	users: User[]
}
