import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import * as Glossary from "./Glossary";
import * as Definition from "./Definition";

/**
 * Register dl wrapper
 */
registerBlockType("tiny-pixel/glossary-dl", {
	title: __("Glossary"),
	description: __("Terms and definitions"),
	icon: "feedback",
	category: "common",
	keywords: [__("Glossary")],
	attributes: {},
	supports: {
		customClassName: false,
		inserter: true,
	},
	edit: Glossary.Edit,
	save: Glossary.Save,
});

/**
 * Register dt contents
 */
registerBlockType("tiny-pixel/glossary-dd", {
	title: __("Definition"),
	parent: ["tiny-pixel/glossary-dl"],
	icon: "feedback",
	description: __("That which describes"),
	category: "common",
	attributes: {
		term: {
			type: "string",
			selector: "dt",
		},
	},
	edit: Definition.Edit,
	save: Definition.Save,
});
