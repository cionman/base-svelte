import {action} from '@storybook/addon-actions';
import Category from '../src/examples/70_Unit_Test_예제_여행준비물앱/Category.svelte';
import '../public/global.css';

export default {title: 'Category'};

function getOptions(items) {
  const category = {id: 1, name: 'Clothes', items};
  return {
    Component: Category,
    props: {
      category,
      categories: {[category.id]: category},
      dnd: {},
      show: 'all'
    },
    on: {delete: action('category delete dispatched')}
  };
}

export const empty = () => getOptions({});
export const nonEmpty = () =>
  getOptions({
    1: {id: 1, name: 'socks', packed: true},
    2: {id: 2, name: 'shoes', packed: false}
  });
