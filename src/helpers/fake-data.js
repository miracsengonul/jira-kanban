export default {
  data: [
    {
      id: 1,
      section: 'TO DO',
      tasks: [
        {
          id: 1,
          title: 'Make a Kanban App',
          date: '12th Jan',
          creator: 'Prahlad',
          description: 'Please use trello and designs in Dribbble as reference. And carry on blablabla',
          image: 'https://i.dummyjson.com/data/products/1/1.jpg',
          link: 'https://apple.com',
          attach: [
            {
              title: 'main.psd'
            }
          ],
          tags: [
            {
              id: 1,
              title: 'Design',
              backgroundColor: 'bg-default',
              color: 'default'
            },
            {
              id: 2,
              title: 'Development',
              backgroundColor: 'bg-success',
              color: 'success'
            }
          ],
          comments: {
            total: 3,
            userImages: ['https://robohash.org/hicveldicta.png', 'https://robohash.org/doloremquesintcorrupti.png']
          }
        },
        {
          id: 2,
          title: 'Fix his kid through any means',
          date: '12th Jan',
          creator: 'Hiranya',
          attach: [
            {
              title: 'main.psd'
            }
          ],
          tags: [
            {
              title: 'Design',
              backgroundColor: 'bg-default',
              color: 'default'
            }
          ],
          comments: {
            total: 1,
            userImages: ['https://robohash.org/consequunturautconsequatur.png']
          }
        },
        {
          id: 3,
          title: 'Share it with friends',
          date: '12th Jan',
          creator: 'Mirac',
          attach: [
            {
              title: 'main.psd'
            }
          ],
          tags: [
            {
              title: 'Design',
              backgroundColor: 'bg-default',
              color: 'default'
            }
          ],
          comments: {
            total: 7,
            userImages: ['https://robohash.org/facilisdignissimosdolore.png', 'https://robohash.org/hicveldicta.png']
          }
        }
      ]
    },
    {
      id: 2,
      section: 'DOING',
      tasks: [
        {
          id: 4,
          title: 'Share the links for inspiration',
          date: '12th Jan',
          creator: 'Hiranya',
          lin: 'dribbble.com/deneme-test',
          attach: [
            {
              title: 'main.psd'
            }
          ],
          tags: [
            {
              title: 'Design',
              backgroundColor: 'bg-default',
              color: 'default'
            }
          ],
          comments: {
            total: 1,
            userImages: ['https://robohash.org/adverovelit.png']
          }
        }
      ]
    },
    {
      id: 3,
      section: 'DONE',
      tasks: [
        {
          id: 1,
          title: 'Treatment by Fire',
          date: '12th Jan',
          creator: 'Narshima',
          tags: [
            {
              title: 'Design',
              backgroundColor: 'bg-default',
              color: 'default'
            }
          ],
          comments: {
            total: 8,
            userImages: ['https://robohash.org/adverovelit.png']
          }
        },
        {
          id: 2,
          title: 'Use Elephants and Snakes',
          date: '12th Jan',
          creator: 'Humar'
        }
      ]
    }
  ]
};
