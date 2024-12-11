import React from "react";
import {
	Form,
	Input,
	Button,
	Select,
	DatePicker,
	Alert,
	Row,
	Col,
	Card,
} from "antd";

import { localEnum } from "../../../enum/local-enum";
import reservaService from "../../../service/reserva-service";

const RangePicker = DatePicker.RangePicker;
const Reserva = () => {
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		console.log(values);
		try {
			const responser = await reservaService.create(values);
			console.log("Reserva criada com sucesso:", responser);
			Alert.success("Reserva criada com sucesso!");
		} catch (error) {
			console.error("Erro ao criar a reserva:", error);
		}
	};

	const locaisOptions = localEnum.map((local) => ({
		value: local.id,
		label: local.local,
	}));

	return (
		<Row
			justify="center"
			style={{
				flexDirection: "column",
			}}
		>
			<Form.Item
				label={<span style={{ color: "#ffffff" }}>Local</span>}
				name="local"
				rules={[
					{
						required: true,
						message: "Por favor, selecione o local!",
					},
				]}
			>
				<Select
					placeholder="Selecione o local"
					options={locaisOptions}
				/>
			</Form.Item>

			<Form.Item
				label={<span style={{ color: "#ffffff" }}>Horário </span>}
				name="horario"
				rules={[
					{
						required: true,
						message: "Por favor, selecione o horário!",
					},
				]}
			>
				<RangePicker
					format="DD/MM/YYYY HH:mm"
					showTime={{ format: "DD/MM/YYYY HH:mm" }}
					style={{
						width: "100%",
					}}
				/>
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					block
					style={{
						backgroundColor: "#4CAF50",
						borderColor: "#4CAF50",
					}}
				>
					Enviar
				</Button>
			</Form.Item>
		</Row>
	);
};

export default Reserva;
