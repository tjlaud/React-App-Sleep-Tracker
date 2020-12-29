import React from "react";

const users = [
  {
    user_id: "248yr38hqfh8",
    userName: "Nathan Barg",
    email: "Nathan@bar.com",
    password: "barg1!",
    isAdmin: true,
    dets: ["det20-1", "det20-3"],
    createdAt: new Date(0),
    sleepData: [],
  },
  {
    user_id: "123578s80",
    userName: "Clem Fandango",
    email: "canyou@hearme.com",
    password: "Clem",
    isAdmin: true,
    dets: ["det20-2", "det20-3"],
    createdAt: new Date(0),
    sleepData: [],
  },
  {
    user_id: "as8d9h13",
    userName: "Andy Jolly",
    email: "1234@a.com",
    password: "Jolly",
    isAdmin: false,
    dets: ["det20-1", "det20-3"],
    createdAt: new Date(0),
    sleepData: [],
  },
  {
    user_id: "120980hsc",
    userName: "Milly",
    email: "1asdf@a.com",
    password: "Mil1",
    isAdmin: false,
    dets: ["det20-1"],
    createdAt: new Date(0),
    sleepData: [],
  },
  {
    user_id: "1asch8v92",
    userName: "Digi",
    email: "antD@ac.com",
    password: "DigiDigiDigi",
    isAdmin: false,
    dets: ["det20-1"],
    createdAt: new Date(0),
    sleepData: [],
  },
];

// const user = {
//   user_id: "248yr38hqfh8",
//   userName: "NathanBarg",
//   email: "Nathan@bar.com",
//   password: "barg1!",
//   isAdmin: false,
//   dets: ["det20-1", "det20-3"],
//   createdAt: new Date(0),
//   sleepData: [],
// };

// const admin = {
//   user_id: "123578s80",
//   userName: "ClemFandango",
//   email: "canyou@hearme.com",
//   password: "Clem",
//   isAdmin: true,
//   dets: ["det20-2"],
//   createdAt: new Date(0),
//   sleepData: [],
// };

// for (let i = 1; i < 7; i++) {
//   const wentToSleep = new Date(`November ${i}, 2020 22:00:00`);
//   const wokeUp = new Date(`November ${i + 1}, 2020 07:00:00`);
//   user.sleepData.push({ wentToSleep, wokeUp });
//   admin.sleepData.push({ wentToSleep, wokeUp });
// }

users.forEach((user) => {
  for (let i = 1; i < 7; i++) {
    const wentToSleep = new Date(`November ${i}, 2020 22:00:00`);
    const wokeUp = new Date(`November ${i + 1}, 2020 07:00:00`);
    user.sleepData.push({ wentToSleep, wokeUp });
  }
});

const dets = [
  {
    det_id: "det20-1",
    detName: "20-1",
    createdBy: "JimDonovan",
    users: ["248yr38hqfh8", "as8d9h13", "120980hsc", "1asch8v92"],
    createdAt: new Date(0),
  },
  {
    det_id: "det20-2",
    detName: "20-2",
    createdBy: "ClemFandango",
    users: ["123578s80"],
    createdAt: new Date(0),
  },
  {
    det_id: "det20-3",
    detName: "20-3",
    createdBy: "TC",
    users: ["248yr38hqfh8", "123578s80", "as8d9h13"],
    createdAt: new Date(0),
  },
];

export const dummyData = {
  users,
  dets,
};

export const DummyDataContext = React.createContext();
