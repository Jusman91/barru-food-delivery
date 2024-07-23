import { Grid } from 'antd';

const { useBreakpoint } = Grid;
export const useBreakpoints = () => {
	const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
	return {
		xs,
		sm,
		md,
		lg,
		xl,
		xxl,
	};
};
