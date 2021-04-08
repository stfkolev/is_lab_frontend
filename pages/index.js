import Head from 'next/head';

import { Layout, PageHeader, Row, Col, Statistic, Card } from 'antd';
import {
	EditTwoTone,
	TagTwoTone,
	NotificationTwoTone,
	SmileTwoTone,
	BookTwoTone,
	InteractionTwoTone,
} from '@ant-design/icons';

import Navigation from '../components/Navigation.tsx';
import FooterLine from '../components/FooterLine.tsx';

import { useEffect, useState } from 'react';

import APIRequest from '../common/APIRequest.ts';

const { Content } = Layout;

export default function Home() {
	const api = new APIRequest('http://localhost:8000');

	const [authors, setAuthors] = useState([]);
	const [genres, setGenres] = useState([]);
	const [publishers, setPublishers] = useState([]);
	const [readers, setReaders] = useState([]);
	const [books, setBooks] = useState([]);
	const [borrowed, setBorrowed] = useState([]);

	useEffect(async () => {
		const authorsResponse = await api.get('authors');
		const genresResponse = await api.get('genres');
		const publishersResponse = await api.get('publishers');
		const readersResponse = await api.get('readers');
		const booksResponse = await api.get('books');
		// const borrowedResponse = await api.get('borrowed');

		// console.log(borrowedResponse.data);

		setAuthors(authorsResponse.data.data);
		setGenres(genresResponse.data.data);
		setPublishers(publishersResponse.data.data);
		setReaders(readersResponse.data.data);
		setBooks(booksResponse.data.data);
		// setBorrowed(borrowedResponse.data);
	}, []);
	return (
		<>
			<Head>
				<title>Homepage</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />

			<Layout className='layout' style={{ padding: '16pt 50pt' }}>
				<PageHeader
					ghost={false}
					onBack={() => window.history.back()}
					title='Home'
					subTitle='Overall statistics'>
					<Content>
						<Row gutter={16}>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Authors'
										value={authors.length}
										valueStyle={{ color: '#1890ff' }}
										prefix={<EditTwoTone />}
									/>
								</Card>
							</Col>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Publishers'
										value={publishers.length}
										valueStyle={{ color: '#1890ff' }}
										prefix={<NotificationTwoTone />}
									/>
								</Card>
							</Col>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Readers'
										value={readers.length}
										valueStyle={{ color: '#1890ff' }}
										prefix={<SmileTwoTone />}
									/>
								</Card>
							</Col>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Genres'
										value={genres.length}
										valueStyle={{ color: '#1890ff' }}
										prefix={<TagTwoTone />}
									/>
								</Card>
							</Col>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Books'
										value={books.length}
										valueStyle={{ color: '#1890ff' }}
										prefix={<BookTwoTone />}
									/>
								</Card>
							</Col>
							<Col span={4}>
								<Card>
									<Statistic
										title='Total Borrowed Books'
										value={28}
										valueStyle={{ color: '#1890ff' }}
										prefix={<InteractionTwoTone />}
									/>
								</Card>
							</Col>
						</Row>
					</Content>
				</PageHeader>
			</Layout>

			<FooterLine />
		</>
	);
}
