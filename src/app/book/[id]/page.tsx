import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<Record<string, string | string[]>> }) {
	const { id } = await params;
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`);
	if (!res.ok) {
		if (res.status === 404) {
			notFound();
		}
		return <div>에러가 발생했습니다.</div>;
	}
	const book = await res.json();

	return (
		<div className='flex flex-col gap-2.5'>
			<div
				className='relative flex justify-center p-5 bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url('${book.coverImgUrl}')` }}
			>
				<div className='absolute inset-0 bg-black bg-opacity-70'></div>
				<img src={book.coverImgUrl} alt='Cover' className='z-10 max-h-[350px] h-full' />
			</div>
			<div className='text-lg font-bold'>{book.title}</div>
			<div className='text-gray-500'>{book.subTitle}</div>
			<div className='text-gray-500'>
				{book.author} | {book.publisher}
			</div>
			<div className='bg-gray-100 p-4 leading-relaxed whitespace-pre-line rounded-md'>{book.description}</div>
		</div>
	);
}
