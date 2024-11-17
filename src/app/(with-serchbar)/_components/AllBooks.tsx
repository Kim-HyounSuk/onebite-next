import BookItem from '@/components/BookItem';
import { IBookData } from '@/types/book';

export default async function AllBooks() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: 'force-cache' });
	if (!res.ok) {
		return <div>오류가 발생했습니다.</div>;
	}
	const books: IBookData[] = await res.json();

	return (
		<>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</>
	);
}
