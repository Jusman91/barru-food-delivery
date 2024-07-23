import { cn } from '@/lib/utils';
import { useToggle } from '@/hooks';
import {
	BtnLogin,
	BtnMobile,
	Icon,
	Logo,
} from '../elements';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { RiMenuFold2Fill } from 'react-icons/ri';
import Navlist from './Navlist';

const Navbar = () => {
	const [open, setOpen] = useToggle(false);

	return (
		<section className='flex justify-between items-center gap-8 py-2'>
			<Logo />
			<div
				className={cn(
					'w-full bg-bkg-base bg-opacity-60 h-screen md:h-fit flex flex-col md:flex-row absolute md:relative left-0 top-0 z-50 md:translate-x-[0%] duration-700',
					open ? 'translate-x-[0%]' : '-translate-x-full',
				)}>
				<Navlist />
				<BtnMobile
					className='absolute z-50 top-1 right-4'
					icon={
						<Icon>
							<IoCloseCircleOutline className='text-2xl' />
						</Icon>
					}
					onClick={() => setOpen(false)}
				/>
				<BtnLogin
					className='block md:hidden w-full h-10'
					onClick={() => {}}
				/>
			</div>

			<BtnLogin
				className='hidden md:block rounded-3xl'
				onClick={() => {}}
			/>
			<BtnMobile
				icon={
					<Icon>
						<RiMenuFold2Fill className='text-2xl' />
					</Icon>
				}
				onClick={() => setOpen(true)}
			/>
		</section>
	);
};

export default Navbar;
