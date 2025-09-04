import { create } from "zustand";

const useUrlStore = create(set => ({
  urls: [],
  addUrl: url => set(state => ({ urls: [...state.urls, { ...url, clicks: 0 }] })),
  incrementClick: code =>
    set(state => ({
      urls: state.urls.map(u =>
        u.short === code ? { ...u, clicks: u.clicks + 1 } : u
      )
    }))
}));

export default useUrlStore;
