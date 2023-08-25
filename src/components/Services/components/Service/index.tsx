import './style.css'

import React, { FC } from 'react'

interface IService {
	image: string
	title: string
}

const Service: FC<IService> = ({ image, title }) => {
	return (
		<div className='service-container'>
			<img src={image} alt='' />
			<h3>{title}</h3>
			<p>learn More</p>
		</div>
	)
}

export default Service
