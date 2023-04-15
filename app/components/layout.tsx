import type { ReactNode } from 'react';

export const Layout = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => {
	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
			{children}
		</>
	);
};
