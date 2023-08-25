import './style.css'

import React, { FC, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import logo from '@assets/logo.png'
import Button from '@components/Button'

interface INav {}

const Nav: FC<INav> = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}
	return (
		<div className='lg:myContainer flex justify-between items-center border-b border-gray-300 p-1.5 w-full'>
			<div className='logo'>
				<img src={logo} alt='logo' className='w-20 h-20' />
			</div>
			<div className='hidden sm:block'>
				<ul className='flex gap-6 text-lg'>
					<li className='hover:opacity-80 cursor-pointer'>Home</li>
					<li className='hover:opacity-80 cursor-pointer'>Services</li>
					<li className='hover:opacity-80 cursor-pointer'>Careers</li>
					<li className='hover:opacity-80 cursor-pointer'>Blog</li>
					<li className='hover:opacity-80 cursor-pointer'>About Moosh</li>
				</ul>
			</div>
			<div className='hidden sm:block'>
				<Button>Contact Us</Button>
			</div>
			<div className='sm:hidden'>
				<AiOutlineMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />
			</div>
			{menuOpen && (
				<div className='fixed top-0 right-0 w-64 h-screen bg-white p-6 shadow z-50'>
					<ul className='flex flex-col gap-4'>
						<li className='hover:opacity-80 cursor-pointer' onClick={toggleMenu}>
							Home
						</li>
						<li className='hover:opacity-80 cursor-pointer' onClick={toggleMenu}>
							Services
						</li>
						<li className='hover:opacity-80 cursor-pointer' onClick={toggleMenu}>
							Careers
						</li>
						<li className='hover:opacity-80 cursor-pointer' onClick={toggleMenu}>
							Blog
						</li>
						<li className='hover:opacity-80 cursor-pointer' onClick={toggleMenu}>
							About Moosh
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Nav
