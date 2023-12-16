import axios, { AxiosRequestConfig } from "axios";
import { MutationTypes } from "./mutation-types";
import {
  sendPostOnce,
  sendGetOnce,
  sendGetPath,
  sendPutOnce,
  sendDeletePath,
  sendDeleteOnce,
} from "@/services/api";
const devMode = false;

const turnOnDevMode = (payload: any) => {
  if (!devMode) {
    return payload;
  }
  const session = JSON.parse(localStorage.getItem("sessionTokens")!);
  const context = session;
  const bodyJson = { ...payload };
  payload = { context: context, "body-json": bodyJson };
  return payload;
};

import {
  sendPostNoToken,
  sendGetNoToken,
} from "@/services/apiNoToken";

const actions = {

  [MutationTypes.LOGIN_USER_REQUEST]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostNoToken("/auth/signin", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_CURRENT_USER]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetOnce("/user", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_ALL_MOVIES]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Movie?page=${payload.page}&pageSize=${payload.pageSize}`);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_DETAIL_MOVIE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Movie/${payload.id}`);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_SCHEDULE_DETAIL]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Schedule/${payload.id}`);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_MOVIE_SCHEDULE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Schedule/searchByMovieId`, payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_CURRENT_MOVIE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Movie/getCurrent`,payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_UPCOMMING_MOVIE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken(`/Movie/getUpcoming`,payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
};



export default actions;
