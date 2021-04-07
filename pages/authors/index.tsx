import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Layout, Table, Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Navigation from '../../components/Navigation.tsx';
import FooterLine from '../../components/FooterLine.tsx';

import NewAuthorForm from '../../components/functionals/NewAuthorForm.tsx';

import APIRequest from '../../common/APIRequest.ts';
import notify from '../../common/Helpers.tsx';

const { Content } = Layout;

const AuthorsComponent = () => {
	const api = new APIRequest('http://localhost:8000');
	const [authors, setAuthors] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [visible, setVisible] = useState(false);

	/*! Table Columns */
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			sorter: {
				compare: (a, b) => a.id > b.id,
			},
		},
		{
			title: 'First Name',
			dataIndex: 'firstName',
			sorter: {
				compare: (a, b) => a.firstName.localeCompare(b.firstName),
			},
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
			sorter: {
				compare: (a, b) => a.lastName.localeCompare(b.lastName),
			},
		},
	];

	const rowSelection = {
		selectedRowKeys,
		onChange: (selectedKeys) => {
			setSelectedRowKeys(selectedKeys);
		},
	};

	useEffect(() => {
		api.get('authors').then((response) => {
			setAuthors(response.data.data);
		});
	}, []);

	return (
		<>
			<Head>
				<title>Authors</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<Layout className='layout' style={{ padding: '16pt 50pt' }}>
				<PageHeader
					ghost={false}
					onBack={() => window.history.back()}
					title='Author'
					subTitle='All about authors'
					extra={[
						<Button key='3'>Operation</Button>,
						<Button
							key='2'
							type='danger'
							disabled={selectedRowKeys.length == 0}
							onClick={() => {
								//TODO: Foreach key make a delete
							}}>
							Delete
						</Button>,
						<Button
							key='1'
							type='primary'
							onClick={() => {
								setVisible(true);
							}}>
							<PlusOutlined />
							New
						</Button>,
					]}>
					<Content>
						<Table
							rowSelection={rowSelection}
							rowKey='id'
							columns={columns}
							dataSource={authors}
							onChange={(pagination, filters, sorter, extra) => {
								console.log('params', pagination, filters, sorter, extra);
							}}
						/>

						<NewAuthorForm
							visible={visible}
							onCreate={(values: any) => {
								var author: any;

								api.post('authors', values).then((response) => {
									console.log(response);
									author = response.data.data;

									setVisible(false);

									api.get('authors').then((response) => {
										setAuthors(response.data.data);
										console.log('updated');
										notify(
											'success',
											'Successfully created new author',
											`You have successfully created the new author ${author.firstName} ${author.lastName}`,
										);
									});
								});
							}}
							onCancel={() => {
								setVisible(false);
							}}
						/>
					</Content>
				</PageHeader>
			</Layout>

			<FooterLine />
		</>
	);
};

export default AuthorsComponent;
