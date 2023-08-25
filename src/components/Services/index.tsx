import './style.css'

import React, { FC } from 'react'

import graphicImg from '@assets/icons/editing.svg'
import digitalmarketingImg from '@assets/icons/growth.svg'
import codingImg from '@assets/icons/programming-code-signs-1.svg'
import Service from '@components/Services/components/Service'

import DetailedService from './components/DetailedService'

interface IServices {}

const Services: FC<IServices> = () => {
	return (
		<div className='flex flex-col py-10 mx-20'>
			<div className='services-container '>
				<div className='service-text'>
					<div className=' font-bold relative text-gray-200 custom-service-text'>
						SER
						<span className='text-black text-9xl absolute -top-3 -left-5'>SER</span>
					</div>
					<div className=' font-bold relative text-gray-200 custom-service-text'>
						VIC
						<span className='text-black text-9xl absolute -top-3 -left-5'>VIC</span>
					</div>
					<div className=' font-bold relative text-gray-200 custom-service-text'>
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
			<div>
				<DetailedService
					description="Our team of experienced professionals is dedicated to delivering
					exceptional results that exceed client expectations. Whether it's
					branding, marketing, or web development,"
				/>
				<DetailedService
					title='Design'
					description="Our team of experienced professionals is dedicated to delivering
					exceptional results that exceed client expectations. Whether it's
					branding, marketing, or web development,"
				/>
				<DetailedService
					title='Develop'
					description="Our team of experienced professionals is dedicated to delivering
					exceptional results that exceed client expectations. Whether it's
					branding, marketing, or web development,"
				/>
				<DetailedService
					title='Marketing'
					description="Our team of experienced professionals is dedicated to delivering
					exceptional results that exceed client expectations. Whether it's
					branding, marketing, or web development,"
				/>
			</div>
		</div>
	)
}

export default Services
