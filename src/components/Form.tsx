import { type Todo, add } from '../features/todo/todoSlice'
import { v4 as uuidv4 } from 'uuid'
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const Form = (): JSX.Element => {
  const dispatch = useDispatch()
  const ID = uuidv4()

  const addTodo = (content: string): void => {
    const newTodo: Todo = {
      id: ID,
      content,
      isCompleted: false,
    }
    if (content === '') return
    dispatch(add(newTodo))
    setContent('')
  }
  const [content, setContent] = useState('')
  const [open, setOpen] = useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Todoを入力する
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {/* dialogを大きくする */}
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Todoを入力してください"
              type="email"
              fullWidth
              variant="standard"
              multiline
              rows={2}
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button
              onClick={() => {
                addTodo(content)
              }}
            >
              送信
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
