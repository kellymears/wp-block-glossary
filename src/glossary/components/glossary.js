import {
  __,
  InnerBlocks,
  Component,
} from './../imports'

const ALLOWED_BLOCKS = [
  'tinyblocks/glossary-definition',
]

class Glossary extends Component {
  constructor() {
		super(...arguments)
	}

  render() {
    return (
			<dl className="wp-block-tinyblocks-glossary">
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</dl>
    )
  }
}

export default Glossary
