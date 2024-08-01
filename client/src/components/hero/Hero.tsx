import { Input } from 'antd';
import { Button, Image } from '../elements';
import { IoPersonCircle } from 'react-icons/io5';
import { useBreakpoints } from '@/hooks';
import { IHeroProps } from '@/types';

const Hero = ({
	name,
	img,
	textTop,
	textBottom,
}: IHeroProps) => {
	const { md } = useBreakpoints();
	return (
		<section className='relative w-full px-0'>
			<div>
				<Image
					src={img}
					alt='Hero'
					className='h-[calc(100vh-40px)] md:h-[600px] object-[65%] md:object-cover'
				/>
			</div>
			<div className='absolute top-2/3 md:top-[40%] -translate-y-1/2 w-full md:w-1/2 pl-6 md:pl-12 text-white'>
				<small>Order Seafood, Fast & Fresh</small>
				<div className='text-clamp-7xl font-semibold leading-relaxed'>
					<h1 className='text-primary-40'>{textTop}</h1>
					<p>{textBottom}</p>
				</div>
				<small>Find & Get Your Food</small>
				<div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-[80%]'>
					{name === 'menus' ? null : (
						<Input.Search
							className='w-full'
							placeholder='Cari Menu...'
							enterButton
							size={md !== false ? 'large' : 'middle'}
						/>
					)}
					<Button
						type='primary'
						size={md !== false ? 'large' : 'middle'}
						icon={<IoPersonCircle />}
						className='rounded-3xl w-1/2'>
						Login/Signup
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
