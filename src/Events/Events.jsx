import EventForm from "./EventForm";
import EventList from "./EventList";

import { useEffect, useState, useRef} from "react";


function Events() {
  const [eventList, setEventList] = useState([]);
  const [filter, setFilter] = useState("all");
  const today = new Date();
  const [loaded, setLoaded] = useState(false);
  const Id = useRef(1); 

  function addEvent(newEvent) {

    const event = {
      id: Id.current++, 
      name: newEvent.name,
      date: newEvent.date,
      time: newEvent.time,
      isUpcoming: false,
    }

     setEventList(prevList => [...prevList, event]);
  }
  
  function onToggleEvent(eventId) {

    const updatedList = eventList.map(event =>
      event.id === eventId ? { ...event, isUpcoming: !event.isUpcoming } : event
    );

    setEventList(updatedList);
  }
  
   function deleteEvent(eventId) {

    const updatedList = eventList.filter(event => 
      event.id !== eventId);

    setEventList(updatedList);
  }

  const filteredEvents = eventList.filter(event => {
    if (filter === "upcoming") return event.date >= today;
    if (filter === "past") return event.date < today;
    return true;
  });

  useEffect(() => {
    console.log("Saving to localStorage", eventList);
    const storedEvents = localStorage.getItem('eventList');
    const storedId = localStorage.getItem('Id');

    if (storedEvents) {
      try {
        const parsedEvents = JSON.parse(storedEvents).map(event => ({
          ...event,
          date: event.date ? new Date(event.date) : null,
          time: event.time ? new Date(event.time) : null,
        }));
        
        setEventList(parsedEvents);
      } 
      catch (err) {
        console.error("Error parsing localStorage:", err);
      }
    }

    if (storedId) {
      Id.current = parseInt(storedId);
    }

    setLoaded(true);

  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem('eventList', JSON.stringify(eventList));
    localStorage.setItem('Id', Id.current.toString());
  }, [eventList, loaded]);

  return (
    <>
      <EventForm 
       onSubmit={
        addEvent}
      />

      <EventList 
        eventList={filteredEvents} 
        onToggleEvent={onToggleEvent} 
        deleteEvent={deleteEvent}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  )
}

export default Events