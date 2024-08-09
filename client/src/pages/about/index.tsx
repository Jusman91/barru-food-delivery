import { ABOUT1, ABOUT2, HERO_ABOUT } from '@/assets';
import { Hero, Image } from '@/components';

const About = () => {
	return (
		<section>
			<Hero
				name='about'
				img={HERO_ABOUT}
				textTop='Kenali'
				textBottom='Tentang Kami'
			/>
			<div className='w-full px-6 lg:px-16'>
				<div className='py-16'>
					<h1 className='text-clamp-h1 font-semibold leading-tight'>
						Kami adalah kelompok pecinta kuliner yang suka
						memasak dan internet
					</h1>
					<Image
						src={ABOUT1}
						className='h-96 md:h-[500px] py-6'
					/>
					<p className='text-sm md:text-lg'>
						Kami percaya bahwa makanan bukan hanya kebutuhan
						dasar, tetapi juga seni yang harus dinikmati.
						Dengan menggabungkan teknologi dan cinta kami
						untuk kuliner, kami menciptakan platform yang
						memudahkan Anda untuk menemukan, memesan, dan
						menikmati makanan terbaik dari restoran
						terdekat.
					</p>
				</div>
				<div className='flex flex-col-reverse md:flex-row justify-center gap-8 pt-0 md:pt-16 pb-16'>
					<div className='flex-1'>
						<h1 className='text-clamp-h1 font-semibold leading-tight'>
							Sederhana, Mudah Untuk Semua
						</h1>
						<p className='text-sm md:text-lg pt-6'>
							Visi kami adalah membuat pengiriman makanan
							menjadi lebih sederhana dan lebih mudah untuk
							semua orang. Kami terus berinovasi untuk
							memberikan pengalaman terbaik, mulai dari
							memilih menu hingga makanan tiba di pintu
							Anda.
						</p>
					</div>
					<Image
						src={ABOUT2}
						className='flex-1 rounded-2xl'
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
