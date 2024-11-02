"use client"

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Card({propsData}:Props<Card>) {

	const router = useRouter();
	const pathname = usePathname();

	return (
		<div 
			className="bg-white rounded-lg shadow-xl overflow-hidden bg-transparent" 
			onClick={()=>router.push(`${pathname}/${propsData.path}`)}>

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
