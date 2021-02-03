    const app = {
        data() {
            return {
                name: 'Athipat Pingwong',
                job: 'IT Student',
                head1: 'Year',
                head2: 'Credit',
                head3: 'Grade',
                data1: '2nd',
                data2: '51',
                data3: '2',
                left: 'dislike',
                right: 'like',
                image: '/images/profile.png'
            }
        }

    }
   const mountedApp = Vue.createApp(app).mount('#app')