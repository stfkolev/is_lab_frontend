import Author from './models/Author';
import axios from 'axios';

class APIRequest {
	private url: string = '';

	constructor(url: string) {
		this.url = url;
	}

	/**
	 * GET Request by endpoint
	 */
	public async get<Model>(endpointName: string) {
		return await axios.get<Model>(this.url + `/api/${endpointName}`);
	}

	public async post<Model>(endpointName: string, data: any) {
		return await axios.post<Model>(this.url + `/api/${endpointName}`, data);
	}

	public async delete<Model>(endpointName: string, id: number) {
		return await axios.delete<Model>(this.url + `/api/${endpointName}/${id}`);
	}
}

export default APIRequest;
