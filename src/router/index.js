import Vue from 'vue'
import Router from 'vue-router'
import OpenHours from '@/components/onboard/OpenHours'
import ReviewData from '@/components/onboard/ReviewData'
import UploadImages from '@/components/onboard/UploadImages'
import SocialConnect from '@/components/onboard/SocialConnect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/review',
      name: 'ReviewData',
      component: ReviewData
    },
    {
      path: '/open-hours',
      name: 'OpenHours',
      component: OpenHours
    },
    {
      path: '/images',
      name: 'UploadImages',
      component: UploadImages
    },
    {
      path: '/connect',
      name: 'SocialConnect',
      component: SocialConnect
    },
    {
      path: '/',
      redirect: 'open-hours'
    }
  ]
})