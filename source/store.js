import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    upcomingEvent: {
        title: 'Mobile Sites Certification Study Jams: University of the Philippines Cebu',
        date: 'March 14, 2018 1:00-5:30 PM',
        venue: 'RM 302-306, UP Cebu',
        description: 'This event aims to certify developers with the Google Mobile Sites Certification. We will be holding the certification and exclusive in depth talks to assist in passing the certification in a limited number of schools. Join us now!',
        image: 'https://cdn.arnellebalane.com/images/gdg/about-us-bg.png'
    },

    events: [ {
        title: 'Women Tech Makers Cebu 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'It\'s International Womens Month! Google celebrates globally the Women Techmakers Event Series around International Women\'s Day. Women Techmakers events focus on a technical women audience, showcase female technical talent, and encourage attendees to network and empower each other in the field of technology. WTM events achieve these objectives by including event components that fall under the buckets: Technical, Community, Inspirational, Leadership. Below are examples of what these buckets could include, and by no means are an exhaustive list. We encourage you to be creative and consider the resources available when choosing what event components to include in your events.',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'Cloud Next Extended Cebu 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'GCP Next Extended in Cebu and join the largest gathering of the Google Cloud Platform community to explore the latest developments in cloud technology.',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'Firebase Summit 2018',
        date: 'TBA',
        venue: 'TBA',
        description: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'TensorFlow Dev Summit 2018',
        date: 'TBA',
        venue: 'TBA',
        description: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'Google Assistant Cebu Meetup 2018',
        date: 'TBA',
        venue: 'TBA',
        description: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'Campus Talks 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'This event is composed of talks and codelab sessions which aims to assist the students to be fully equipped with the latest trend of technology developed by Google fundamentally focusing on the programming and development field.',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'DevMeets 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'GDG DevMeets is the newest program of GDG Cebu to help developers learn more about specific technologies. Every 3rd Friday of the month, we will be doing a hands-on workshop on a specific technology.',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'Google I/O Extended Cebu 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'The event is composed of a series of keynotes, talks, Codelabs, and workshops organized by Google Developers Group Cebu (GDG Cebu), a non-profit group of amateurs and professionals in Cebu’s developer community who are passionate about Google technologies',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        title: 'GDG Cebu Devfest 2018',
        date: 'TBA',
        venue: 'TBA',
        description: 'The biggest Google tech conference in Cebu carefully crafted for you by GDG community! All about Android, Web and Cloud from the world experts',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    } ],

    team: [ {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Frances Marie Teves',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Emelie Diamante Anggoy',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Kim Bismark',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Franchette Camoro',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Julia Menchavez',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Rome Nicolas',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Maurice Jitty Marimon Villaester',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Ayrton Wyn Chrysler Adiong',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Francis Jigssy Galua',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Rhodchel Lhuven Marie Española',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Mark Robin',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Christian Alferez',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Ryan Viajedor',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Emmanuel Lodovice',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    }, {
        name: 'Kevin Calingacion',
        role: '',
        image: 'https://cdn.arnellebalane.com/images/gdg/gdgcebu-logo.png'
    } ]
};

const mutations = {};
const actions = {};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;
