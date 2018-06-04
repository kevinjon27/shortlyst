module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Welcome back, Kejo!',
    createdAt: new Date(Date.UTC(2017, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "This is a system message.",
    createdAt: new Date(Date.UTC(2017, 7, 20, 17, 20, 0)),
    system: true
  }
];
