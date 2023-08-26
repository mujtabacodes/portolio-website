import './style.css'

import { forwardRef } from 'react'

interface IButton {
	children: React.ReactNode
	onClick?: () => void
	type?: string
}

const Button = forwardRef<HTMLButtonElement, IButton>((p, ref) => {
	const { children, type, ...props } = p

	return (
		<button
			ref={ref}
			{...props}
			className='bg-white border border-black-500  hover:opacity-50 text-black font-bold py-2 px-4 rounded'
		>
			{children}
		</button>
	)
})

export default Button
