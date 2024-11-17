import React from 'react';
import SearchBar from '../../components/Searchbar';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<SearchBar />
			{children}
		</div>
	);
}
