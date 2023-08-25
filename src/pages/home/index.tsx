import React, { FC } from 'react'

import Button from '@components/Button'

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div className='text-3xl font-bold underline'>
			hello
			<Button onClick={() => alert('button clicked')}>THis is button</Button>
		</div>
	)
}

export default Home
