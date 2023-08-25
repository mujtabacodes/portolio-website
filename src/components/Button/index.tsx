import { forwardRef } from 'react'

interface IButton {
	children: React.ReactNode
	onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, IButton>((p, ref) => {
	const { children, ...props } = p

	return (
		<button ref={ref} {...props}>
			{children}
		</button>
	)
})

export default Button
