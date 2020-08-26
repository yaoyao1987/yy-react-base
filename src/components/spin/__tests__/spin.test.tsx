import React from 'react'
import { render } from '@testing-library/react'

import Spin, { SpinProps } from '../spin'

const testProps: SpinProps = {
  spinning: false,
  size: 'large',
}
describe('test Spin component', () => {
  it('sholud render correct component', () => {
    const wrapper = render(<Spin />)
    const element = wrapper.container.querySelector('.yy-spin') as HTMLElement
    expect(element.tagName).toEqual('SPAN')
    expect(element).toHaveClass('yy-spin yy-spin-spinning')
    expect(wrapper).toMatchSnapshot()
  })
  it('sholud render correct size', () => {
    const wrapper = render(<Spin {...testProps} />)
    const element = wrapper.container.querySelector('.yy-spin') as HTMLElement
    expect(element.tagName).toEqual('SPAN')
    expect(element).not.toHaveClass('yy-spin-spinning')
    expect(element).toHaveClass('yy-spin-large')
  })
})
