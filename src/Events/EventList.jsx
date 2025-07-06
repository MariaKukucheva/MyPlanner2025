import { Button, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function EventList({ eventList, onToggleEvent, deleteEvent, setFilter }) {

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>

        <Button onClick={() => setFilter("all")}
          color="secondary">
          All
        </Button>
        <Button onClick={() => setFilter("upcoming")}
          color="secondary">
          Upcoming
        </Button>
        <Button onClick={() => setFilter("past")}
          color="secondary">
          Past
        </Button>
      </div>
      <div>
        {eventList.map(event => (
          <li key={event.id}>
            <label style={{ display: 'flex', alignItems: 'center'}}>

              <Checkbox
                type="checkbox"
                checked={event.isUpcoming}
                onChange={() => onToggleEvent(event.id)}
                
                color="success"
              />
              
              <span style={{ minWidth: '150px' }}>
                {event.name}
              </span>

              <span style={{ minWidth: '120px' }}>
                {event.date && typeof event.date === 'object'
                  ? event.date.toLocaleDateString()
                  : event.date || 'No date'}
              </span>

              <span style={{ minWidth: '100px' }}>
                {event.time && typeof event.time === 'object'
                  ? event.time.toLocaleTimeString()
                  : event.time || 'No time'}
              </span>

              <IconButton
                onClick={() => deleteEvent(event.id)}
                aria-label="delete">
                <DeleteIcon />
              </IconButton>

            </label>
          </li>
        ))}
      </div>
    </>
  )
}
export default EventList