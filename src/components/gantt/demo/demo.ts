export const updateGanttConfig = function (gantt: any) {
  // 指定将应用于时间线单元格的CSS类，设置周末css类
  gantt.templates.timeline_cell_class = (task: any, date: Date) => {
    return !gantt.isWorkTime(date) ? 'week_end' : ''
  }

  gantt.templates.task_class = (start: Date, end: Date, task: any) => {
    const result = []
    if (task.type) {
      result.push(`task-${task.type}`)
    }
    if (gantt.hasChild(task.id)) {
      result.push('task-parent')
    }
    if (!task.$open && gantt.hasChild(task.id)) {
      result.push('task-collapsed')
    }
    return result.join(' ')
  }

  gantt.templates.grid_row_class = gantt.templates.task_class

  gantt.templates.tooltip_text = (start: Date, end: Date, task: any) => {
    let temp = `
      <div class="tooltip-header"><div class="tooltip-header-inner">${task.text}</div></div>
      <div class="tooltip-body">
        <div>当前进度：${task.progress * 100}%</div>
    `
    if (task.type !== 'milestone' && task.start_date && task.end_date) {
      temp += `<div>计划开始：${formatFunc(start)} 计划天数：${gantt.calculateDuration({
        start_date: task.start_date,
        end_date: task.end_date,
      })}</div>`
    }
    if (task.type !== 'milestone' && task.actual_start_date && task.actual_end_date) {
      temp += `<div>实际开始：${formatFunc(
        new Date(task.actual_start_date),
      )} 实际天数：${gantt.calculateDuration({
        start_date: new Date(task.actual_start_date),
        end_date: new Date(task.actual_end_date),
      })}</div>`
    }
    if (task.assigners && task.assigners.length) {
      temp += '<div>项目人员：'
      usrVos.forEach(assigner => {
        if (task.assigners.includes(`${assigner.userId}`)) {
          temp += `${assigner.realName} `
        }
      })
      temp += `</div>`
    }
    temp += `</div>`
    return temp
  }

  gantt.templates.rightside_text = (start: Date, end: Date, task: any) => {
    if (task.actual_end_date && end.getTime() < new Date(task.actual_end_date).getTime()) {
      return `<b>逾期: ${gantt.calculateDuration({
        start_date: end,
        end_date: new Date(task.actual_end_date),
      })} 工作天</b>`
    }
    return ''
  }
}

export const data = {
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
export const cols = [
  { view: 'grid', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
  { resizer: true, width: 1 },
  { view: 'timeline', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
  { view: 'scrollbar', id: 'ganttScrollVer' },
];

export const columns = [
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
