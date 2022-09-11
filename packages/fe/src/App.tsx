import React, { ReactElement, useCallback, useEffect, useRef } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { CreateUser, DeleteUser, GetUser, GetUsers, UpdateUser } from './type'
import {
	CREATE_USER,
	DELETE_USER,
	GET_USER,
	GET_USERS,
	UPDATE_USER,
} from './query'

const App = (): ReactElement => {
	// NOTE: Form형태여서 useQuery대신 useLayzyQuery 사용.
	// NOTE: nullish처리 등의 예외처리x
	const [getUser, { data: resGetUser }] = useLazyQuery<GetUser>(GET_USER)
	const [createUser, { data: resCreateUser }] =
		useMutation<CreateUser>(CREATE_USER)
	const [deleteUser, { data: resDeleteUser }] =
		useMutation<DeleteUser>(DELETE_USER)
	const [updateUser, { data: resUpdateUser }] =
		useMutation<UpdateUser>(UPDATE_USER)
	const [getUsers, { data: resGetUsers }] = useLazyQuery<GetUsers>(GET_USERS)
	const emailViewer = useRef<HTMLSpanElement>(null)

	/**
	 * 유저 수정
	 */
	const handleUpdateUser = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			e.preventDefault()

			updateUser({
				variables: {
					updateUserData: {
						userId: e.target.uid.value,
						age: Number(e.target.age.value),
						isSubscribed: e.target.subscribe.value === 'true', // parse boolean
					},
				},
			}).catch((err) => {
				alert(err)
			})
		},
		[updateUser]
	)

	useEffect(() => {
		if (resUpdateUser?.updateUser !== undefined) {
			const { userId, email, age, isSubscribed } = resUpdateUser.updateUser
			const message = `
				uid: ${userId}\r\n
				이메일: ${email}\r\n
				나이: ${age}\r\n
				구독여부: ${isSubscribed?.toString()}
			`
			console.log(message)
			alert(message)
		}
	}, [resUpdateUser])

	/**
	 * 유저 단체 조회
	 */
	const handleGetUsers = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			e.preventDefault()

			getUsers({
				variables: {
					userIds: [e.target.uid.value],
				},
			}).catch((err) => {
				alert(err)
			})
		},
		[getUsers]
	)

	useEffect(() => {
		if (resGetUsers?.users !== undefined && resGetUsers.users.length > 0) {
			resGetUsers.users.forEach((user) => {
				const { userId, email, age, isSubscribed } = user
				const message = `
					uid: ${userId}\r\n
					이메일: ${email}\r\n
					나이: ${age}\r\n
					구독여부: ${isSubscribed?.toString()}
				`
				console.log(message)
				alert(message)
			})
		}
	}, [resGetUsers])

	/**
	 * 유저 삭제
	 */
	const handleDeleteUser = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			e.preventDefault()

			deleteUser({
				variables: {
					deleteUserData: {
						userId: e.target.uid.value,
					},
				},
			}).catch((err) => {
				alert(err)
			})
		},
		[deleteUser]
	)

	useEffect(() => {
		if (resDeleteUser?.deleteUser !== undefined) {
			const { userId, email, age, isSubscribed } = resDeleteUser.deleteUser
			const message = `
				uid: ${userId}\r\n
				이메일: ${email}\r\n
				나이: ${age}\r\n
				구독여부: ${isSubscribed?.toString()}
			`
			console.log(message)
			alert(message)
		}
	}, [resDeleteUser])

	/**
	 * 유저 생성
	 */
	const handleCreateUser = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			e.preventDefault()

			createUser({
				variables: {
					createUserData: {
						email: e.target.email.value,
						age: Number(e.target.age.value),
					},
				},
			}).catch((err) => {
				alert(err)
			})
		},
		[createUser]
	)

	useEffect(() => {
		if (resCreateUser?.createUser !== undefined) {
			const { userId, email, age, isSubscribed } = resCreateUser.createUser
			const message = `
				uid: ${userId}\r\n
				이메일: ${email}\r\n
				나이: ${age}\r\n
				구독여부: ${isSubscribed?.toString()}
			`
			console.log(message)
			alert(message)
		}
	}, [resCreateUser])

	// useState로 해도 어차피 input 부분만 re-redner돼서 상관 없음. 오히려 ts에선 그게 나을지도.
	/**
	 * 유저 조회
	 */
	const handleGetUser = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			e.preventDefault()

			getUser({
				variables: { userId: e.target.uid.value },
			}).catch((err) => {
				alert(err)
			})
		},
		[getUser]
	)

	useEffect(() => {
		if (resGetUser?.user !== undefined) {
			const { userId, email, age, isSubscribed } = resGetUser.user
			const message = `
				uid: ${userId}\r\n
				이메일: ${email}\r\n
				나이: ${age}\r\n
				구독여부: ${isSubscribed?.toString()}
			`
			console.log(message)
			alert(message)
		}
	}, [resGetUser])

	return (
		<main>
			<section>
				<fieldset>
					<legend>유저 생성</legend>
					<form onSubmit={handleCreateUser}>
						<input name="email" type="email" placeholder="이메일" /> <br />
						<input name="age" type="number" placeholder="나이" /> <br />
						<button type="submit">생성</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 수정</legend>
					<form onSubmit={handleUpdateUser}>
						<input name="uid" type="text" placeholder="uid" /> <br />
						<input name="email" type="email" placeholder="이메일" /> <br />
						<input name="age" type="number" placeholder="나이" />
						<fieldset aria-required="true">
							<legend>구독 여부</legend>

							<div>
								<input
									id="subscribe"
									type="radio"
									name="subscribe"
									value="true"
									required
								/>
								<label htmlFor="subscribe">구독함</label>
							</div>

							<div>
								<input
									id="notSubscribe"
									type="radio"
									name="subscribe"
									value="false"
									checked
									aria-checked="true"
									required
								/>
								<label htmlFor="notSubscribe">구독 안 함</label>
							</div>
						</fieldset>
						<button type="submit">수정</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 삭제</legend>
					<form onSubmit={handleDeleteUser}>
						<input name="uid" type="text" placeholder="uid" /> <br />
						<button type="submit">삭제</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 조회</legend>
					<form onSubmit={handleGetUser}>
						<input name="uid" type="text" placeholder="uid" /> <br />
						<button type="submit">조회</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 단체 조회</legend>
					<form onSubmit={handleGetUsers}>
						<span ref={emailViewer}>
							<input name="uid" type="text" placeholder="이메일" />
						</span>
						<button type="button">+</button>
						<br />
						<button type="submit">조회</button>
					</form>
				</fieldset>
			</section>
		</main>
	)
}

export default App
