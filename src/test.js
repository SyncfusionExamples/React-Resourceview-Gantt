import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { GanttComponent, DayMarkers, Inject, Selection, Toolbar, Edit, Resize, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { resourcesData, resourceCollection } from './data';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            work: 'work',
            child: 'subtasks'
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
            group: 'resourceGroup'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
            { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }];
        this.splitterSettings = {
            columnIndex: 3
        };
        this.projectStartDate = new Date('03/28/2019');
        this.projectEndDate = new Date('05/18/2019');
        this.labelSettings = {
            rightLabel: 'resources',
            taskLabel: 'Progress'
        };
    }
    toolbarClick(args) {
        if (args.item.id === 'showhidebar') {
            this.ganttInstance.showOverAllocation = this.ganttInstance.showOverAllocation ? false : true;
        }
    };
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <GanttComponent id='ResourceView' dataSource={resourcesData} treeColumnIndex={1} viewType='ResourceView' allowSelection={true} allowResizing={true} highlightWeekends={true} toolbar={this.toolbar} toolbarClick={this.toolbarClick.bind(this)} editSettings={this.editSettings} projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate} resourceFields={this.resourceFields} taskFields={this.taskFields} labelSettings={this.labelSettings} splitterSettings={this.splitterSettings} height='410px' resources={resourceCollection} showOverAllocation={true} ref={gantt => this.ganttInstance = gantt}>
            <ColumnsDirective>
              <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
              <ColumnDirective field='TaskName' headerText='Name' width='250'></ColumnDirective>
              <ColumnDirective field='work' headerText='Work'></ColumnDirective>
              <ColumnDirective field='Progress'></ColumnDirective>
              <ColumnDirective field='resourceGroup' headerText='Group'></ColumnDirective>
              <ColumnDirective field='StartDate'></ColumnDirective>
              <ColumnDirective field='Duration'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Selection, DayMarkers, Toolbar, Edit, Resize]}/>
          </GanttComponent>
        </div>
      </div>);
    }
}

render();