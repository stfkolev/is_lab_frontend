import React from 'react';
import { Button, Modal, Form, Input } from 'antd';

interface Values {
	title: string;
	description: string;
	modifier: string;
}

interface NewAuthorFormProps {
	visible: boolean;
	onCreate: (values: Values) => void;
	onCancel: () => void;
}

const NewAuthorForm: React.FC<NewAuthorFormProps> = ({
	visible,
	onCreate,
	onCancel,
}) => {
	const [form] = Form.useForm();
	return (
		<Modal
			visible={visible}
			title='Create a new author'
			okText='Create'
			cancelText='Cancel'
			onCancel={onCancel}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log('Validation Failed:', info);
					});
			}}>
			<Form
				form={form}
				layout='vertical'
				name='form_in_modal'
				initialValues={{ modifier: 'public' }}>
				<Form.Item
					name='firstName'
					label='First Name'
					rules={[
						{
							required: true,
							message: 'Please input the first name of the author!',
						},
					]}>
					<Input />
				</Form.Item>
				<Form.Item
					name='lastName'
					label='Last Name'
					rules={[
						{
							required: true,
							message: 'Please input the last name of the author!',
						},
					]}>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default NewAuthorForm;
