import {
	IRightSideUserProfileProps,
	ITableUserInfoProps,
} from '@/types';
import TableUserInfo from '../table/TableUserInfo';

const RightSideUserProfile = ({
	data,
}: IRightSideUserProfileProps) => {
	const {
		address,
		age,
		city,
		email,
		phone,
		status,
		subdistrict,
	} = data;
	const checkStatus =
		status === 1 ? 'aktif' : 'tidak aktif';
	const dataUserInfo: ITableUserInfoProps[] = [
		{ label: 'Umur', value: age },
		{ label: 'Kota', value: city },
		{ label: 'Kecamatan', value: subdistrict },
		{ label: 'Alamat', value: address },
		{ label: 'No. Tlp.', value: phone },
		{ label: 'Email', value: email },
		{ label: 'Status', value: checkStatus },
	];
	return (
		<div className='absolute right-2 top-0 w-1/2 h-full shadow-inset-right bg-white'>
			<table className='w-full '>
				<tbody>
					{dataUserInfo.map((item, idx) => (
						<TableUserInfo
							key={idx}
							label={item.label}
							value={item.value}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RightSideUserProfile;
