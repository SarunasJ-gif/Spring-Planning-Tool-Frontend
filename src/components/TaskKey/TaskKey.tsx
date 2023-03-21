import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



type TaskKeyProps = {
    key: string,
    color: string,
    backgroundColor: string
};

function TaskKey(props: TaskKeyProps) {
    const KeyStyle = styled(Paper)(({ theme }) => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        width: 90,
        height: 35
    }));
    return (<KeyStyle>{props.key}</KeyStyle>)
}

export default TaskKey;
