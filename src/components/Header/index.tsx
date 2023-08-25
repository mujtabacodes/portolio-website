import './style.css'

import React, { FC } from 'react'

import arrow from '@assets/icons/Group 48840.svg'
import headerImg from '@assets/WebP_Images (4)/Image 6.webp'

interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<div className='header-container'>
			<div className='content'>
				<div className='title'>We make your design experience</div>
				<div className='sub-title'>
					We believe in the power of data-driven intelligence to transform the way
					organizations make and apply decisions.
				</div>
				<div className='down-arrow'>
					<img src={arrow} alt='down-arrow' />
				</div>
			</div>
			<div className='mt-6'>
				{/* Image */}
				<img src={headerImg} alt='header image' className='w-full' />
			</div>
		</div>
	)
}

export default Header
