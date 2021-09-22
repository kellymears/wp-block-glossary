import React from "react";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ["tinyblocks/glossary-definition"];

export const Glossary = () => {
	render(
		<dl className="wp-block-tiny-pixel-glossary">
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
		</dl>
	);
};
