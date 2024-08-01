import { ModalType } from '.';

export type ModalState = {
	isOpenModals: Record<ModalType, boolean>;
};
export type ModalAction = {
	openModal: (type: ModalType) => void;
	closeModal: (type: ModalType) => void;
};
export type ModalSlice = ModalState & ModalAction;
export type Store = ModalSlice;
