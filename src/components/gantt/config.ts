import { gantt } from 'dhtmlx-gantt'

// 设置语言为中文
gantt.i18n.setLocale('cn')
gantt.plugins({
  marker: true,
  auto_scheduling: true,
  tooltip: true,
})
// 默认时间格式
gantt.config.date_format = '%Y-%m-%d %H:%i:%s'
// 设置“开始时间”所在的列的时间格式
// gantt.config.date_grid = "%Y-%m-%d %H:%i:%s";
// 以工作时间计算工期，比如忽略周末
gantt.config.work_time = true
// 左侧树型结构调整时，只允许将任务拖放到某个父节点下
gantt.config.order_branch = true
// 左侧树型结构调整时，可以任意拖动任务到任意节点下
gantt.config.order_branch_free = true
// 初始化的时候就展开树结构
gantt.config.open_tree_initially = true
// 当task的长度改变时，自动调整图表坐标轴区间用于适配task的长度
gantt.config.fit_tasks = true
// 时间轴图表中，任务条形图的高度
gantt.config.task_height = 21
// 调整timeline上task的长度时， 工期的变化幅度
gantt.config.min_duration = 24 * 60 * 60 * 1000 // 1day
// 是否在任务条形图中显示制进度条
gantt.config.show_progress = false
gantt.config.tooltip_timeout = 50
gantt.config.tooltip_hide_timeout = 50
// 存储lightbox结构的名称（用于不同类型的任务）
gantt.config.types = {
  task: 'task',
  project: 'project',
  milestone: 'milestone',
  deprecated: 'deprecated',
}

// 自定义参数
// @ts-ignore
gantt.config.custom_grid_width = 500