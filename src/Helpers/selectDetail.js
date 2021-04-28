const id1pic1 = require('../Assets/Images/DetailsStreet/id1pic1.png');
const id2pic1 = require('../Assets/Images/DetailsStreet/id2pic1.png');
const id3pic1 = require('../Assets/Images/DetailsStreet/id3pic1.png');
const id1pic2 = require('../Assets/Images/DetailsStreet/id1pic2.png');
const id2pic2 = require('../Assets/Images/DetailsStreet/id2pic2.png');
const id3pic2 = require('../Assets/Images/DetailsStreet/id3pic2.png');
const id1pic3 = require('../Assets/Images/DetailsStreet/id1pic3.png');
const id2pic3 = require('../Assets/Images/DetailsStreet/id2pic3.png');
const id3pic3 = require('../Assets/Images/DetailsStreet/id3pic3.png');

const detailArray = [
  {
    id: 0,
    coordinate: {
      latitude: -6.8410587852543765,
      longitude: 107.51239239738976,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    image: id1pic1,
    name: 'Jalan Raya Cipatik Cihampelas',
    trafficStatus: 'padat lancar',
    objClassification: 'street',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra aliquet mattis. Cras ac laoreet nunc. Phasellus dapibus rutrum dictum. Morbi id euismod lacus. Sed viverra varius libero, in consequat nulla elementum sed. Suspendisse mi sapien, mollis ut mi vitae, ornare viverra massa. Donec feugiat porta volutpat. Donec tempus molestie nisl.',
    photo: [id1pic1, id1pic2, id1pic3],
    nearestVacationObj: [
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic1,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic2,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic3,
      },
    ],
    nearestOtoRepair: [
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic1,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic2,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic3,
      },
    ],
  },
  {
    id: 1,
    coordinate: {
      latitude: -6.839149133374374,
      longitude: 107.50914637049854,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    image: id2pic1,
    name: 'Curug Mallela',
    trafficStatus: 'padat lancar',
    objClassification: 'tourism',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra aliquet mattis. Cras ac laoreet nunc. Phasellus dapibus rutrum dictum. Morbi id euismod lacus. Sed viverra varius libero, in consequat nulla elementum sed. Suspendisse mi sapien, mollis ut mi vitae, ornare viverra massa. Donec feugiat porta volutpat. Donec tempus molestie nisl.',
    photo: [id2pic1, id2pic2, id2pic3],
    nearestVacationObj: [
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic1,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic2,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic3,
      },
    ],
    nearestOtoRepair: [
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic1,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic2,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic3,
      },
    ],
  },
  {
    id: 2,
    coordinate: {
      latitude: -6.83460975281185,
      longitude: 107.51583855906091,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    image: id3pic1,
    name: 'Bengkel Astra Otoparts',
    trafficStatus: 'padat lancar',
    objClassification: 'otomotive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra aliquet mattis. Cras ac laoreet nunc. Phasellus dapibus rutrum dictum. Morbi id euismod lacus. Sed viverra varius libero, in consequat nulla elementum sed. Suspendisse mi sapien, mollis ut mi vitae, ornare viverra massa. Donec feugiat porta volutpat. Donec tempus molestie nisl.',
    photo: [id3pic1, id3pic2, id3pic3],
    nearestVacationObj: [
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic1,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic2,
      },
      {
        id: 1,
        name: 'Curug Mallela',
        image: id2pic3,
      },
    ],
    nearestOtoRepair: [
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic1,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic2,
      },
      {
        id: 2,
        name: 'Bengkel Astra Otoparts',
        image: id3pic3,
      },
    ],
  },
];

module.exports = {
  detailArray,
  selectDetail: id => {
    let detail = {};
    detailArray.forEach((val, key) => {
      if (key === id) {
        detail = val;
      }
    });
    return detail;
  },
};
