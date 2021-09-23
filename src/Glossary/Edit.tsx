import React from "react";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const TEMPLATE: InnerBlocks.Props["template"] = [["tiny-pixel/glossary-dd"]];

const ALLOWED_BLOCKS: InnerBlocks.Props["allowedBlocks"] = [
	"tiny-pixel/glossary-dd",
];

export const Edit = (): React.ReactElement => {
	return (
		<dl>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
				renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
			/>
		</dl>
	);
};
