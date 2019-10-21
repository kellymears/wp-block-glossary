import {
  __,
  InnerBlocks,
	Component,
	Fragment,
	RichText,
} from '../imports'

const ALLOWED_BLOCKS = [
  'core/paragraph',
  'core/image',
  'core/heading'
]

const TEMPLATE = [
	['core/paragraph']
]

class Definition extends Component {
  constructor() {
		super(...arguments)

		this.onTerm = this.onTerm.bind(this)
	}

	onTerm(term) {
		this.props.setAttributes({ term })
	}

  render() {
		const { term } = this.props.attributes

    return (
			<Fragment>
				<RichText
					tagName="dt"
					className="wp-block-tinyblocks-glossary-term"
					placeholder="Term"
					onChange={this.onTerm}
					value={term ? term : ''} />

				<dd className="wp-block-tinyblocks-glossary-definition">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						templateLock={false}
						renderAppender={() => <InnerBlocks.ButtonBlockAppender /> } />
				</dd>

			</Fragment>
    )
  }
}

export default Definition
