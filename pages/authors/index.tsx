import Head from 'next/head';
import { Layout } from 'antd';
import Navigation from '../../components/Navigation.tsx';
import FooterLine from '../../components/FooterLine.tsx';

const { Content } = Layout;

const AuthorsComponent = () => {
	return (
		<>
			<Head>
				<title>Homepage</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<Layout className='layout'>
				<Content style={{ padding: '0 50px' }}>
					<div className='site-layout-content'>About</div>
				</Content>
			</Layout>

			<FooterLine />
		</>
	);
};

export default AuthorsComponent;
