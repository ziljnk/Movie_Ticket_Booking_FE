import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Homepage from '../views/homepage/homepage.vue'
import News from '@/views/news/news.vue';
import MovieDetails from '@/views/movieDetails/movieDetails.vue';
import MoviesAll from '@/views/movieAll/moviesAll.vue';
import ScheduleBooking from '@/views/scheduleBooking/scheduleBooking.vue';
import store from "@/store";
import { MutationTypes } from "@/store/mutation-types";
import ChooseSeat from '@/views/chooseSeat/chooseSeat.vue';
// const getUserData = async () => {
//   const sessionTokens = JSON.parse(localStorage.getItem("sessionTokens")!);
//   if (!sessionTokens) return;
//   const subject_id = sessionTokens;
//   const payload = {
//     subject_id,
//   };
//   const res = await store.dispatch(
//     MutationTypes.GET_CURRENT_USER,
//     payload
//   );
//   if (!res) return;
//   if (res.status === 200) {
//     store.commit("setUserData", res.data);
//     return
//   }
// };
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/movieDetails',
    name: 'movieDetails',
    component: MovieDetails
  },
  {
    path: '/moviesAll',
    name: 'moviesAll',
    component: MoviesAll
  },
  {
    path: '/scheduleBooking/:id',
    name: 'scheduleBooking',
    component: ScheduleBooking
  },
  {
    path: '/choose-seat/:id',
    name: 'chooseSeat',
    component: ChooseSeat
  },
  {
    path: '/movie-detail/:id',
    name: 'detailMovie',
    component: MovieDetails
  }
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: DashBoard,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
  return;
});

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     let userData:any = await getUserData();
//     userData = store.state.userData;
//     if (!userData) {
//       next({ path: "/" });
//       return;
//     }
//     userData = store.state.userData;
//     if (!userData) {
//       await getUserData();
//     }
//     userData = store.state.userData;
//   }
//   next();
// });

export default router
