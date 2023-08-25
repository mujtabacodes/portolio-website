import './style.css'

import React, { FC } from 'react'

interface IComponent {
	title: string
	description: string
}

const DetailedService: FC<IComponent> = ({ title, description }) => {
	return (
		<div className='flex flex-row justify-between items-center border-b border-dashed border-slate-400 pb-10 pt-10 '>
			<h1 className='text-4xl font-semibold'>{title}</h1>
			<p className='w-1/2'>{description}</p>
		</div>
	)
}

export default DetailedService
