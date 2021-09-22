import React from "react";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import { Glossary } from "./edit/glossary";
import { Definition } from "./edit/Definition";

/**
 * Register dl wrapper
 */
registerBlockType("tiny-pixel/glossary-dl", {
	title: __("Glossary"),
	description: __("Terms and definitions"),
	icon: "feedback",
	category: "common",
	keywords: [__("Glossary")],
	supports: {
		customClassName: false,
		inserter: true,
	},
	edit: Glossary,
	save: () => (
		<dl className="wp-block-tiny-pixel-glossary">
			<InnerBlocks.Content />
		</dl>
	),
});

/**
 * Register dt contents
 */
registerBlockType("tiny-pixel/glossary-dd", {
	title: __("Definition"),
	parent: ["tiny-pixel/glossary"],
	icon: "feedback",
	description: __("That which describes"),
	category: "common",
	attributes: {
		term: {
			type: "array",
			selector: "dt",
		},
	},
	edit: Definition,
	save: ({ attributes }) => (
		<>
			<dt className="wp-block-tiny-pixel-glossary-term">
				<RichText.Content value={attributes.term} />
			</dt>

			<dd className="wp-block-tiny-pixel-glossary-definition">
				<InnerBlocks.Content />
			</dd>
		</>
	),
});
