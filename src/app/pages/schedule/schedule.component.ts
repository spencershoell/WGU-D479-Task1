import { Component } from '@angular/core';
import { DxGanttModule, DxPopupModule } from 'devextreme-angular';
import { DxButtonModule, DxButtonTypes } from 'devextreme-angular/ui/button';
import { DataService, Dependency, Resource, ResourceAssignment, Task } from '../../shared/services';

@Component({
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.scss'],
  standalone: true,
  imports: [DxButtonModule, DxGanttModule, DxPopupModule]
})

export class ScheduleComponent {
  constructor(data: DataService) {
    this.tasks = data.getTasks();
    this.dependencies = data.getDependencies();
    this.resources = data.getResources();
    this.resourceAssignments = data.getResourceAssignments();
  }

  tasks: Task[];
  dependencies: Dependency[];
  resources: Resource[];
  resourceAssignments: ResourceAssignment[];
  popupVisible = false;

  customButtonOptions: DxButtonTypes.Properties = {
    text: 'About',
    icon: 'info',
    stylingMode: 'text',
    onClick: () => {
      this.popupVisible = true;
    },
  };
}
