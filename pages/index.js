import Head from 'next/head';
import { Layout } from 'antd';
import Navigation from '../components/Navigation.tsx';
import FooterLine from '../components/FooterLine.tsx';

const { Content } = Layout;

export default function Home() {
	return (
		<>
			<Head>
				<title>Homepage</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<Layout className='layout'>
				<Content style={{ padding: '0 50px' }}>
					<div className='site-layout-content'>Content</div>
				</Content>
			</Layout>

			<FooterLine />
		</>
	);
}
