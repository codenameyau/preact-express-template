import { h } from 'preact';
import Header from '.';

export const withText = () => <Header>Hello Header</Header>;

export const withEmoji = () => <Header />;

export default { title: 'Header', component: Header };
