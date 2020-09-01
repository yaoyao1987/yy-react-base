import React, { FC, memo, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { getPrefixCls } from '@util';
import { changeLayout, setZoom } from './utils';

// 设置甘特图的默认参数
import './config'

export type ZoomLevelType = 'W' | 'M' | 'D'

export interface GanttChartProps {
  /** 甘特图cols的配置 */
  cols: any[];
  /** 甘特图列的配置描述 */
  columns: any[];
  /** 数据 */
  data: any;
  /** 切换日期单位 */
  zoomLevel: ZoomLevelType;
  className?: string;
  /** 自定义甘特图配置 */
  defaultGanttConfig?: (gantt: any) => void;
  /** 更新任务回调 */
  onUpdateTask?: (id: string | number, bindProperty?: string) => void;
  /** 新增关联回调 */
  onAfterLinkAdd?: (id: string | number, item: object) => void;
  /** 删除关联回调 */
  onAfterLinkDelete?: (id: string | number) => void;
  /** 显示编辑窗口回调 */
  onShowEditModal?: (id?: string | number, task?: any) => void;
}

export const GanttChart: FC<GanttChartProps> = memo((props: GanttChartProps) => {
  const { cols, columns, data, zoomLevel, className } = props;
  const { defaultGanttConfig, onUpdateTask, onAfterLinkAdd, onAfterLinkDelete } = props;
  const ganttContainer: React.RefObject<any> = useRef(null);

  const prefixCls = getPrefixCls('gantt-container');
  const ganttChartCls = classNames(prefixCls, className)

  useEffect(() => {
    const onAfterTaskDragEvent = gantt.attachEvent("onAfterTaskDrag", (id: string | number, mode: string, e: any) => {
      if (mode === 'resize') {
        onUpdateTask && onUpdateTask(id, e.toElement.dataset.bindProperty);
      }
    }, null);
    const onRowDragEndEvent = gantt.attachEvent("onRowDragEnd", (id: string | number) => {
      onUpdateTask && onUpdateTask(id)
    }, null);
    const onAfterLinkAddEvent = gantt.attachEvent("onAfterLinkAdd", (id: string | number, item: object) => {
      onAfterLinkAdd && onAfterLinkAdd(id, item)
    }, null);
    const onAfterLinkDeleteEvent = gantt.attachEvent("onAfterLinkDelete", (id: string | number) => {
      onAfterLinkDelete && onAfterLinkDelete(id)
    }, null);

    // Clean-up the event
    /* eslint-disable */
    return () => {
      onAfterTaskDragEvent && gantt.detachEvent(onAfterTaskDragEvent);
      onRowDragEndEvent && gantt.detachEvent(onRowDragEndEvent);
      onAfterLinkAddEvent && gantt.detachEvent(onAfterLinkAddEvent);
      onAfterLinkDeleteEvent && gantt.detachEvent(onAfterLinkDeleteEvent);
    };

  }, []);

  useEffect(() => {
    // 自定义甘特图的参数
    defaultGanttConfig && defaultGanttConfig(gantt);

    // 初始化甘特图
    gantt.init(ganttContainer.current);
  }, []);

  useEffect(() => {
    gantt.parse(data)
    gantt.render()
  }, [data]);

  useEffect(() => {
    changeLayout(cols, columns)
  }, [cols, columns]);

  useEffect(() => {
    setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div
      className={ganttChartCls}
      ref={ganttContainer}
    />
  );
})

GanttChart.defaultProps = {
  cols: [
    { view: 'grid', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
    { resizer: true, width: 1 },
    { view: 'timeline', scrollX: 'scrollHor', scrollY: 'ganttScrollVer' },
    { view: 'scrollbar', id: 'ganttScrollVer' },
  ],
  /** 切换日期单位 */
  zoomLevel: 'W'
}

GanttChart.displayName = 'GanttChart'

export default GanttChart;