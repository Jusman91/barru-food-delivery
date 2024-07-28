import { CSSProperties } from 'react';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

type StylesType = {
	SkeletonStyle: CSSProperties;
};

function Styles(): StylesType {
	const breakpoints = useBreakpoint();

	const SkeletonStyle: CSSProperties = {
		width: (() => {
			if (breakpoints.xs) return '80px';
			if (breakpoints.sm) return '120px';
			if (breakpoints.md) return '160px';
			if (breakpoints.lg) return '200px';
			return '200px';
		})(),
		height: (() => {
			if (breakpoints.xs) return '80px';
			if (breakpoints.sm) return '120px';
			if (breakpoints.md) return '160px';
			if (breakpoints.lg) return '200px';
			return '200px';
		})(),
		borderRadius: '100%',
	};

	return {
		SkeletonStyle,
	};
}

export default Styles;
