// components/Card.js
import { Play } from '@/lib/db/models/Play';
import Image from 'next/image';

export default function Card({propsData}:Props<Card>) {
	return (
		<div className="bg-white rounded-lg shadow-xl overflow-hidden bg-transparent">
			<Image
				className="w-full"
				src={propsData.src}
				alt={propsData.alt}
				width={400}
				height={566}
			></Image>
			<div className="p-4">
				<div className="text-xl text-center text-yellow-500">
					{propsData.header}
				</div>
			</div>
		</div>
	);
}
