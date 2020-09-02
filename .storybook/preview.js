import { addParameters, configure } from '@storybook/react'
const { name, repository, version } = require('../package.json')

//加载配置
addParameters({
  options: {
    name: `${name} v${version}`,
    title: `${name}`,
    url: repository,
    showSearchBox: false,
    showPanel: false,
    enableShortcuts: false,
    isToolshown: false,
    selectedPanel: undefined,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    showAddonPanel: false,
  },
})

// 将welcome文档说明置于顶部
const loaderFn = () => {
  let allExports = [
    require('../src/stories/yy.stories.mdx'),
    require('../src/stories/contribute.stories.mdx'),
    require('../src/stories/changeLog.stories.mdx'),
  ]
  const req = require.context('../src/components', true, /\.stories\.mdx$/)
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}

configure(loaderFn, module)
