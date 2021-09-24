import {action} from '@storybook/addon-actions';
import Item from '../src/examples/70_Unit_Test_예제_여행준비물앱/Item.svelte';
import '../public/global.css';

export default {title: 'Item'};

const getOptions = packed => ({
  Component: Item,
  props: {
    categoryId: 1,
    dnd: {},
    item: {id: 2, name: 'socks', packed}
  },
  on: {delete: action('item delete dispatched')}
});

export const unpacked = () => getOptions(false);
export const packed = () => getOptions(true);
