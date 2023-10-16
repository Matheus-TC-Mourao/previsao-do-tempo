import React from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

const Previsao = ({ city, data, handleVisible }) => {
	return (
		<div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
			<div className="relative">
				<span className="font-bold text-xl">{data.name}</span>
				<div
					className="absolute -top-1 right-0 font-bold text-red-600 cursor-pointer text-2xl"
					onClick={() => handleVisible()}
				>
					<MdOutlineCancel />
				</div>
			</div>
			<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
				<svg
					className="w-32 h-32"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
					></path>
				</svg>
			</div>
			<div className="flex flex-row items-center justify-center mt-6">
				<div className="font-medium text-6xl">{parseInt(data.main.temp)}°</div>
				<div className="flex flex-col items-center ml-6">
					<div className="capitalize">{data.weather[0].description}</div>
					<div className="mt-1 flex items-center justify-center">
						<span className="text-sm">
							<FaLongArrowAltUp />
						</span>
						<span className="text-sm font-light text-gray-500">
							{parseInt(data.main.temp_max)}°C
						</span>
					</div>
					<div className="flex items-center justify-center">
						<span className="text-sm">
							<FaLongArrowAltDown />
						</span>
						<span className="text-sm font-light text-gray-500">
							{parseInt(data.main.temp_min)}°C
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between mt-6">
				<div className="flex flex-col items-center">
					<div className="font-medium text-sm">Vel. Vento</div>
					<div className="text-sm text-gray-500">
						{parseInt(data.wind.speed)}km/h
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="font-medium text-sm">Humidade</div>
					<div className="text-sm text-gray-500">
						{parseInt(data.main.humidity)}%
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="font-medium text-sm">Sens. térmica</div>
					<div className="text-sm text-gray-500">
						{parseInt(data.main.feels_like)}°
					</div>
				</div>
			</div>
		</div>
	);
};

export default Previsao;
