import { Input } from 'antd';

const SearchMenu = () => {
	return (
		<Input.Search
			placeholder='Cari...'
			className='w-full md:w-2/6 '
		/>
	);
};

export default SearchMenu;
