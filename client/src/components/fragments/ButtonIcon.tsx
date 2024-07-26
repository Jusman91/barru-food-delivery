import { ButtonProps } from 'antd';
import { Button, Icon } from '../elements';

const ButtonIcon = ({
	className,
	icon,
	...props
}: ButtonProps) => {
	return (
		<Button {...props} className={className}>
			<Icon>{icon}</Icon>
		</Button>
	);
};

export default ButtonIcon;
