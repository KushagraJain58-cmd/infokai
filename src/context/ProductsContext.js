import { askbiz, clientWork, services, process } from "../utils/content";

// Content is static today; swap these getters for API calls later without touching components.
export const getAskBiz = () => askbiz;
export const getClientWork = () => clientWork;
export const getServices = () => services;
export const getProcess = () => process;
