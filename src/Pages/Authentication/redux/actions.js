import { CREDENTIALS_SAVING } from "./constants";

export const saveCredentials = (payload) => ({
  type: CREDENTIALS_SAVING,
  payload,
});
