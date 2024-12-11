import { Card } from "antd";
import dayjs from "dayjs";
import React from "react";

const ListaReserva = ({}) => {
	const reservas = [
		{
			id: 1,
			local: "Sala 1",
			inicio: "2021-09-10T10:00:00",
			fim: "2021-09-10T11:00:00",
		},
		{
			id: 2,
			local: "Sala 2",
			inicio: "2021-09-10T10:00:00",
			fim: "2021-09-10T11:00:00",
		},
	];
	return (
		<div>
			{reservas.map((reserva) => (
				<Card
					key={reserva.id}
					title={reserva.local}
					style={{ width: "100%", marginTop: 16 }}
				>
					<p>
						<strong>Inicio:</strong>{" "}
						{dayjs(reserva.inicio).format("DD/MM/YYYY HH:mm")}
					</p>
					<p>
						<strong>Fim:</strong>{" "}
						{dayjs(reserva.fim).format("DD/MM/YYYY HH:mm")}
					</p>
				</Card>
			))}
		</div>
	);
};

export default ListaReserva;
