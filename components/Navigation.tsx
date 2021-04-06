import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu } from 'antd';
import { Layout } from 'antd';

const { Header } = Layout;

export default function Navigation(props) {
	const router = useRouter();

	return (
		<Header>
			<Menu theme='dark' mode='horizontal'>
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
