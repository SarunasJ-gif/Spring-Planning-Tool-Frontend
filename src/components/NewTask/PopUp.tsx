import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import ColorizeIcon from '@mui/icons-material/Colorize';

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

  const handleColorChange = (color: any) => {
    setSelectedColor(color.hex);
  };

  const handleColorSelect = () => {
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popover' : undefined;

  return (
    <div>
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
          sx={{ ml: 2 }}
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
        <div style={{ fontSize: '16px', lineHeight: '24px' }}>Pick a Color</div>
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ChromePicker
            color={selectedColor}
            onChangeComplete={handleColorChange}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: '16px',
            }}
          >
            <div>
              <Button
                onClick={handleClose}
                color="secondary"
                style={{ marginRight: '8px' }}
              >
                Cancel
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
