import { useState } from "react";
import { TextField, IconButton, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileTimePicker } from "@mui/x-date-pickers";

function EventForm({ onSubmit }) {
  const [event, setEvent] = useState('');
  const [error, setError] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (event.trim() === '') {
      setError(true);
      return;
    }

    onSubmit({ name: event, date: date, time: time  });

    setEvent('');
    setDate(null);
    setTime(null);
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack  spacing={2} alignItems="center" flexWrap="wrap">
        <TextField
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          helperText={error ? 'Please enter an event' : ''}
          label="Add event"
          color="secondary"
          error={error}
          sx={{ width: 250 }}
        />

        <DatePicker
          label="Select date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          sx={{ width: 250 }}
        />

        <DemoItem >
          <MobileTimePicker value={time}
            onChange={(newValue) => setTime(newValue)}
             slotProps={{ textField: { sx: { width: 250 }}}}
          />
        </DemoItem>

        <IconButton
          type="submit"
          aria-label="add"
          color="secondary"
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </form>
  );
}

export default EventForm;
