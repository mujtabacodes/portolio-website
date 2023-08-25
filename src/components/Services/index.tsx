import './style.css'

import React, { FC } from 'react'

import graphicImg from '@assets/icons/editing.svg'
import digitalmarketingImg from '@assets/icons/growth.svg'
import codingImg from '@assets/icons/programming-code-signs-1.svg'
import Service from '@components/Services/components/Service'

interface IServices {}

const Services: FC<IServices> = () => {
	return (
		<div className='services-container mx-5 py-6 pl-20'>
			<div className='service-text'>
				<div
					className='text-9xl font-bold relative text-gray-200'
					style={{ fontSize: '10rem' }}
				>
					SER
					<span className='text-black text-9xl absolute -top-3 -left-5'>SER</span>
				</div>
				<div
					className='text-9xl font-bold relative text-gray-200'
					style={{ fontSize: '10rem' }}
				>
					VIC
					<span className='text-black text-9xl absolute -top-3 -left-5'>VIC</span>
				</div>
				<div
					className='text-9xl font-bold relative text-gray-200'
					style={{ fontSize: '10rem' }}
				>
					ES<span className='text-black text-9xl absolute -top-3 -left-5'>ES</span>
				</div>
			</div>
			<div className='right-side grid grid-cols-2 gap-6 p-4'>
				<Service image={codingImg} title='Website Development' />
				<Service image={graphicImg} title='UI/UX Design' />
				<Service image={codingImg} title='Mobile App Development' />
				<Service image={digitalmarketingImg} title='Digital Marketing' />
			</div>
		</div>
	)
}

export default Services
