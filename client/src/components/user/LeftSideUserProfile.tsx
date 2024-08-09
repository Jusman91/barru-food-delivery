import { ILeftSideUserProfileProps } from '@/types';
import { Image } from '../elements';
import Medsos from '../fragments/Medsos';

const LeftSideUserProfile = ({
	data,
}: ILeftSideUserProfileProps) => {
	const { username, profilePic } = data;
	return (
		<div className='absolute left-2 top-0 w-1/2 h-full shadow-inset-left bg-white'>
			<Image
				src={profilePic}
				className='h-1/2 shadow-center'
			/>
			<div className='absolute top-[60%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[65%] h-3/5 flex flex-col items-center justify-center gap-4 bg-white shadow-center rounded-lg'>
				<Image
					src={profilePic}
					className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full'
				/>
				<div className='text-center'>
					<h5 className='text-primary-40 capitalize text-clamp-h5 font-semibold leading-tight'>
						{username}
					</h5>
					<small>Driver</small>
				</div>
				<Medsos
					pathInstagram='/drivers'
					pathFacebook='/drivers'
					pathTiktok='/drivers'
					pathTwitter='/drivers'
					pathYoutube='/drivers'
				/>
				<p>Layanan Pengiriman Cepat dan Aman</p>
			</div>
		</div>
	);
};

export default LeftSideUserProfile;
