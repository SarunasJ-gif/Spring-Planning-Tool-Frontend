import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Sprint } from '../../types/NewSprintTypes';
import { createNewSprint } from '../../redux/NewSprint/NewSprintActions';


function BottomMenu() {
  
  const dispatch = useDispatch();

  const { title, startDate, endDate } = useSelector(
    (state: { newSprint: Sprint }) => state?.newSprint?.sprint,
  );

  const handleButtonClick = () => {
    const newSprint = { title, startDate, endDate };
    dispatch(createNewSprint(newSprint));
  };

  return (
    <Box
      sx={{
        pl: 15,
        pt: 1,
        pb: 1,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: 'primary',
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
            marginRight: '15px',
            fontSize: '18px',
          }}
          onClick={handleButtonClick}
        >
          ADD
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: '#fff',
            color: 'primary',
            borderRadius: '5px',
            fontSize: '18px',
          }}
        >
          CANCEL
        </Button>
      </Box>
    </Box>
  );
}

export default BottomMenu;

