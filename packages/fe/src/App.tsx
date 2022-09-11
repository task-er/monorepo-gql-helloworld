import { gql, useLazyQuery } from '@apollo/client'
import React, { ReactElement, useLayoutEffect } from 'react'

const GET_USER = gql`
	query getUser($userId: String!) {
		user(userId: $userId) {
			userId
			email
			age
			isSubscribed
		}
	}
`

const App = (): ReactElement => {
	// NOTE: Form형태여서 useQuery대신 useLayzyQuery 사용.
	const [getUser, { loading, data }] = useLazyQuery(GET_USER)

	useLayoutEffect(() => {
		getUser({
			variables: { userId: '85f10d3b-a555-4889-8229-3f50fe8913de' },
		}).catch((err) => {
			alert(err)
		})
	}, [])

	console.log(loading, data)
	// const handleSubmit = useCallback((e: Event) => {
	// 	getUser(e.target.userId)
	// 	e.preventDefault()
	// }, [])

	return (
		<main>
			<section>
				<fieldset>
					<legend>유저 생성</legend>
					<form>
						<input type="email" placeholder="이메일" /> <br />
						<input type="number" placeholder="나이" /> <br />
						<button type="submit">생성</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 수정</legend>
					<form>
						<input type="text" placeholder="uid" /> <br />
						<input type="email" placeholder="이메일" /> <br />
						<input type="number" placeholder="나이" />
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
					<form>
						<input type="text" placeholder="uid" /> <br />
						<button type="submit">삭제</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 조회</legend>
					<form onSubmit={undefined}>
						<input type="text" placeholder="uid" /> <br />
						<button type="submit">조회</button>
					</form>
				</fieldset>
			</section>

			<section>
				<fieldset>
					<legend>유저 단체 조회</legend>
					<form>
						<span>
							<input type="email" placeholder="이메일" />
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
