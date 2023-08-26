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
				<div className='relative creative-solution mt-10'>
					<div className='w-72 h-32 absolute dots-background'></div>
					<div className='text-1xl md:text-5xl font-light text-top-left absolute top-0 left-0 creative-text'>
						<span className='font-bold'>Creative</span>
						<span className='font-bold pl-10 block md:hidden'>Solutions</span>
					</div>
					<div className='text-5xl font-light text-top-right absolute top-0 right-0 p-2 solution-text hidden md:block'>
						<span>Solution</span>
					</div>
					<div className='w-full relative'>
						<img src={creativeImg} alt='' width={300} />
					</div>
				</div>
			)}
			<p className={`md:w-1/2 w-full ${!title ? 'pt-48' : null}`}>{description}</p>
		</div>
	)
}

export default DetailedService
