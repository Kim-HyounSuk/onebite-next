import React, { Suspense } from 'react';
import SearchBar from '../../components/Searchbar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<SearchBar />
			</Suspense>
			{children}
		</div>
	);
}
