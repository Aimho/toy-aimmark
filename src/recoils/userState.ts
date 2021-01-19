import { atom, selector } from "recoil";
import { TSearchEngine } from "../component/SearchBar/type";

export const userId = atom({
  key: "userId",
  default: "",
});

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const userSearchEngine = atom({
  key: "userSearchEngine",
  default: "google" as TSearchEngine,
});

export const userState = selector({
  key: "userState",
  get: ({ get }) => {
    const id = get(userId);
    const email = get(userEmail);
    const searchEngine = get(userSearchEngine);

    return {
      id,
      email,
      searchEngine,
    };
  },
});
