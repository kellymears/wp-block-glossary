import React from "react";
import type { BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

interface Props
	extends BlockSaveProps<{
		term: string;
	}> {}

export const Save = ({ attributes }: Props) => (
	<>
		<dt className="wp-block-tiny-pixel-glossary-term">
			<RichText.Content value={attributes.term} />
		</dt>

		<dd className="wp-block-tiny-pixel-glossary-definition">
			<InnerBlocks.Content />
		</dd>
	</>
);
