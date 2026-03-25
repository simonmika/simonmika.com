import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sample',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
  		baseUrl: "http://example.com/",
			prerenderConfig: "./prerender.config.ts",
			copy: [
				{ src: "../design/icon/*", dest: "icon/" },
				{ src: "../design/assets/*", dest: "assets/" },
			],
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
