import AddTaskIcon from '@mui/icons-material/AddTask';
import { Chip } from '@mui/material';


export const Header = (): JSX.Element => {
    return (
        <Chip sx={{ fontSize: "20px", marginBottom: "5%" }} icon={<AddTaskIcon />} label="タスク管理" />
    )
}
