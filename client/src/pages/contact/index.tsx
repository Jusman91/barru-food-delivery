import ContactForm from '@/components/form/contact/ContactForm';
import ContactInfo from '@/components/fragments/ContactInfo';

const Contact = () => {
	return (
		<section className='relative block lg:grid place-items-center w-full min-h-screen lg:h-[600px] bg-background-contact bg-cover'>
			<div className='max-w-[750px] mx-auto w-full h-full lg:h-[450px] py-4 border border-primary-10 rounded-none lg:rounded-2xl backdrop-blur-sm bg-glass bg-opacity-60'>
				<h3 className='text-clamp-h3 font-bold leading-tight text-center text-white/90 pb-8 lg:pb-4'>
					Hubungi Kami
				</h3>
				<ContactInfo />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
