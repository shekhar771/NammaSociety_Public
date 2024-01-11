import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../Css/ModifyButton.css';

export default function ModifyButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className="button" variant="contained">MODIFY</Button>
    </Stack>
  );
}