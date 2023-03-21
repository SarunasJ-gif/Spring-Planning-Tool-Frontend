import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

type TaskKeyProps = {
  taskKey: string;
  color: string;
  backgroundColor: string;
};

function TaskKey(props: TaskKeyProps) {
  const KeyStyle = styled(Paper)(() => ({
    textColor: '#000000',
    backgroundColor: '#939393',
    textAlign: 'center',
    width: 90,
    height: 35,
  }));
  return <KeyStyle>{props.taskKey}</KeyStyle>;
}

export default TaskKey;
