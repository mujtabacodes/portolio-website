import React, { FC } from 'react'

import Button from '@components/Button'
import Nav from '@components/Nav'

interface CollectionsProps {}

const Collections: FC<CollectionsProps> = () => {
	return (
		<>
			<Nav />
			<Button onClick={() => alert('button clicked')}>THis is button</Button>
		</>
	)
}

export default Collections
