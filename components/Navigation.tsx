import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu } from 'antd';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';

const { Header } = Layout;

export default function Navigation(props) {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState('');

	useEffect(() => {
		switch (router.pathname) {
			case '/':
			case '/home':
				setCurrentPage('home');
				break;

			case '/authors':
				setCurrentPage('authors');
				break;

			default:
				break;
		}
	}, [currentPage]);

	return (
		<Header>
			<Menu theme='dark' mode='horizontal' selectedKeys={[currentPage]}>
				<Menu.Item key='home'>
					<Link href='/'>Home</Link>
				</Menu.Item>
				<Menu.Item key='authors'>
					<Link href='/authors'>Authors</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
}
