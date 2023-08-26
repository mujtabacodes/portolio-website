import './style.css'

import React, { FC } from 'react'
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

interface IFooterColumn {
	title: string
	li1: string
	li2: string
	li3: string
	li4?: string
	li5?: string
	li6?: string
}

const FooterColumn: FC<IFooterColumn> = ({ li1, li2, li3, li4, li5, li6, title }) => {
	return (
		<div>
			<h1 className='font-semibold'>{title}</h1>
			<ul>
				<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li1}</li>
				<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li2}</li>
				<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li3}</li>
				{li4 ? (
					<React.Fragment>
						<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li4}</li>
						<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li5}</li>
						<li className='pt-2 hover:opacity-80 hover:cursor-pointer'>{li6}</li>
					</React.Fragment>
				) : (
					<div>
						<li className='font-semibold pt-4'>Follow Us</li>
						<div className='flex gap-3 items-center'>
							<a className='bg-slate-200 rounded-full p-1 hover:cursor-pointer hover:text-slate-800 hover:scale-110'>
								<AiOutlineFacebook />
							</a>
							<a className='bg-slate-200 rounded-full  p-1 color hover:cursor-pointer hover:text-slate-800 hover:scale-110'>
								<AiOutlineTwitter />
							</a>
						</div>
					</div>
				)}
			</ul>
		</div>
	)
}

export default FooterColumn
