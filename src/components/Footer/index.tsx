import './style.css'

import React, { FC } from 'react'

import logo from '@assets/logo.png'

import FooterColumn from './components/FooterColumn'

interface IFooter {}

const Footer: FC<IFooter> = () => {
	return (
		<div className='flex flex-col justify-between md:flex-row m-20  border-t border-black pt-20 mb-10 '>
			<div className='flex flex-col w-full md:w-1/4 '>
				<img src={logo} alt='Logo' width={80} />
				<h4 className='font-semibold mt-5'>Newsletter</h4>
				<p className='w-3/4 text-sm mb-2'>
					By submitting your email, you agree to receive Moosh Digital newsletters via
					email.
				</p>
				<div className='flex justify-between bg-slate-200 rounded  w-full md:w-3/4 p-2'>
					<input
						className='w-2/3 bg-transparent color-grey px-3'
						type='text'
						placeholder='Email'
					/>{' '}
					|<button className='w-1/3 bg-transparent mx-2'>Subscribe</button>
				</div>
			</div>
			<div className='w-full md:w-1/4 mt-2'>
				<FooterColumn
					title='Quick Links'
					li1='Our work'
					li2='Services'
					li3='Career'
					li4='Blogs'
					li5='About Moosh'
					li6='Contact US'
				/>
			</div>
			<div className='w-full md:w-1/4 mt-2'>
				<FooterColumn
					title='Services'
					li1='Web Development'
					li2='UI/UX Design'
					li3='Mobile App Development'
					li4='Digital Marketing'
					li5='Search Engine Optimization'
					li6='Content Creation'
				/>
			</div>
			<div className='w-full md:w-1/4 mt-2'>
				<FooterColumn
					title='Our Policies'
					li1='Terms & Condition'
					li2='Privacy Policy'
					li3='Cookie Policy'
				/>
			</div>
		</div>
	)
}

export default Footer
