import { apiUrl } from "../config.json";

export const getClgByState = () => {
	return fetch(`${apiUrl}/College/byState`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
export const getClgByCourse = () => {
	return fetch(`${apiUrl}/College/byCourse`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
export const getDetailsByClgId = (id) => {
	return fetch(`${apiUrl}/College/Id/${id}`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
export const getSimilarClgs = (id) => {
	return fetch(`${apiUrl}/College/similarColleges/${id}`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
export const getStudents = (id) => {
	return fetch(`${apiUrl}/Student/getStudents/${id}`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
export const getStudentDetails = (id) => {
	return fetch(`${apiUrl}/Student/getStudentDetails/${id}`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};

export const getColleges = () => {
	return fetch(`${apiUrl}/College/`, {
		method: "GET",
		dataType: "json",
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		})
		.catch((err) => console.log(err));
};
