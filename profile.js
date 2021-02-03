    const app = {
        data() {
            return {
                name: 'Athipat Pingwong',
                job: 'IT Student',
                head1: 'Article',
                head2: 'Follower',
                head3: 'Rating',
                data1: 39,
                data2: 132,
                data3: 3.9,
                left: 'dislike',
                right: 'like',
                image: '/images/profile.png'
            }
        }

    }
   const mountedApp = Vue.createApp(app).mount('#app')