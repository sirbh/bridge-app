import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function ColorChips() {
    const [selected, setSelected] = React.useState([]);
    const [notselected, setnotSelected] = React.useState([
            "Masquerade Ball",
            "Tropical Paradise",
            "Vintage Hollywood Glam",
            "Under the Sea",
            "Enchanted Forest",
            "Carnival",
            "Free",
            "Paid",
            "Online",
            "Offline",
            "This Week",
            "This Month",

          
    ]);
  return (
    <Stack spacing={1} alignItems="center">
        <Typography variant="h6" gutterBottom component="div">Select your event type</Typography>
      <Stack direction="row" spacing={1}>
        {notselected.map((item, i) => {
            return (
                <Chip
                    key={i}
                    label={item}
                    onClick={() => {
                        setSelected([...selected, item]);
                        setnotSelected(notselected.filter((e) => e !== item));
                    }}
                    variant="outlined"
                    color='primary'
                />
            );
        })}
      </Stack>
      <Stack direction="row" spacing={1}>
        {selected.map((item, i) => {
            return (
                <Chip
                    key={i}
                    label={item}
                    onClick={() => {
                        setSelected(selected.filter((e) => e !== item));
                        setnotSelected([...notselected, item]);
                    }}
                    variant="contained"
                    color='primary'
                />
            );
        })}
      </Stack>
    </Stack>
  );
}
