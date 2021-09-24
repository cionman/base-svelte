import {action} from '@storybook/addon-actions';
import Checklist from '../src/examples/70_Unit_Test_예제_여행준비물앱/Checklist.svelte';
import StyleWrapper from './StyleWrapper.svelte';
import '../public/global.css';

export default {title: 'Checklist'};

export const basic = () => ({
  Component: StyleWrapper,
  props: {
    component: Checklist,
    style: `
      background-color: var(--primary-color);
      color: white;
      height: 100vh;
      padding: 1rem
    `
  },
  on: {logout: action('logout dispatched')}
});
