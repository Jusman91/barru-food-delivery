import { Button, Image } from '@/components';
import { mockDataMenus } from '@/static/mockData';
import { useStore } from '@/store/store';
import { Modal } from 'antd';
import { useState } from 'react';
import { IoCartSharp } from 'react-icons/io5';

const SingleMenu = () => {
	const {
		name,
		description,
		price,
		thumbnail,
		category,
		status,
		restaurant_id,
	} = mockDataMenus[0];
	const { isOpenModals, closeModal } = useStore(
		(state) => ({
			isOpenModals: state.isOpenModals,
			closeModal: state.closeModal,
		}),
	);
	const checkStatus = status === 1 ? 'Ready' : 'Not Ready';
	const [quantity, setQuantity] = useState<number>(1);
	const handleQuantity = (type: 'i' | 'd') => {
		if (type === 'd' && quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
		if (type === 'i') {
			setQuantity((prev) => prev + 1);
		}
	};
	return (
		<section>
			<Modal
				className='!w-[70%]'
				open={isOpenModals.menu}
				centered
				closable
				closeIcon={null}
				footer={null}
				onCancel={() => closeModal('menu')}>
				<div className='flex flex-col lg:flex-row gap-16'>
					<Image
						src={thumbnail}
						alt='Menu'
						className='w-full lg:w-1/2 h-max rounded-xl'
					/>
					<div className='w-full flex flex-col gap-8'>
						<h3 className='text-clamp-h3 font-medium leading-tight'>
							{name}
						</h3>
						<p className='text-gray-500'>{description}</p>
						<p className='text-clamp-h5 font-semibold'>{`IDR ${price}`}</p>

						<div className='flex justify-between items-end'>
							<div>
								<p className='text-clamp-h6 font-semibold'>
									Jumlah
								</p>
								<div className='flex items-center gap-4 font-medium bg-primary-10 rounded-full'>
									<Button
										type='primary'
										className='border-none bg-inherit text-color-base rounded-s-full'
										onClick={() => handleQuantity('d')}>
										-
									</Button>
									{quantity}
									<Button
										type='primary'
										className='border-none bg-inherit text-color-base rounded-e-full'
										onClick={() => handleQuantity('i')}>
										+
									</Button>
								</div>
							</div>
							<Button
								// type='primary'
								shape='round'
								className='text-sm py-4 border-primary-40 text-primary-40'
								icon={<IoCartSharp />}
								iconPosition='end'>
								Tambahkan ke
							</Button>
						</div>
					</div>
				</div>
			</Modal>
		</section>
	);
};

export default SingleMenu;
