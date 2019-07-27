import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import CustomButton from './index'

import { ReactComponent as Cart } from '../generic/images/cart.svg';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('PrimaryButton', module)
  .add('default', () => { return <CustomButton variant="contained" color="primary" pos='left' icon={<Cart />} title='Primary Custom' onClick={action('clicked')} {...actions}> Primary </CustomButton> })
  .add('disabled', () => { return <CustomButton variant="contained" color="primary" pos='left' icon={<Cart />} title='Primary Custom' onClick={action('clicked')} disabled {...actions}> Primary </CustomButton> })
