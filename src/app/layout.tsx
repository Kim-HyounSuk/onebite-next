import './globals.css';
import Link from 'next/link';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='max-w-[600px] min-h-screen mx-auto bg-white px-4 shadow-lg'>
					<header className='h-15 font-bold text-lg leading-[60px]'>
						<Link href='/'>📚 ONEBITE BOOKS</Link>
					</header>
					<main className='pt-2.5'>{children}</main>
					<footer className='py-24 text-gray-500'>제작 @winterlood</footer>
				</div>
			</body>
		</html>
	);
}
