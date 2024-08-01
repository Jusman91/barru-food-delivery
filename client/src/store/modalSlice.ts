import { ModalState, ModalSlice, ModalType } from '@/types';
import { StateCreator } from 'zustand';

const initialState: ModalState = {
	isOpenModals: {
		menu: false,
	},
};
export const createModalSlice: StateCreator<
	ModalSlice,
	[['zustand/immer', never]],
	[],
	ModalSlice
> = (set) => ({
	...initialState,
	openModal: (type: ModalType) =>
		set((state) => ({
			isOpenModals: { ...state.isOpenModals, [type]: true },
		})),
	closeModal: (type: ModalType) =>
		set((state) => ({
			isOpenModals: {
				...state.isOpenModals,
				[type]: false,
			},
		})),
});
