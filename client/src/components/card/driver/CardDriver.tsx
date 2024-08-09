import { Image } from '@/components/elements';
import { useStore } from '@/store/store';
import { IDriverCardProps } from '@/types';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaCity, FaGlobeAsia } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';

const CardDriver = ({ data }: IDriverCardProps) => {
	const { username, city, phone, profilePic, subdistrict } =
		data;
	const openModal = useStore((state) => state.openModal);

	return (
		<div
			onClick={() => openModal('driver')}
			className='relative w-full h-[250px] bg-slate-800 overflow-hidden rounded-2xl shadow-glass-sm cursor-pointer'>
			<ul className='flex flex-col justify-center gap-4 w-[81%] ml-[20%] h-full text-xs md:text-sm text-white font-medium capitalize'>
				<li className='w-full h-10 bg-primary-30'>
					<div className='w-fit h-full flex items-center gap-1 pr-2 pl-[52%]'>
						<IoPersonCircle className='text-xl ' />
						<p className=''>{username}</p>
					</div>
				</li>
				<li className='w-full h-10 bg-primary-30'>
					<div className='w-fit h-full flex items-center gap-1 pr-2 pl-[40.5%]'>
						<FaGlobeAsia className='text-xl' />
						<p className='truncate'>{city}</p>
					</div>
				</li>

				<li className='w-full h-10 bg-primary-30'>
					<div className='w-fit h-full flex items-center gap-1 pr-2 pl-[28.5%]'>
						<BiSolidPhoneCall className='text-xl' />
						<p>{phone}</p>
					</div>
				</li>
				<li className='w-full h-10 bg-primary-30 '>
					<div className='w-fit h-full flex items-center gap-1 pr-2 pl-[17%]'>
						<FaCity className='text-xl' />
						<p>{subdistrict}</p>
					</div>
				</li>
			</ul>
			<div className='absolute inset-0 w-[80%] h-full bg-slate-950 blur-3xl trapezoid-bg duration-500' />
			<Image
				src={profilePic}
				className='absolute inset-0 w-3/4 h-full bg-slate-950 trapezoid-side duration-500'
			/>
		</div>
	);
};

export default CardDriver;
