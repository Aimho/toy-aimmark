import { atom, selector } from "recoil";

export const renderAuthCheck = atom({
  key: "renderAuthCheck",
  default: false,
});

export const renderState = selector({
  key: "renderState",
  get: ({ get }) => {
    const isAuthCheck = get(renderAuthCheck);

    return {
      isAuthCheck,
    };
  },
});
