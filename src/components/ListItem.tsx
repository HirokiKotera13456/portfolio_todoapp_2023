import { Button, Checkbox } from '@mui/material';
import React from 'react'
import { type Todo, remove, toggleCompleteTask } from '../features/todo/todoSlice';
import { useAppDispatch } from '../app/store';

interface Props {
    todo: Todo
    handleEditButtonPushed: (id: string, content: string) => void
}

export const ListItem: React.FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch();
    const removeTodo = (id: string): void => {
        dispatch(remove(id))
    }
    const { todo, handleEditButtonPushed } = props;
    const { id, isCompleted, content } = todo;

    return (
        <div key={id}>
            <div style={{ marginTop: "4%" }}>
                <Checkbox
                    onClick={() => {
                        dispatch(toggleCompleteTask(todo));
                    }}
                    defaultChecked={isCompleted}
                />
                <span>{content}</span>
            </div>
            <Button variant="outlined" style={{  borderRadius: "30px" }} onClick={() => { handleEditButtonPushed(id, content); }}>編集</Button>
            <Button variant="outlined" style={{ marginLeft: "2%", borderRadius: "30px" }} color="error" onClick={() => { removeTodo(id); }}>削除</Button>
        </div>
    )
}
