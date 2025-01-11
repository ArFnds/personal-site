import type resources from "./types/resources";

type TResources = typeof resources;

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "translation";
		resources: TResources;
	}
}
