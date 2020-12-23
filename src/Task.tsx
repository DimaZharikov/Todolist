import React from 'react'
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";


interface taskProps {
    task : TaskType,
    onChangeHandler : (taskId: string, isDone: boolean) => void
    onTitleChangeHandler: (taskId: string,title: string) => void
    onClickHandler: (id: string) => void

}

export const Task: React.FunctionComponent<taskProps> = React.memo(({task,onChangeHandler,onTitleChangeHandler,onClickHandler})=> {
    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={(event)=> onChangeHandler(task.id,event.currentTarget.checked)}
        />

        <EditableSpan value={task.title} onChange={()=> onTitleChangeHandler(task.id, task.title)} />
        <IconButton onClick={()=> onClickHandler(task.id)}>
            <Delete />
        </IconButton>
    </div>
})