import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type addItemFormType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: addItemFormType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)


    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (event.charCode === 13) {
            addItem();
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addItem}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}


export default AddItemForm;