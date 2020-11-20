import React, {ChangeEvent, useState} from 'react';


type EditTableSpanType = {
    title : string,
    changeTaskTitle: (value:string)=> void

}


const EditTableSpan = (props: EditTableSpanType ) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState(props.title)


    const activetedEditMode = () => {
        setEditMode(true)
    }
    const deactivetedEditMode = () => {
        setEditMode(false)
        props.changeTaskTitle(title)
    }

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return( editMode ?

        <input
            value = {title}
            onBlur={deactivetedEditMode}
            autoFocus={true}
            onChange={ changeTitle }
        />

                        :

        <span onDoubleClick={activetedEditMode}>{props.title}</span> )
}

export default EditTableSpan;