import { ISkeleton } from '@/types';
import { Skeleton as AntdSkeleton } from 'antd';

const Skeleton = ({
	width,
	height,
	borderRadius,
}: ISkeleton) => {
	return (
		<AntdSkeleton.Node
			active
			style={{
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}>
			{' '}
		</AntdSkeleton.Node>
	);
};

export default Skeleton;
