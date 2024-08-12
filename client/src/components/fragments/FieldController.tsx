import { cn } from '@/lib/utils';
import { Form, type FormItemProps } from 'antd';

const { Item } = Form;
const FieldController = ({
	className,
	children,
	...props
}: FormItemProps) => {
	return (
		<Item {...props} className={cn('mb-0', className)}>
			{children}
		</Item>
	);
};

export default FieldController;
