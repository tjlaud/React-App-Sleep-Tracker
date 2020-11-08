import React from "react";

const user = {
  user_id: "248yr38hqfh8",
  userName: "NathanBarg",
  email: "Nathan@bar.com",
  password: "barg1!",
  isAdmin: false,
  dets: ["bnjkabsfio23", "asdhfi01023"],
  createdAt: new Date(0),
  sleepData: [],
};

const admin = {
  user_id: "123578s80",
  userName: "ClemFandango",
  email: "canyou@hearme.com",
  password: "Clem",
  isAdmin: true,
  dets: ["asdghu189"],
  createdAt: new Date(0),
  sleepData: [],
};

for (let i = 1; i < 7; i++) {
  const wentToSleep = new Date(`November ${i}, 2020 22:00:00`);
  const wokeUp = new Date(`November ${i + 1}, 2020 07:00:00`);
  user.sleepData.push({ wentToSleep, wokeUp });
  admin.sleepData.push({ wentToSleep, wokeUp });
}

const dets = [
  {
    det_id: "bnjkabsfio23",
    detName: "20-1",
    createdBy: "JimDonovan",
    users: ["248yr38hqfh8"],
    createdAt: new Date(0),
  },
  {
    det_id: "asdghu189",
    detName: "20-2",
    createdBy: "ClemFandango",
    users: ["248yr38hqfh8"],
    createdAt: new Date(0),
  },
  {
    det_id: "asdhfi01023",
    detName: "20-3",
    createdBy: "TC",
    users: ["248yr38hqfh8"],
    createdAt: new Date(0),
  },
];

export const dummyData = {
  user,
  admin,
  dets,
};

export const DummyDataContext = React.createContext();
