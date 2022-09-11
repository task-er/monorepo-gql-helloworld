import { gql } from '@apollo/client'

export const CREATE_USER = gql`
	mutation createUser($createUserData: CreateUserInput!) {
		createUser(createUserData: $createUserData) {
			userId
			email
			isSubscribed
			age
		}
	}
`

// NOTE: 여기 인자도 $updateUserInput이 아니라 무조건 $updateUserData로 해야 한다.
export const UPDATE_USER = gql`
	mutation updateUser($updateUserData: UpdateUserInput!) {
		updateUser(updateUserData: $updateUserData) {
			userId
			email
			isSubscribed
			age
		}
	}
`

export const DELETE_USER = gql`
	mutation deleteUser($deleteUserData: DeleteUserInput!) {
		deleteUser(deleteUserData: $deleteUserData) {
			userId
			email
			isSubscribed
			age
		}
	}
`

// isSubscribed 안 받을 수 있음.
export const GET_USERS = gql`
	query getUsers($userIds: [String!]!) {
		users(userIds: $userIds) {
			userId
			email
			age
		}
	}
`

export const GET_USER = gql`
	query getUser($userId: String!) {
		user(userId: $userId) {
			userId
			email
			age
			isSubscribed
		}
	}
`
