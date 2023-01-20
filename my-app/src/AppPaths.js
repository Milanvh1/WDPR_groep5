import React, { Component } from 'react';
import RoomRentScreen from "./RoomRentScreen/RoomRentScreen";
import TicketOverviewScreen from './TicketOverviewScreen/TicketOverviewScreen';

const AppPaths = [
    {
        path: "/RoomRentScreen",
        element: <RoomRentScreen/>,
    },
    {
        path: "/TicketOverviewScreen",
        element: <TicketOverviewScreen/>
    },
]