module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '#awesome',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    image: 'https://lh3.googleusercontent.com/-uXipYA5hSKc/VVWKiFIvo-I/AAAAAAAAAhQ/vkjLyZNEzUA/w800-h800/1.jpg',
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Send me a picture!',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
    location: {
      latitude: -6.225294,
      longitude: 106.799177,
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Where are you?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "I'll recommend you the position that perfect for your qualification!",
    createdAt: new Date(),
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
    text: 'Explore for an opening',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hi Kejo, what do you want to do today?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    sent: true,
    received: true,
  },
];
