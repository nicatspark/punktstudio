/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GMAPSKEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
