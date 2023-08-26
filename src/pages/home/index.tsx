import React, { FC } from 'react'

import Footer from '@components/Footer'
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
			<Footer />
		</div>
	)
}

export default Home
