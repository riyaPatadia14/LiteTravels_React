import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//Icons
import GiteRoundedIcon from '@mui/icons-material/GiteRounded';
import AttractionsIcon from '@mui/icons-material/Attractions';
import MopedIcon from '@mui/icons-material/Moped';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ModeOfTravelRoundedIcon from '@mui/icons-material/ModeOfTravelRounded';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import SignpostRoundedIcon from '@mui/icons-material/SignpostRounded';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';

const drawerWidth = 240;

const Drawers = () => {
  // const navigate = useNavigate();

  const drawerList = [

    { item: "Registration", link: "", icon: VpnKeyRoundedIcon },
    { item: "Hotels", link: "/hotels", icon: GiteRoundedIcon },
    { item: "RentVehicles", link: "/rent-vehicles", icon: MopedIcon },
    { item: "VehicleLocation", link: "", icon: EmojiTransportationIcon },
    { item: "VisitPlaces", link: "", icon: TourRoundedIcon },
    { item: "Guides", link: "", icon: SignpostRoundedIcon },
    { item: "Places", link: "/places", icon: AttractionsIcon },
    { item: "UserDashboards", link: "", icon: SpaceDashboardIcon },
    { item: "CardDetails", link: "", icon: CreditCardIcon },
    { item: "TransportMedium", link: "", icon: ModeOfTravelRoundedIcon },
    { item: "TransportWays", link: "", icon: AirportShuttleRoundedIcon },
    { item: "Flights", link: "", icon: FlightIcon },
    { item: "Train", link: "", icon: DirectionsRailwayFilledIcon },
    { item: "Buses", link: "", icon: DirectionsBusIcon },
  ];

  return (
    <>
      <div>
        <div>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Lite Travels
                  <FingerprintOutlinedIcon sx={{ ml: 135 }} />
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  {drawerList.map((text, index) => (
                    <ListItem key={index} disablePadding>
                      <Link to={text.link} style={{ textDecoration: "none" }}>
                        <ListItemButton>
                          <ListItemIcon>
                            <text.icon />
                          </ListItemIcon>
                          <ListItemText primary={text.item} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
            <Outlet />
          </Box>
        </div>
      </div>
    </>
  );
}

export default Drawers;