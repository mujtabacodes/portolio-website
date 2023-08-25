import './style.css'

import React, { FC } from 'react'

import creativeImg from '@assets/WebP_Images (4)/Image 4.webp'

interface IComponent {
	title?: string
	description: string
}

const DetailedService: FC<IComponent> = ({ title, description }) => {
	return (
		<div className='flex justify-between items-center border-b border-dashed border-slate-400 pb-10 pt-10 custom-style'>
			{title ? (
				<h1 className='text-4xl font-semibold'>{title}</h1>
			) : (
				<div className='relative'>
					<div className='dots-background absolute top-(-10) right-0 w-full h-full'></div>
					<div className='text-top-left absolute top-0 left-0 p-2'>
						<span className='font-bold'>Creative</span>
					</div>
					<div className='text-top-right absolute top-0 right-0 p-2'>
						<span>Another Text</span>
					</div>
					<img src={creativeImg} alt='' width={300} />
				</div>
			)}
			<p className='md:w-1/2 w-full '>{description}</p>
		</div>
	)
}

export default DetailedService
