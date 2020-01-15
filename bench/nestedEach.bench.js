import { benchSettings } from 'karma-webpack-bundle';
import { nestedEach } from '../index.js';

suite('nestedEach', () => {
	benchmark('accrue false', () => {
		nestedEach([[1, 2], [3, 4]], () => {
		});
	}, benchSettings);

	benchmark('accrue true', () => {
		nestedEach([[1, 2], [3, 4]], () => {
		}, true);
	}, benchSettings);
});
