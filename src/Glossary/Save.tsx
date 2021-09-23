import React from "react";
import { InnerBlocks } from "@wordpress/block-editor";

export const Save = (): React.ReactElement => (
	<dl className="wp-block-tiny-pixel-glossary">
		<InnerBlocks.Content />
	</dl>
);
