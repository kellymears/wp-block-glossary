import React from "react";
import { __ } from "@wordpress/i18n";
import { BlockEdit, InnerBlocks, RichText } from "@wordpress/block-editor";

const ALLOWED_BLOCKS = ["core/paragraph", "core/image", "core/heading"];
const TEMPLATE: InnerBlocks.Props["template"] = [
	[
		"core/image",
		{
			mediaType: "image",
			mediaUrl:
				"https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		},
	],
];

interface Props extends BlockEdit.Props {
	attributes: { term: string };
	setAttributes: (attributes: any) => void;
}

export const Edit = ({ setAttributes, attributes }: Props) => {
	const onChange = (term: string) => setAttributes({ term });

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
				/>
			</dd>
		</>
	);
};
