import { Rate } from 'antd';
import { Image } from '../elements';
import { IKAN_GURAME_BAKAR } from '@/assets';

const CardRating = () => {
	return (
		<div className='flex flex-col gap-6 bg-white lg:bg-inherit opacity-80 lg:opacity-100 p-4'>
			<p className='text-clamp-h6 font-medium'>
				“Anonymus adalah yang terbaik. Selain makanannya
				banyak dan enak, pelayanannya juga sangat baik,
				apalagi pengirimannya sangat cepat. Saya sangat
				merekomendasikan Anonymus kepada Anda”
			</p>
			<div className='flex items-center gap-4'>
				<Image
					src={IKAN_GURAME_BAKAR}
					alt='ProfilePic'
					className='w-16 h-16 rounded-full'
				/>
				<div>
					<p className='text-base lg:text-xl font-medium'>
						Jusman
					</p>
					<div className='flex items-center gap-2'>
						<Rate value={4} disabled />
						<small className='text-sm'>4.0</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardRating;
