import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTasks: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState('')
    const addTasksHandler = () => {
        props.addTasks(newTitle)
        setNewTitle('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') addTasksHandler()
    }
    const onChangePressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }
    // const removeTaskHandler = (tId: string) => {
    //     props.removeTask(tId)
    // }
    const GeneralChangeFilter = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }
    const MappedTask=

        props.tasks.map(t => {
            const removeTaskHandler = () => {
                props.removeTask(t.id)
            }
                // const removeTaskHandler=()=>{
                //     props.removeTask(t.id)
                // }
                return (
                    <li key={t.id}>
                        {/*<button onClick={() => removeTaskHandler(t.id)}>x*/}
                        {/*</button>*/}
                        <Button name={'x'} callBack={removeTaskHandler}/>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )
            }
        )

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyDown={onKeyPressHandler} value={newTitle} onChange={onChangePressHandler}/>
            {/*<button onClick={addTasksHandler*/}
            {/*    // props.addTasks(newTitle)*/}
            {/*    // setNewTitle('')*/}
            {/*}>+*/}
            {/*</button>*/}
            <Button name={'+'} callBack={addTasksHandler}/>
        </div>
        <ul>
            {MappedTask}
        </ul>
        <div>
            <Button name={'All'} callBack={()=>GeneralChangeFilter("all")}/>
            <Button name={'Active'} callBack={()=>GeneralChangeFilter("active")}/>
            <Button name={'Completed'} callBack={()=>GeneralChangeFilter("completed")}/>

            {/*<button onClick={() => {*/}
            {/*    GeneralChangeFilter("all")*/}
            {/*}}>All*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    GeneralChangeFilter("active")*/}
            {/*}}>Active*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    GeneralChangeFilter("completed")*/}
            {/*}}>Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
