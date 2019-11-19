import { benchSettings } from 'karma-webpack-bundle';
import { tailInPath } from '../../index';

suite('tailInPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		sandbox = tailInPath('one');
	}, benchSettings);

	benchmark('multi item path', () => {
		sandbox = tailInPath('one.two.three');
	}, benchSettings);
});
