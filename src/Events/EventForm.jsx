import { useState } from "react";
import { TextField, IconButton, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileTimePicker } from "@mui/x-date-pickers";

function EventForm({ onSubmit }) {
  const [event, setEvent] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [error, setError] = useState({
    name: false,
    date: false,
    time: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      name: event.trim() === "",
      date: date === null,
      time: time === null,
    };

    setError(newError);

     if (Object.values(newError).some(Boolean)) {  //ако има дори една грешка да не събмитва
      return;
    }

    onSubmit({ name: event, date: date, time: time  });

    setEvent('');
    setDate(null);
    setTime(null);
    setError({
      name: false,
      date: false,
      time: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack  spacing={2} alignItems="center" flexWrap="wrap">
        <TextField
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          helperText={error.name ? 'Please enter an event' : ''}
          label="Add event"
          color="secondary"
          error={error.name}
          sx={{ width: 250 }}
        />

        <DatePicker
          label="Select date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          slotProps={{
          textField: {
            error: error.date,
            helperText: error.date ? "Please enter a date" : "",
            sx: { width: 250 }
          }
        }}
        />

        <MobileTimePicker
          value={time}
          onChange={(newValue) => setTime(newValue)}
          slotProps={{
            textField: {
              error: error.time,
              helperText: error.time ? "Please enter a time" : "",
              sx: { width: 250 }
            }
          }}
        />
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
