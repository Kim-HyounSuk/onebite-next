import BookItem from '@/components/BookItem';
import { IBookData } from '@/types/book';

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
	const { q } = await searchParams;

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`);
	if (!res.ok) {
		return <div>오류가 발생했습니다.</div>;
	}

	const books: IBookData[] = await res.json();

	return (
		<div>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}
