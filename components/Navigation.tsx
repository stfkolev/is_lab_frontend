import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu } from 'antd';
import { Layout } from 'antd';

const { Header } = Layout;

export default function Navigation() {
	const router = useRouter();

	return (
		<Header>
			<Menu theme='dark' mode='horizontal' defaultSelectedKeys={[router.pathname == ]}>
				<Menu.Item key='home' active={router.pathname === } onSelect={() => {}}>
					<Link href='/'>Home</Link>
				</Menu.Item>
				<Menu.Item key='authors'>
					<Link href='/authors'>Authors</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
}
