import { getAppEnvConfig } from "@/utils/env";
import { warn } from "@/utils/log";
import type { GlobConfig } from "/#/config";

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  } = getAppEnvConfig();

  if (!/[a-zA-Z_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }

  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    shortName: VITE_GLOB_APP_SHORT_NAME,
  };

  return glob as Readonly<GlobConfig>;
};
