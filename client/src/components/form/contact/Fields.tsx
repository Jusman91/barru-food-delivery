import { FieldController } from '@/components/fragments';
import { getFields } from '@/lib/utils/getFields';

const Fields = () => {
	const { contact } = getFields();
	return contact.map((field) => (
		<FieldController
			key={field.name}
			{...field}
			className='pb-4'
		/>
	));
};

export default Fields;
