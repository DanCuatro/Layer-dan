import { defineStore } from 'pinia';
export type ModalProps = {
    [key: string]: any;
}

export type ModalItem = {
    is: string;
    props: ModalProps;
}

export const useModal = defineStore('modal',{
    state: () => ({
        listModals: [
        ] as ModalItem[],
    }),

    actions: {
        addModal(modalObject: ModalItem) {
            this.listModals.push(modalObject);
        },
        clouseModal(index: number) {
            if (index >= 0 && index < this.listModals.length) {
                this.listModals.splice(index, 1);
            }
        },
        clouseAllModals() {
            this.listModals = [{}] as ModalItem[];
        },
    },

    getters: {},
});