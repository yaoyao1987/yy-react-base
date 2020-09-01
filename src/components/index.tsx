/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of yy, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */

/**
 * 将所有组件都导入，再导出。这样就可以从入口文件直接导入所有组件
 */
export { default as Gantt } from './gantt'