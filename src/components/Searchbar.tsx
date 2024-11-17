'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Searchbar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [search, setSearch] = useState('');

	const q = searchParams.get('q');

	useEffect(() => {
		setSearch(q || '');
	}, [q]);

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onSubmit = () => {
		if (!search || q === search) return;
		router.push(`/search?q=${search}`);
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	return (
		<div className='flex gap-[10px] mb-[20px]'>
			<input
				className='flex-1 p-[15px] rounded-sm border-gray-100'
				value={search}
				onChange={onChangeSearch}
				onKeyDown={onKeyDown}
			/>
			<button className='w-[80px] rounded-sm border-none bg-blue-300 cursor-pointer text-white' onClick={onSubmit}>
				검색
			</button>
		</div>
	);
}
