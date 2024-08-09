import { ITableUserInfoProps } from '@/types';

const TableUserInfo = ({
	label,
	value,
}: ITableUserInfoProps) => {
	return (
		<tr>
			<td className='font-semibold pr-4 py-6 pl-10'>
				{label}
			</td>
			<td className='capitalize'>: {value}</td>
		</tr>
	);
};

export default TableUserInfo;
