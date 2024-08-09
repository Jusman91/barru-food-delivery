import UserProfile from '@/components/user/UserProfile';
import { mockDataDrivers } from '@/static/mockData';
import { useStore } from '@/store/store';
import { Modal } from 'antd';

const DetailDriver = () => {
	const data = mockDataDrivers[0];
	const { isOpenModals, closeModal } = useStore(
		(state) => ({
			isOpenModals: state.isOpenModals,
			closeModal: state.closeModal,
		}),
	);

	return (
		<section>
			<Modal
				className='user-profile'
				open={isOpenModals.driver}
				centered
				closable
				closeIcon={null}
				footer={null}
				width={'80%'}
				onCancel={() => closeModal('driver')}>
				<UserProfile data={data} />
			</Modal>
		</section>
	);
};

export default DetailDriver;
