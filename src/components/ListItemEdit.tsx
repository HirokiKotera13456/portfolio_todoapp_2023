import { Button, Divider, InputBase, Paper } from '@mui/material'
import React from 'react'

interface Props {
  content: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  editTodo: () => void
}

export const ListItemEdit: React.FunctionComponent<Props> = (props) => {
  const { content, handleChange, editTodo } = props
  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '8px 4px', marginTop: '5%', display: 'flex', alignItems: 'center', width: '50%' }}
      >
        <InputBase
          multiline
          sx={{ ml: 1, flex: 1 }}
          placeholder="編集"
          inputProps={{ 'aria-label': '編集' }}
          value={content}
          onChange={handleChange}
          name="content"
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button
          onClick={() => {
            editTodo()
          }}
        >
          更新する
        </Button>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  )
}
