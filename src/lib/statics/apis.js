const isProd = import.meta.env?.MODE !== "development";
const ENV = isProd ? process.env : import.meta.env;
const baseUrl = isProd ? ENV.VITE_BASED_URL : ENV.VITE_DEV_BASED_URL;

export const APIs = {
    KAUTH:{
        name: 'KAUTH',
        uri: `api.${baseUrl}/kauth/graphql`,
    }
}