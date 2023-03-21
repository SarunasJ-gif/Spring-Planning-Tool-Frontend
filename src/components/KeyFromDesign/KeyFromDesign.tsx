import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#ffa500',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));
const Item1 = styled(Paper)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#90ee90',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));
const Item2 = styled(Paper)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#87ceeb',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));
const Item3 = styled(Paper)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'blue',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));
const Item4 = styled(Paper)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#ffc0cb',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));
const Item5 = styled(Paper)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#f0e68c',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 90,
    height: 35,
}));

type Props = {
    title: string;
};

const KeyFromDesign: React.FC<Props> = ({ title }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                if (title === 'SFD-182') {<Item1>{title}</Item1>
                } else if (title==='SFD-175') {
                    <Item2>{title}</Item2>
                }else if (title === 'SFD-192'){
                    <Item3>{title}</Item3>
                } else if (title=== 'SFD-140') {
                    <Item4>{title}</Item4>
                } else if (title === 'SFD-173') {
                    <Item5>{title}</Item5>
                } else {
                    <Item>{title}</Item>
                }
            </Grid>
        </Grid>
    );
};

export default KeyFromDesign;
