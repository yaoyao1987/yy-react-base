import { gantt } from 'dhtmlx-gantt'

export const changeLayout = (cols: any, columns: any) => {
  gantt.config.layout = {
    css: 'gantt_container',
    rows: [
      {
        cols,
        config: {
          columns,
        },
        gravity: 1,
      },
      { view: 'scrollbar', id: 'scrollHor' },
    ],
  }
  gantt.resetLayout()
}

// 显示周、月、年
export const setZoom = (value: string) => {
  switch (value) {
    case 'W':
      gantt.config.min_column_width = 100
      gantt.config.scale_height = 80
      gantt.config.scales = [
        { unit: 'month', step: 1, format: '%F' },
        {
          unit: 'week',
          step: 1,
          format: function (date: Date) {
            const t = gantt.date.date_to_str('%M%d日')
            const a = gantt.date.week_start(new Date(date))
            const n = gantt.date.add(gantt.date.add(a, 1, 'week'), -1, 'day')
            return `${t(a)} - ${t(n)}`
          },
        },
        { unit: 'week', step: 1, format: '第%W周' },
      ]
      break
    case 'M':
      gantt.config.min_column_width = 50
      gantt.config.scale_height = 50
      gantt.config.scales = [
        { unit: 'year', step: 1, format: '%Y年' },
        { unit: 'month', step: 1, format: '%M' },
      ]
      break
    case 'D':
    default:
      gantt.config.scale_height = 80
      gantt.config.scales = [
        { unit: 'week', step: 1, format: '第%W周' },
        { unit: 'day', step: 1, format: '星期%D' },
        { unit: 'day', step: 1, format: '%M%j日' },
      ]
      break
  }
}
