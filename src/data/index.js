export const user = {
  user_id: "248yr38hqfh8",
  userName: "NathanBarg",
  email: "Nathan@bar.com",
  password: "barg1!",
  isAdmin: false,
  dets: ["bnjkabsfio23", "asdhfi01023"],
  createdAt: new Date(0),
  sleepData: [],
};

export const admin = {
  user_id: "123578s80",
  userName: "ClemFandango",
  email: "canyou@hearme.com",
  password: "Clem",
  isAdmin: true,
  dets: ["asdghu189"],
  createdAt: new Date(0),
  sleepData: [],
};

for (let i = 1000; i < 10000; i += 1000) {
  user.sleepData.push({ wentToSleep: new Date(i), wokeUp: new Date(i + 500) });
  admin.sleepData.push({ wentToSleep: new Date(i), wokeUp: new Date(i + 500) });
}

export const dets = [
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
