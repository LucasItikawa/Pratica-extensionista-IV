import axios from "axios";

const API_URL = "https://api.exemplo.com/v1/rest/reserva";

const reservaService = {
	getAll: async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			console.error("Erro ao buscar todas as reservas:", error);
			throw error;
		}
	},

	getById: async (id) => {
		try {
			const response = await axios.get(`${API_URL}/${id}`);
			return response.data;
		} catch (error) {
			console.error(`Erro ao buscar a reserva com id ${id}:`, error);
			throw error;
		}
	},

	create: async (data) => {
		try {
			const response = await axios.post(API_URL, data);
			return response.data;
		} catch (error) {
			console.error("Erro ao criar a reserva:", error);
			throw error;
		}
	},

	update: async (id, data) => {
		try {
			const response = await axios.put(`${API_URL}/${id}`, data);
			return response.data;
		} catch (error) {
			console.error(`Erro ao atualizar a reserva com id ${id}:`, error);
			throw error;
		}
	},

	delete: async (id) => {
		try {
			const response = await axios.delete(`${API_URL}/${id}`);
			return response.data;
		} catch (error) {
			console.error(`Erro ao deletar a reserva com id ${id}:`, error);
			throw error;
		}
	},
};

export default reservaService;
