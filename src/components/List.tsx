
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { editContent, toggleHideCompleted, useFilteredList } from "../features/todo/todoSlice"
import { useState } from 'react';
import { ListItemEdit } from './ListItemEdit';
import { ListItem } from './ListItem';
import { Button, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const List: React.FunctionComponent = () => {

  const dispatch = useAppDispatch()

  const [isEditing, setIsEditing] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [editingState, setEditingState] = useState({
    id: "",
    content: "",
    isCompleted: false,
  });

  const handleEditButtonPushed = (id: string, content: string): void => {
    setIsEditing(true)
    setEditingState({
      ...editingState, id, content
    })
  }

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    setEditingState({
      ...editingState,
      [e.target.name]: e.target.value,
    })
  }

  const { content, id } = editingState;

  const editTodo = (): void => {
    if (content === '') {
      return;
    }
    dispatch(editContent({
      content, id
    }));
    setIsEditing(false);
  }

  const handleButton = (): void => {
    dispatch(toggleHideCompleted())
  }

  const onInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchContent(e.currentTarget.value);
  }
  const hideCompleted = useSelector((state: RootState) => state.todos.hideCompleted)

  const filteredList = useFilteredList(searchContent)

  return (
    <>

      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginTop: "3%" }}
        label="検索"
        variant="standard"
        inputProps={{
          min: "0",
          onInput
        }}
      />
      <div></div>
      <Button variant="outlined" onClick={handleButton} sx={{ marginTop: "2%" }} size="small">
        {hideCompleted ? <p style={{ color: "#AAAAAA" }}>☑を表示する</p> : <p style={{ color: "#555555" }}>☑を非表示にする</p>}
      </Button>
      {
        isEditing ?
          <ListItemEdit content={content} handleChange={handleChange} editTodo={editTodo} />
          :
          <>
            <div>
              {filteredList.map((todo) => {
                const { id, isCompleted } = todo
                return (
                  (!hideCompleted || !isCompleted) && (
                    <div key={id}>
                      <ListItem
                        todo={todo}
                        handleEditButtonPushed={handleEditButtonPushed} />
                    </div>
                  ));
              })}
            </div>
          </>
      }
    </>
  )
}