import { atom } from "jotai";

export const steps = atom(0);

export interface UserInfo {
  email: string;
  phoneNumber: string;
  address: string;
  name: string;
}

export const userInfoAtom = atom<UserInfo>({
  email: '',
  phoneNumber: '',
  address: '',
  name: '',
});


