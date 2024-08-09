import {
	ComponentPropsWithoutRef,
	ElementType,
} from 'react';
import { Link } from 'react-router-dom';

export interface IMedsosIcon {
	path?: string;
	Icon: ElementType;
}
const MedsosIcon = ({ path, Icon }: IMedsosIcon) => {
	const IconComponent: ElementType<
		ComponentPropsWithoutRef<typeof Icon>
	> = Icon;
	if (!path) return null;
	return (
		<Link to={path} target='_blank'>
			<IconComponent className='w-6 h-6' />
		</Link>
	);
};

export default MedsosIcon;
