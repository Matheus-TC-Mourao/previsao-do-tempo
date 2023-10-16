import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Search } from './search';

const Home = () => {
	const [city, setCity] = useState('');
	const [isVisible, setIsVisible] = useState(false);

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleVisible = () => {
		setIsVisible(false);
	};

	return (
		<div>
			<div className="max-w-xl mx-auto">
				<div className="flex flex-col gap-5 items-center pt-5">
					{/* titulo */}
					<div className="text-white font-semibold md:text-[60px] text-[40px]">
						Previsão do tempo
					</div>
					{/* previsao */}
					<div className="w-full relative">
						<div className="flex items-center justify-center">
							{isVisible && (
								<Search
									city={city}
									isVisible={isVisible}
									handleVisible={handleVisible}
								/>
							)}
						</div>
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
							onClick={() => setIsVisible(!isVisible)}
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
