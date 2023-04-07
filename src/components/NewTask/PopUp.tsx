import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { ColorResult } from 'react-color';

export default function ColorPickerPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const [selectedColor, setSelectedColor] = React.useState('#E66465');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  const handleColorSelect = () => {
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popover' : undefined;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '0.1px solid lightgrey',
        borderRadius: '5px',
        marginLeft: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          aria-describedby={id}
          onClick={handleClick}
          style={{
            width: '25px',
            height: '25px',
            minWidth: '25px',
            backgroundColor: selectedColor,
          }}
          sx={{ ml: 1 }}
        ></Button>
        <ColorizeIcon />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            lineHeight: '24px',
            marginTop: '10px',
            marginLeft: '10px',
            color: 'grey',
          }}
        >
          Pick a Color
        </div>
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'none',
            boxShadow: 'none',
            outline: 'none',
          }}
        >
          <ChromePicker
            color={selectedColor}
            onChangeComplete={handleColorChange}
            disableAlpha={true}
            styles={{
              default: {
                picker: {
                  border: 'none',
                  boxShadow: 'none',
                },
              },
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'right',
              width: '100%',
              marginTop: '16px',
            }}
          >
            <div>
              <Button
                onClick={handleClose}
                color="primary"
                style={{ marginRight: '8px' }}
              >
                CANCEL
              </Button>
              <Button
                onClick={handleColorSelect}
                color="primary"
                variant="text"
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}
