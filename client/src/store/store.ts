import { Store } from '@/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createModalSlice } from './modalSlice';

export const useStore = create<Store>()(
	immer((...a) => ({
		...createModalSlice(...a),
	})),
);
