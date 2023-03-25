import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import theme from '../../theme';

type TaskKeyProps = {
  taskKey: string;
  keyColor: string;
  keyBackgroundColor: string;
};

function TaskKey(props: TaskKeyProps) {
  const KeyStyle = styled(Paper)(() => ({
    color: props.keyColor,
    backgroundColor: props.keyBackgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16,
    width: 90,
    height: 35,
  }));
  return <KeyStyle>{props.taskKey}</KeyStyle>;
}

export default TaskKey;
