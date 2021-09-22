import React from "react";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ["core/paragraph", "core/image", "core/heading"];

const TEMPLATE = [["core/paragraph"]];

export const Definition = ({ setAttributes, attributes }) => {
	const onChange = (term) => setAttributes({ term });

	return (
		<>
			<RichText
				tagName="dt"
				className="wp-block-tiny-pixel-glossary-term"
				placeholder="Term"
				onChange={onChange}
				value={attributes.term}
			/>

			<dd className="wp-block-tiny-pixel-glossary-definition">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					templateLock={false}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</dd>
		</>
	);
};
