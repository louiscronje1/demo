import { AssignmentModel, DateHelper, GanttConfig, ProjectModelConfig, ResourceUtilization, ResourceUtilizationConfig, ResourceUtilizationModel, TaskModel } from '@bryntum/gantt';
import { environment } from '../environments/environment';



export const projectModelConfig : Partial<ProjectModelConfig> = {
    taskStore: {
                readUrl: `api/Tasks`,    
                autoLoad: true,
        
            },
            resourceStore: {
                autoLoad: true,    
                readUrl: `api/Resources`,
            },
            assignmentStore: {
                autoLoad: true,    
                readUrl: `api/Assignments`,
            }
};

export const resourceUtilizationConfig: Partial<ResourceUtilizationConfig> = {
    startDate : '2023-02-19',
    endDate: '2025-02-13',
    //startDate: '2019-01-01',
    //endDate   : '2020-02-13',
    flex: 1,
    rowHeight  : 40,
    showBarTip: true,
    columns    : [
        {
            type  : 'tree',
            field : 'name',
            text  : 'Resource / Task',
            width : 280
        },
        {
            type    : 'column',
            cellCls : 'taskDateRange',
            renderer({ record }) {
                const resource = record as ResourceUtilizationModel;
                // Show event start/end for assignment row
                if (resource.origin instanceof AssignmentModel) {
                    const
                        { startDate, endDate } = resource.origin.event as TaskModel,
                        format                 = (date : Date) => DateHelper.format(date, 'MMM Do');
                    return `${format(startDate as Date)} - ${format(endDate as Date)}`;
                }

                return '';
            }
        }
    ],
    bbar : {
        cls    : 'utlization-toolbar',
        height : '3em',
        items  : [
            {
                type     : 'checkbox',
                text     : 'Enable bar tooltip',
                tooltip  : 'Check to show tooltips when moving mouse over bars',
                checked  : true,
                onAction : ({ source, checked }) => {
                    const resourceUtilization = source.up(ResourceUtilization.type) as ResourceUtilization;
                    resourceUtilization.setConfig({ showBarTip : checked });
                }
            }
        ]
    }
};






// import { AssignmentModel, DateHelper, GanttConfig, ProjectModelConfig, ResourceUtilization, ResourceUtilizationConfig, ResourceUtilizationModel, TaskModel } from '@bryntum/gantt';
// export const projectModelConfig : Partial<ProjectModelConfig> = {
//     taskStore: {
//         readUrl: `api/Tasks`,    
//         autoLoad: true,

//     },
//     resourceStore: {
//         autoLoad: true,    
//         readUrl: `api/Resources`,
//     },
//     assignmentStore: {
//         autoLoad: true,    
//         readUrl: `api/Assignments`,
//     }
// };

// export const ganttConfig : Partial<GanttConfig> = {
//     resourceImageFolderPath : './assets/users/',    
//     flex                    : 1,

//     features : {
//         labels : {
//             left : {
//                 field  : 'name',    
//                 editor : {
//                     type : 'textfield'    
//                 }
//             }
//         }
//     },

//     viewPreset  : 'weekAndDayLetter',
//     columnLines : true,

//     subGridConfigs : {
//         locked : {
//             flex : 5    
//         },
//         normal : {
//             flex : 8    
//         }
//     },

//     columns : [
//         {
//             type      : 'sequence',    
//             minWidth  : 50,
//             width     : 50,
//             text      : '',
//             align     : 'right',
//             resizable : false
//         },
//         {
//             type  : 'name',    
//             width : 280
//         },
//         {
//             type      : 'percent',    
//             text      : '% Completed',
//             field     : 'percentDone',
//             showValue : false,
//             width     : 120
//         },
//         {
//             type        : 'resourceassignment',    
//             text        : 'Assigned Resources',
//             showAvatars : true,
//             width       : 160
//         }
//     ],

// };

// export const resourceUtilizationConfig: Partial<ResourceUtilizationConfig> = {
//     startDate : '2023-02-19',    
//     endDate: '2025-02-13',
//     //startDate: '2019-01-01',
//     //endDate   : '2020-02-13',
//     flex: 1,
//     rowHeight  : 40,
//     showBarTip: true,
//     columns    : [
//         {
//             type  : 'tree',    
//             field : 'name',
//             text  : 'Resource / Task',
//             width : 280
//         },
//         {
//             type    : 'column',    
//             cellCls : 'taskDateRange',
//             renderer({ record }) {
//                 const resource = record as ResourceUtilizationModel;    
//                 // Show event start/end for assignment row
//                 if (resource.origin instanceof AssignmentModel) {
//                     const    
//                         { startDate, endDate } = resource.origin.event as TaskModel,
//                         format                 = (date : Date) => DateHelper.format(date, 'MMM Do');
//                     return `${format(startDate as Date)} - ${format(endDate as Date)}`;
//                 }

//                 return '';
//             }
//         }
//     ],
//     bbar : {
//         cls    : 'utlization-toolbar',    
//         height : '3em',
//         items  : [
//             {
//                 type     : 'checkbox',    
//                 text     : 'Enable bar tooltip',
//                 tooltip  : 'Check to show tooltips when moving mouse over bars',
//                 checked  : true,
//                 onAction : ({ source, checked }) => {
//                     const resourceUtilization = source.up(ResourceUtilization.type) as ResourceUtilization;    
//                     resourceUtilization.setConfig({ showBarTip : checked });
//                 }
//             }
//         ]
//     }
// };
