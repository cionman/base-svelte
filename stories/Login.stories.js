import {action} from '@storybook/addon-actions';
import StyleWrapper from './StyleWrapper.svelte';
import Login from '../src/examples/70_Unit_Test_예제_여행준비물앱/Login.svelte';
import '../public/global.css';

export default {title: 'Login'};

export const basic = () => ({
  Component: StyleWrapper,
  props: {
    component: Login,
    style: `
      background-color: var(--primary-color);
      height: 100vh;
      padding: 1rem
    `
  },
  on: {login: action('login dispatched')}
});
