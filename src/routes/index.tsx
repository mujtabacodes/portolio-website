import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import AddPortfolio from '@components/AddPortfolio'
import Collections from '@pages/collections'
import Home from '@pages/home'

export default function Routing() {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add' element={<AddPortfolio />} />

				<Route path='/collections' element={<Collections />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
