import { defineStore } from "pinia";

interface User {
  uid: string;
  displayName?: string;
  email?: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null as User | null,
  }),
  actions: {
    setUser(user: User) {
      this.userInfo = user;
    },
    clearUser() {
      this.userInfo = null;
    },
  },
});
