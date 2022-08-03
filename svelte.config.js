import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias:{
      //'$components':path.resolve('./src/components'),
      '$cofig':path.resolve('./src/config'),
      //'$providers':path.resolve('./src/providers')
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
