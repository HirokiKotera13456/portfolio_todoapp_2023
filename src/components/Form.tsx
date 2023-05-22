
import { type Todo, add } from '../features/todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button, Divider, InputBase, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Form = (): JSX.Element => {

  const dispatch = useDispatch();
  const ID = uuidv4();

  const addTodo = (content: string): void => {
    const newTodo: Todo = {
      id: ID,
      content,
      isCompleted: false,
    }
    if (content === "") return;
    dispatch(add(newTodo))
    setContent("");
  }
  const [content, setContent] = useState("");



  return (
    <>
      <Paper
        component="form"
        sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
      >
        <InputBase
          multiline
          sx={{ ml: 1, flex: 1 }}
          placeholder="タスクを入力"
          inputProps={{ 'aria-label': 'タスクを入力' }}
          value={content}
          onChange={e => { setContent(e.target.value); }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button onClick={() => { addTodo(content) }}>送信</Button>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      </Paper>
    </>
  )
}

