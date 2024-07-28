import { cn } from '@/lib/utils';
import { useToggle } from '@/hooks';
import { LoginBtn } from '@/components/elements';
import Navlist from './Navlist';
import CloseNavlistBtn from './CloseNavlistBtn';
import OpenNavlistBtn from './OpenNavlistBtn';
import LoginMobileBtn from './LoginMobileBtn';
import { Logo } from '@/components/fragments';

const Navbar = () => {
	const [open, setOpen] = useToggle(false);

	return (
		<section className='sticky top-0 flex justify-between items-center gap-8 px-6 lg:px-[70px] z-[999] shadow-md'>
			<Logo />
			<div
				className={cn(
					'w-full md:w-fit bg-gradient-to-br from-white to-primary-0/80 md:bg-none h-screen md:h-fit flex flex-col md:flex-row absolute md:relative left-0 top-0 z-50 md:translate-x-[0%] duration-700',
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
