import React from 'react'
import { Flex } from 'rebass'

/**
 * @render react
 * @name Page
 * @example
 * <Page>Some content</Page>
 */
const Page = ({ css, ...rest }) => (
  <Flex
    bg="primaryColor"
    as="article"
    css={Object.assign(
      {
        height: '100%',
        'min-width': '950px',
        'min-height': '600px',
        'overflow-y': 'hidden',
        'box-shadow': '0 20px 70px rgba(0, 0, 0, 0.55)'
      },
      css
    )}
    {...rest}
  />
)

export default Page
