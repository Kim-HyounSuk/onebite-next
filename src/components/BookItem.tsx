import type { IBookData } from '@/types/book';
import Link from 'next/link';

export default function BookItem({ id, title, subTitle, author, publisher, coverImgUrl }: IBookData) {
	return (
		<Link href={`/book/${id}`} className='flex gap-[15px] py-[20px] px-[10px]'>
			<img className='w-[80px]' src={coverImgUrl} />
			<div>
				<div className='font-bold'>{title}</div>
				<div className='break-keep'>{subTitle}</div>
				<br />
				<div className='text-gray-500'>
					{author} | {publisher}
				</div>
			</div>
		</Link>
	);
}
