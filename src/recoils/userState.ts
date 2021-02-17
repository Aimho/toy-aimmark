import { atom } from "recoil";
import { TSearchEngine } from "../routes/Detail/type";

export const userSearchEngine = atom({
  key: "userSearchEngine",
  default: "google" as TSearchEngine,
});

export const userProfile = atom({
  key: "userProfile",
  default: {
    id: "",
    email: "",
    photoUrl: "",
  },
});
