import React, { FC } from 'react'

import Header from '@components/Header'
import Nav from '@components/Nav'
import Portfolio from '@components/Portfolio'
import Services from '@components/Services'

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div className='mx-10'>
			<Nav />
			<Header />
			<Services />
			<Portfolio />
		</div>
	)
}

export default Home
