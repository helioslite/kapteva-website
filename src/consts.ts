// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Multilingual } from "@/i18n";

export const BRAND_NAME: string | Multilingual = "Astro CMS";
export const SITE_TITLE: string | Multilingual = "Astro CMS";

export const SITE_DESCRIPTION: string | Multilingual = {
	en: "Website of the Kapteva company",
	fr: "Site internet de l'entreprise Kapteva",
};

export const X_ACCOUNT: string | Multilingual = "@kapteva";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
	en: "This page is not available in your language.",
	fr: "Cette page n'est pas disponible dans votre langue",
};

// Base URLs
const BASE_URL_LOCAL = "http://localhost:4321";
const BASE_URL_PROD = "https://astro-cms-dpv.pages.dev";
export const BASE_URL = import.meta.env.DEV ? BASE_URL_LOCAL : BASE_URL_PROD;
