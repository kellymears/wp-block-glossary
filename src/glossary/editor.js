// Import dependencies
import {
  __,
  registerBlockType,
  InnerBlocks,
	RichText,
	Fragment,
} from './imports'

import Glossary from './components/glossary'
import Definition from './components/definition'

registerBlockType('tinyblocks/glossary', {
  title: __('Glossary'),
  description: __('Terms and definitions'),
  icon: 'feedback',
  category: 'common',
	keywords: [__('Glossary')],
	supports: {
		align: [
			'wide',
			'full',
		],
		customClassName: false,
		inserter: true,
	},
  edit: Glossary,
  save: () => (
    <dl className="wp-block-tinyblocks-glossary">
      <InnerBlocks.Content />
    </dl>
  ),
})

registerBlockType('tinyblocks/glossary-definition', {
  title: __('Definition'),
  parent: ['tinyblocks/glossary'],
  icon: 'feedback',
  description: __('That which describes'),
	category: 'common',
	attributes: {
		term: {
			type: 'array',
			source: 'children',
			selector: 'dt',
		},
	},
  edit: Definition,
  save: ({ attributes }) => (
		<Fragment>
			<dt className="wp-block-tinyblocks-glossary-term">
				<RichText.Content value={attributes.term} />
			</dt>
			<dd className="wp-block-tinyblocks-glossary-definition">
				<InnerBlocks.Content />
			</dd>
		</Fragment>
  ),
})
