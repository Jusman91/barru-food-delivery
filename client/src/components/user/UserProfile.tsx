import { IUserProfileProps } from '@/types';
import LeftSideUserProfile from './LeftSideUserProfile';
import RightSideUserProfile from './RightSideUserProfile';

const UserProfile = ({ data }: IUserProfileProps) => {
	return (
		<div className='relative w-full h-[80vh] bg-primary-40 shadow-center'>
			<LeftSideUserProfile data={data} />
			<RightSideUserProfile data={data} />
		</div>
	);
};

export default UserProfile;
