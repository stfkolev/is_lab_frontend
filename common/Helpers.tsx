import { notification } from 'antd';

const notify = (type, title, content) => {
	notification[type]({
		message: title,
		description: content,
		duration: 5,
	});
};

export default notify;
