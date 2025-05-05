export default (item: unknown): item is object => Boolean(item && item.constructor === Object);
