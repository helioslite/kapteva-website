import type { UIDict } from "../types";

export const index: {
	en: UIDict;
	fr: UIDict;
} = {
	en: {
		intro:
			"i18n Starter is a simple Astro theme for creating multilingual websites. It supports i18n feature from Astro v4.0.",
		"url.description":
			"Basically, only the subdirectory URL scheme is supported. It is managed by the URL as follows for each language. The root URL is redirected to the specified default language.",
		feature: "Feature",
		"feature.astro.i18n": "support for Astro's official i18n feature",
		"feature.multilingual": "Various management methods for multilingual pages",
		"feature.seo": "SEO friendly",
		"feature.performance": "100/100 Lighthouse performance",
		"getting.started": "Getting Started",
		"getting.started.description": "Assumes basic knowledge of Astro.",
		"getting.started.cta": "If you're okay, let's get started!",
		"start.setup": "Start Setup",
	},
	es: {
		intro:
			"i18n Starter est un thème Astro simple pour la création de sites web multilingues. Il prend en charge la fonctionnalité i18n d'Astro v4.0.",
		"url.description":
			"En principe, seul le schéma d'URL de sous-répertoire est pris en charge. Il est géré par l'URL comme suit pour chaque langue. L'URL racine est redirigée vers la langue par défaut spécifiée.",
		feature: "Fonctionnalité",
		"feature.astro.i18n": "Support officiel i18n Astro",
		"feature.multilingual":
			"Plusieurs façons de gérer le site multilingue",
		"feature.seo": "SEO optimisé",
		"feature.performance": "100/100 Lighthouse performance",
		"getting.started": "Démarrer",
		"getting.started.description": "Les bases d'Astro sont requises",
		"getting.started.cta": "Si tu va bien, c'est parti!",
		"start.setup": "Commencer l'installation",
	},
};
