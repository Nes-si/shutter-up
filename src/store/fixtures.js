export const data = [
  {
    index: 0,
    name: "Product",
    info: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
    slides: [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
    ],
    items: [
      {
        index: 0,
        title: 'Lorem ipsum',
        client: 'Client 1',
        image: 'item1.jpg',
      },
      {
        index: 1,
        title: 'Aenean massa',
        client: 'Client 2',
        image: 'item2.jpg',
      },
      {
        index: 2,
        title: 'Vivamus elementum',
        client: 'Client 3',
        image: 'item3.jpg',
      },
      {
        index: 3,
        title: 'Curabitur',
        client: 'Client 4',
        image: 'item4.jpg',
      },
      {
        index: 4,
        title: 'Vivamus elementum',
        client: 'Client 5',
        image: 'item5.jpg',
      },
      {
        index: 5,
        title: 'Curabitur',
        client: 'Client 6',
        image: 'item6.jpg',
      }
    ]
  },
  {
    index: 1,
    name: "Fashion",
    info: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
    slides: [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
    ],
    items: [
      {
        index: 0,
        title: 'Lorem ipsum',
        client: 'Client 1',
        image: 'item1.jpg',
      },
      {
        index: 1,
        title: 'Aenean massa',
        client: 'Client 2',
        image: 'item2.jpg',
      },
      {
        index: 2,
        title: 'Vivamus elementum',
        client: 'Client 3',
        image: 'item3.jpg',
      },
      {
        index: 3,
        title: 'Curabitur',
        client: 'Client 4',
        image: 'item4.jpg',
      }
    ]
  },
  {
    index: 2,
    name: "Accessory",
    info: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
    slides: [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
    ],
    items: [
      {
        index: 0,
        title: 'Lorem ipsum',
        client: 'Client 1',
        image: 'item1.jpg',
      },
      {
        index: 1,
        title: 'Aenean massa',
        client: 'Client 2',
        image: 'item2.jpg',
      },
      {
        index: 2,
        title: 'Vivamus elementum',
        client: 'Client 3',
        image: 'item3.jpg',
      },
      {
        index: 3,
        title: 'Curabitur',
        client: 'Client 4',
        image: 'item4.jpg',
      }
    ]
  },
  {
    index: 3,
    name: "Jewelry",
    info: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
    slides: [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
    ],
    items: [
      {
        index: 0,
        title: 'Lorem ipsum',
        client: 'Client 1',
        image: 'item1.jpg',
      },
      {
        index: 1,
        title: 'Aenean massa',
        client: 'Client 2',
        image: 'item2.jpg',
      },
      {
        index: 2,
        title: 'Vivamus elementum',
        client: 'Client 3',
        image: 'item3.jpg',
      },
      {
        index: 3,
        title: 'Curabitur',
        client: 'Client 4',
        image: 'item4.jpg',
      }
    ]
  },
  {
    index: 4,
    name: "Interiors",
    info: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`,
    slides: [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
    ],
    items: [
      {
        index: 0,
        title: 'Lorem ipsum',
        client: 'Client 1',
        image: 'item1.jpg',
      },
      {
        index: 1,
        title: 'Aenean massa',
        client: 'Client 2',
        image: 'item2.jpg',
      },
      {
        index: 2,
        title: 'Vivamus elementum',
        client: 'Client 3',
        image: 'item3.jpg',
      }
    ]
  }
];


export function getCatByName(name) {
  for (let cat of data) {
    if (cat.name === name)
      return cat;
  }
  return null;
}
