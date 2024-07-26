import { cn } from '@/lib/utils';
import { useToggle } from '@/hooks';
import { LoginBtn, Logo } from '@/components/elements';
import Navlist from './Navlist';
import CloseNavlistBtn from './CloseNavlistBtn';
import OpenNavlistBtn from './OpenNavlistBtn';
import LoginMobileBtn from './LoginMobileBtn';

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
				<CloseNavlistBtn onClick={() => setOpen(false)} />
				<LoginMobileBtn onClick={() => {}} />
			</div>
			<LoginBtn
				className='hidden md:block rounded-3xl'
				onClick={() => {}}
			/>
			<OpenNavlistBtn onClick={() => setOpen(true)} />
		</section>
	);
};

export default Navbar;
