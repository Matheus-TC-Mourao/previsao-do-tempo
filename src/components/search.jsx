import { useEffect, useState } from 'react';
import Previsao from './previsao';

const Search = ({ city, isVisible, handleVisible }) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleFetch = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=64b17d3b41e199cec1f448974c6cda8e`
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
				setLoading(true);
			});
	};

	useEffect(() => {
		handleFetch();
	}, [isVisible]);

	return (
		<>{loading && <Previsao data={data} handleVisible={handleVisible} />}</>
	);
};

export { Search };
