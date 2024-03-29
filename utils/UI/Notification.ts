// import { defineStore } from 'pinia';

// export const types = {
//     success: {
//         name: 'fa6-solid:circle-check',
//         color: 'text-green-400'
//     },
//     error: {
//         name: 'fa6-solid:circle-xmark',
//         color: 'text-red-400'
//     }
// };

// export type NotificationType = keyof typeof types;

// export type NotificationCreate = {
//     title: string;
//     message: string;
//     type: NotificationType
// }
// export type NotificationItem = {
//     title: string;
//     message: string;
//     icon: Object;
// }

// export const useNotification = defineStore('notification',{
//     state: () => ({
//         listNotifications: [] as NotificationItem[],
//     }),

//     actions: {
//         add(notificationObject: NotificationCreate) {
//             const newNotification: NotificationItem = {...notificationObject,icon:types[notificationObject.type]}
//             console.log(this.listNotifications)
//             this.listNotifications.push(newNotification);
//             console.log(this.listNotifications)
//         },
//         clouse(index: number) {
//             if (index >= 0 && index < this.listNotifications.length) {
//                 this.listNotifications.splice(index, 1);
//             }
//         },
//         clouseAll() {
//             this.listNotifications = [{}] as NotificationItem[];
//         },
//     },

//     getters: {},
// });
