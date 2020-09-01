import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import GanttChart, { GanttChartProps } from '../gantt-chart'

const data = {
  info: {
    id: 49137,
    name: '新甘特图',
    timeUnit: 'D',
    sort: '1598518783044,1598518783047,1598518783050,1598518783053,1598518783055,1598518783058'
  },
  resources: [
    {
      id: 237077,
      nickname: '',
      name: '姚姚',
      systemId: 'HCWJ5WYABJ7H',
      photo:
        'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK8qkY7FUvM13ro0GLtfWq5cSrnDbea4n5MF67xTGC9tFwtOtkO6zY9xULCRqO5PypDEDn3DK8XkA/132',
      sex: 2,
    },
    {
      id: 237078,
      nickname: '张三',
      name: null,
      systemId: null,
      photo: null,
      sex: null,
    },
    {
      id: 237079,
      nickname: '李四',
      name: null,
      systemId: null,
      photo: null,
      sex: null,
    },
  ],
  links: [
    {
      id: 1598518783061,
      source: 1598518783047,
      target: 1598518783050,
      type: '0',
    },
    {
      id: 1598518783065,
      source: 1598518783050,
      target: 1598518783055,
      type: '0',
    },
    {
      id: 1598518783068,
      source: 1598518783055,
      target: 1598518783058,
      type: '0',
    },
  ],
  data: [
    {
      id: 1598518783044,
      text: '第一阶段',
      start_date: null,
      end_date: null,
      actual_start_date: null,
      actual_end_date: null,
      progress: 0,
      type: 'project',
      parent: 0,
      assigners: [],
      remark: null,
    },
    {
      id: 1598518783047,
      text: '任务一',
      start_date: '2020-08-22 08:59:43.000Z',
      end_date: '2020-08-25 08:59:43.000Z',
      actual_start_date: '2020-08-22 08:59:43.000Z',
      actual_end_date: '2020-08-25 08:59:43.000Z',
      progress: 1,
      type: 'task',
      parent: 1598518783044,
      assigners: ['237078'],
      remark: null,
    },
    {
      id: 1598518783050,
      text: '任务二',
      start_date: '2020-08-25 08:59:43.000Z',
      end_date: '2020-08-28 08:59:43.000Z',
      actual_start_date: '2020-08-25 08:59:43.000Z',
      actual_end_date: '2020-08-27 08:59:43.000Z',
      progress: 0.9,
      type: 'task',
      parent: 1598518783044,
      assigners: ['237079'],
      remark: null,
    },
    {
      id: 1598518783053,
      text: '第二阶段',
      start_date: null,
      end_date: null,
      actual_start_date: null,
      actual_end_date: null,
      progress: 0,
      type: 'project',
      parent: 0,
      assigners: [],
      remark: null,
    },
    {
      id: 1598518783055,
      text: '任务三',
      start_date: '2020-08-28 08:59:43.000Z',
      end_date: '2020-08-30 08:59:43.000Z',
      actual_start_date: null,
      actual_end_date: null,
      progress: 0,
      type: 'task',
      parent: 1598518783053,
      assigners: [],
      remark: null,
    },
    {
      id: 1598518783058,
      text: '里程碑',
      start_date: '2020-08-31 08:59:43.000Z',
      end_date: '2020-08-31 08:59:43.000Z',
      actual_start_date: null,
      actual_end_date: null,
      progress: 0,
      type: 'milestone',
      parent: 0,
      assigners: [],
      remark: null,
    },
  ],
}
const cols = [
  { view: 'grid', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
  { resizer: true, width: 1 },
  { view: 'timeline', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
  { view: 'scrollbar', id: 'ganttScrollVer' },
];

const columns = [
  { name: 'add', label: '', min_width: 40, max_width: 40 },
  {
    name: 'assigner',
    label: '负责人',
    align: 'left',
    min_width: 60,
    max_width: 60,
    template(task: any) {
      let temp = ''
      console.log('task.assigners', task.assigners)
      if (task.assigners) {
        task.assigners.forEach((item: string, index: number) => {
          temp += item
        })
      }
      return temp
    },
  },
  {
    name: 'text',
    label: '任务',
    width: '*',
    tree: true,
  },
  {
    name: 'start_date',
    label: '计划开始日',
    align: 'center',
    min_width: 80,
    max_width: 80,
  },
  {
    name: 'end_date',
    label: '计划结束日',
    align: 'center',
    min_width: 80,
    max_width: 80,
  },
  {
    name: 'actual_start_date',
    label: '实际开始日',
    align: 'center',
    min_width: 80,
    max_width: 80,
  },
  {
    name: 'actual_end_date',
    label: '实际结束日',
    align: 'center',
    min_width: 80,
    max_width: 80,
  },
  {
    name: 'progress',
    label: '进度',
    align: 'center',
    min_width: 50,
    max_width: 50,
  },
]

const testProps: GanttChartProps = {
  zoomLevel: "W",
  data,
  cols,
  columns
}
describe('test GanttChart component', () => {
  it('should render correctly', () => {
    const wrapper = render(<GanttChart zoomLevel="W" data={data} cols={cols} columns={columns} />)
    const element = wrapper.container.querySelector('.yy-gantt-container') as HTMLElement
    expect(element.tagName).toEqual('DIV')
    expect(element).toHaveClass('yy-gantt-container')
    expect(wrapper).toMatchSnapshot()
  });

  it('responses hover events', () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
  });
})
