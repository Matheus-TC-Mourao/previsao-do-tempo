import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import Previsao from './previsao';

const Home = () => {
	const [city, setCity] = useState('Manaus');
	const [cidade, setCidade] = useState('');
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const Search = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64b17d3b41e199cec1f448974c6cda8e`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => {
				console.log('Este foi o erro: ', error);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
		setCidade(city);
	};

	const handlePrevisao = () => {
		if (data !== null) {
			return <Previsao props={(cidade, data)} />;
		}
		return <span>Tcheu pai</span>;
	};

	return (
		<div>
			<div className="max-w-xl mx-auto">
				<div className="flex flex-col gap-5 items-center pb-14 border-b-2 border-white/70">
					{/* titulo */}
					<div className="text-white font-semibold md:text-[60px] text-[50px]">
						Previsão do tempo
					</div>
					{/* previsao */}
					<div className="w-full relative">
						<div className="flex items-center justify-center">
							{handlePrevisao}
						</div>
						<div>{cidade}</div>
						<div>Ícone</div>
						{/* <div>
							{data.main.temp} <span>{data.weather[0].main}</span>
						</div> */}
					</div>
					{/* input */}
					<div className="flex items-center md:w-[70%] w-[80%] h-12 bg-white">
						<input
							onChange={handleCity}
							value={city}
							placeholder="Insira aqui o nome da cidade"
							className="h-full flex-grow px-3 text-lg text-blue-gray-900 placeholder:text-blue-gray-500 outline outline-0 transition-all focus:outline-0 disabled:border-0"
						/>
						<button
							variant="text"
							className=" h-full px-4"
							onClick={() => Search()}
						>
							<BsSearch className="text-xl" />
						</button>
					</div>
					{/* divisao */}
				</div>
				{/* capitais */}
				<div>
					{/* titulo */}
					<div></div>
					{/* previsao capitais */}
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
