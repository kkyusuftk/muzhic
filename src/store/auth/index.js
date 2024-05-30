import { create } from "zustand";

const useAuthStore = create((set) => ({
	accessToken: null,
	setAccessToken: (accessToken) => set(() => ({ accessToken })),
}));

export default useAuthStore;
