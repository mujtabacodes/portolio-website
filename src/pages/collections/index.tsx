import React, { FC } from 'react'

import Button from '@components/Button'

interface CollectionsProps {}

const Collections: FC<CollectionsProps> = () => {
	return (
		<div className='text-3xl font-bold underline'>
			hello
			<Button onClick={() => alert('button clicked')}>THis is button</Button>
		</div>
	)
}

export default Collections
