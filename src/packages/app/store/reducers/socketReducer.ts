import { AnyAction, combineReducers } from "redux";

import { Socket } from "packages/app/models";
import ActionTypes from "../actionTypes";

export const socketPrivateReducer = (
  state: Socket | null = { name: null, socket: null },
  action: AnyAction,
): Socket | null => {
  switch (action.type) {
    case ActionTypes.SOCKET_PRIVATE_CONNECT:
      return action.payload;
    case ActionTypes.SOCKET_PRIVATE_DISCONNECT:
      return action.payload;
    default:
      return state;
  }
};

export const socketChatSendReducer = (
  state: Socket | null = { name: null, socket: null },
  action: AnyAction,
): Socket | null => {
  switch (action.type) {
    case ActionTypes.SOCKET_CHAT_SEND_CONNECT:
      return action.payload;
    case ActionTypes.SOCKET_CHAT_SEND_DISCONNECT:
      return action.payload;
    default:
      return state;
  }
};

export const socketChatReceiveReducer = (
  state: Socket | null = { name: null, socket: null },
  action: AnyAction,
): Socket | null => {
  switch (action.type) {
    case ActionTypes.SOCKET_CHAT_RECEIVE_CONNECT:
      return action.payload;
    case ActionTypes.SOCKET_CHAT_RECEIVE_DISCONNECT:
      return action.payload;
    default:
      return state;
  }
};

export const socketReducer = combineReducers({
  private: socketPrivateReducer,
  send: socketChatSendReducer,
  receive: socketChatReceiveReducer,
});
