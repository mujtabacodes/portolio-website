import axios from 'axios'
import React, { FC, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { baseURL } from '@api'
import Button from '@components/Button'

interface IAddPortfolio {}

const AddPortfolio: FC<IAddPortfolio> = () => {
	const navigate = useNavigate()
	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	const handleBackArrow = () => {
		navigate('/')
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0])
		}
	}

	const handleForm = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!selectedFile) {
			alert('Please select an image')
			return
		}

		const data = new FormData()
		data.append('uploadedPicture', selectedFile)

		try {
			const response = await axios.post(`${baseURL}/api/uploadPicture`, data, {
				// No headers needed
			})
			console.log(response)
			alert(response.data.message)
		} catch (error) {
			console.error('Error uploading image:', error)
			alert('Error uploading image')
		}
	}

	return (
		<div className='flex m-20  gap-4'>
			<div
				className='icon text-lg w-11 h-11 bg-slate-300 p-3 rounded-full hover:cursor-pointer hover:scale-125'
				onClick={handleBackArrow}
			>
				<AiOutlineArrowLeft />
			</div>
			<form className='flex ml-10 gap-5 flex-col' onSubmit={handleForm}>
				<input type='file' accept='image/*' onChange={handleFileChange} />
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	)
}

export default AddPortfolio
