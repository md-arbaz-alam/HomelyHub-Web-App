// managing vooking

//store all bookings
//store indiviua detaoils
// track api loading ststus
//add new bookinf when a booking is created
//updating the booking data and recv it from bckend


import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    bookings:[],
    bookingDetails:{},
    loading:false
}

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        setBookingRequest(state){
            state.loading=true;
        },
        setBookings(state,action){
            state.bookings=action.payload;
            state.loading=false
        },
        addBooking:(state,action)=>{
            state.bookings.push(action.payload);
        },
        setBookingDetails:(state,action)=>{
            state.bookingDetails =action.payload.bookings;
        }
    }
})

export const {setBookings,addBooking,setBookingDetails } = bookingSlice.actions;
export default bookingSlice;