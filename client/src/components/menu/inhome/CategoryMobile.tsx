import { categoryMobileOptions } from '@/static';
import { Select } from 'antd';

const CategoryMobile = () => {
	return (
		<Select
			size='small'
			defaultValue={'ikan'}
			className='w-full'
			onChange={() => {}}
			options={categoryMobileOptions}></Select>
	);
};

export default CategoryMobile;
