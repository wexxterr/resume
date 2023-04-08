// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var header = {
  name: {
    firstname: 'Vladyslav',
    lastname: 'Bilous',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Poland, Warszawa',
}

var footer = {
  social: {
    email: {
      text: 'example@mail.com',
      href: 'mailto:worlddoom270@gmail.com',
    },
    tel: {
      text: '+380980086995',
      href: 'tel:+380980086995',
    },
    link: {
      href: 'https://www.linkedin.com/in/vladyslav-bilous-a49110263/',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    header,

    page: {
      title: 'Resume | Summary',

    },

    main: {
      summary: {
        title: 'Summary',
        text: 'Open- minded for new technologies, with 1 years of experience in development.Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good teamplayer, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probabilityfor such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
}),


  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      // ↙ сюди вводимо JSON дані

      header,

      page: {
        title: 'Resume | Skills',
      },

      main: {

        skills: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'Handlebars',
            point: 10,
            isTop: true,
          },
          {
            name: 'VS Code & NPM',
            point: 8,
            isTop: false,
          },
          {
            name: 'Therminal & Git',
            point: 7,
          },
          {
            name: 'React.js',
            point: 0,
          },
          {
            name: 'PHP',
            point: null,
          },
        ],

        hobbies: [
          {
            name: 'Programming',
            isMain: true,
          },
          {
            name: 'Drawing',
            isMain: true,
          },
          {
            name: 'Sport',
            isMain: false,
          },
        ]
      },

      footer,
    })
  }),

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані

      header,

      page: {
        title: 'Resume | Education',
      },

      main: {
        educations: [
          {
            name: 'School 12 c. Khmelnytskyi',
            isEnd: true,
          },
          {
            name: 'KPK NU LP',
            isEnd: true,
          },
          {
            name: 'Cosinus Szkoła policealna',
            isEnd: false,
          },
          {
            name: 'IT-Brains',
            isEnd: false,
          },
        ],
        certificates: [
          {
            name: 'certifacate1',
            id: '16427',
          },
          {
            name: 'certifacate2',
            id: '23683',
          },
          {
            name: 'certifacate3',
            id: '38368',
          },
        ],
      },

      footer,
    })
  }),

  router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
      // ↙ сюди вводимо JSON дані

      layout: 'big',

      header,

      page: {
        title: 'Resume | Work',
      },

      main: {
        works: [
          {
            position: 'Junior Fullstack Developer',
            company: {
              name: 'IT-Brains',
              url: 'https://it-brains.com.ua/',
            },
            duration: {
              from: '10.10.2022',
              to: null,
            },
            projectAmount: 3,

            projects: [
              {
                name: 'Resume',
                url: 'https://resume.com.ua/',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                stackAmount: '3',
                stacks: [
                  {
                    name: 'React.js',
                  },
                  {
                    name: 'HTML / CSS',
                  },
                  {
                    name: 'Node.js',
                  },
                ],
                awardAmount: '2',
                awards: [
                  {
                    name: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  },
                  {
                    name: 'Excepteur sint occaecat cupidatat non proident',
                  },
                ],
              },
            ],
          },
        ],
      },

      footer,
    })
  }),

  router.get('/program', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('program', {
      program: {
        excursion: {
          name: 'Cultural Tour',
          location: {
            city: 'Paris',
            country: 'France',
          },
          date: '2023-06-15',
          program: [
            {
              name: 'Museum Visit',
              type: 'Art',
              duration: 3,
              details: {
                museum: {
                  name: 'The Louvre',
                  location: {
                    address: 'Rue de Rivoli',
                    city: 'Paris',
                    country: 'France',
                  },
                  exhibits: [
                    {
                      name: 'Mona Lisa',
                      artist: 'Leonardo da Vinci',
                      description: 'Iconic portrait painting',
                      audio_guide: true,
                    },
                    {
                      name: 'Winged Victory of Samothrace',
                      artist: null,
                      description:
                        'Ancient Greek statue of Nike, the goddess of victory',
                      audio_guide: true,
                    },
                  ],
                },
                guide: {
                  name: 'Francois',
                  language: 'French',
                  rating: 4.8,
                },
              },
            },
            {
              name: 'Cultural Show',
              type: 'Music and Dance',
              duration: 2,
              details: {
                venue: {
                  name: 'Moulin Rouge',
                  location: {
                    address: '82 Boulevard de Clichy',
                    city: 'Paris',
                    country: 'France',
                  },
                },
                performers: [
                  {
                    name: 'Mireille Mathieu',
                    type: 'Chanson singer',
                  },
                  {
                    name: "Ballet de l'Opéra National de Paris",
                    type: 'Classical ballet company',
                  },
                ],
                guide: {
                  name: 'Sophie',
                  language: 'English',
                  rating: 4.6,
                },
              },
            },
          ],
        },
      },
    })
  })

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
