import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import './index.css';

function Navigation() {
  
  const theme = useTheme();
  console.log('primary main color:', theme.palette.primary.main);
  return (
    <nav style={{ marginBottom: "2rem" }}> 
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Button component={Link} to="/"  variant="outlined" color="primary">
            Home
          </Button>
        </li>
        <li>
          <Button component={Link} to="/Goals/goals" variant="outlined" color="primary">
            Goals
          </Button>
        </li>
        <li>
          <Button component={Link} to="/Events/events"  variant="outlined" color="primary">
            Events
          </Button>
        </li>
        <li>
          <Button component={Link} to="/notes"  variant="outlined" color="primary">
            Notes
          </Button>
        </li>
        <li>
          <Button component={Link} to="/stats"  variant="outlined" color="primary">
            Stats
          </Button>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navigation;
