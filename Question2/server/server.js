const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const trains = [
  {
    trainName: "Sundar Exp",
    trainNumber: "2347",
    departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
    seatsAvailable: { sleeper: 55, AC: 0 },
    price: { sleeper: 133, AC: 323 },
    delayedBy: 7,
  },
  {
    trainName: "Nannu Exp",
    trainNumber: "2349",
    departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
    seatsAvailable: { sleeper: 2, AC: 1 },
    price: { sleeper: 270, AC: 437 },
    delayedBy: 9,
  },
  {
    trainName: "Chennai Exp",
    trainNumber: "2344",
    departureTime: { Hours: 21, Minutes: 35, Seconds: 0 },
    seatsAvailable: { sleeper: 3, AC: 1 },
    price: { sleeper: 499, AC: 605 },
    delayedBy: 15,
  },
  {
    trainName: "Mumbai Exp",
    trainNumber: "2343",
    departureTime: { Hours: 22, Minutes: 37, Seconds: 0 },
    seatsAvailable: { sleeper: 8, AC: 15 },
    price: { sleeper: 560, AC: 660 },
    delayedBy: 16,
  },
  {
    trainName: "Hyderabad Exp",
    trainNumber: "2341",
    departureTime: { Hours: 23, Minutes: 55, Seconds: 0 },
    seatsAvailable: { sleeper: 6, AC: 7 },
    price: { sleeper: 554, AC: 1854 },
    delayedBy: 5,
  },
  {
    trainName: "Manu Exp",
    trainNumber: "2346",
    departureTime: { Hours: 19, Minutes: 0, Seconds: 0 },
    seatsAvailable: { sleeper: 15, AC: 10 },
    price: { sleeper: 510, AC: 710 },
    delayedBy: 13,
  },
  {
    trainName: "Kolkata Exp",
    trainNumber: "2345",
    departureTime: { Hours: 20, Minutes: 15, Seconds: 0 },
    seatsAvailable: { sleeper: 16, AC: 70 },
    price: { sleeper: 560, AC: 660 },
    delayedBy: 14,
  },
  {
    trainName: "Late Latif Exp",
    trainNumber: "2342",
    departureTime: { Hours: 8, Minutes: 30, Seconds: 0 },
    seatsAvailable: { sleeper: 18, AC: 7 },
    price: { sleeper: 1202, AC: 1833 },
    delayedBy: 2,
  },
  {
    trainName: "Pappu Exp",
    trainNumber: "2345",
    departureTime: { Hours: 11, Minutes: 23, Seconds: 0 },
    seatsAvailable: { sleeper: 4, AC: 4 },
    price: { sleeper: 561, AC: 1337 },
    delayedBy: 5,
  },
  {
    trainName: "Love Exp",
    trainNumber: "2346",
    departureTime: { Hours: 12, Minutes: 3, Seconds: 0 },
    seatsAvailable: { sleeper: 10, AC: 1 },
    price: { sleeper: 472, AC: 623 },
    delayedBy: 6,
  },
  {
    trainName: "Taxi Wala Exp",
    trainNumber: "2347",
    departureTime: { Hours: 13, Minutes: 32, Seconds: 0 },
    seatsAvailable: { sleeper: 2, AC: 2 },
    price: { sleeper: 500, AC: 633 },
    delayedBy: 8,
  },
  {
    trainName: "Hawai Exp",
    trainNumber: "2349",
    departureTime: { Hours: 14, Minutes: 55, Seconds: 0 },
    seatsAvailable: { sleeper: 1, AC: 0 },
    price: { sleeper: 957, AC: 1044 },
    delayedBy: 10,
  },
  {
    trainName: "Test Exp",
    trainNumber: "2348",
    departureTime: { Hours: 15, Minutes: 55, Seconds: 0 },
    seatsAvailable: { sleeper: 1, AC: 0 },
    price: { sleeper: 647, AC: 934 },
    delayedBy: 11,
  },
  {
    trainName: "Chai Wala Exp",
    trainNumber: "2344",
    departureTime: { Hours: 11, Minutes: 0, Seconds: 0 },
    seatsAvailable: { sleeper: 33, AC: 13 },
    price: { sleeper: 593, AC: 704 },
    delayedBy: 4,
  },
  {
    trainName: "Delhi Door Hai Exp",
    trainNumber: "2343",
    departureTime: { Hours: 9, Minutes: 45, Seconds: 0 },
    seatsAvailable: { sleeper: 32, AC: 1 },
    price: { sleeper: 419, AC: 1413 },
    delayedBy: 3,
  },
  {
    trainName: "Manoranjan Exp",
    trainNumber: "2347",
    departureTime: { Hours: 17, Minutes: 33, Seconds: 0 },
    seatsAvailable: { sleeper: 5, AC: 1 },
    price: { sleeper: 302, AC: 433 },
    delayedBy: 12,
  },
  {
    trainName: "Pune Exp",
    trainNumber: "2342",
    departureTime: { Hours: 23, Minutes: 0, Seconds: 0 },
    seatsAvailable: { sleeper: 6, AC: 7 },
    price: { sleeper: 689, AC: 1689 },
    delayedBy: 17,
  },
  {
    trainName: "Funny Exp",
    trainNumber: "2341",
    departureTime: { Hours: 7, Minutes: 15, Seconds: 0 },
    seatsAvailable: { sleeper: 15, AC: 5 },
    price: { sleeper: 427, AC: 660 },
    delayedBy: 1,
  },
];



app.get("/", (req, res) => {
  res.json(trains);
});

app.listen(5000, (req, res) => {
  console.log("Server is running at port 5000");
});
