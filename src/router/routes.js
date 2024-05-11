import DashboardView from '../views/DashboardView.vue'
import CardView from '../views/CardView.vue'
import EarningView from '../views/EarningView.vue'
import SpendingView from '../views/SpendingView.vue'
import WalletView from '../views/WalletView.vue'
import SettingsView from '../views/SettingsView.vue'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  {
    path: '/',
    component: DashboardView,
    meta: {
      label: 'Dashboard',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/earning',
    component: EarningView,
    meta: {
      label: 'Earning',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/spending',
    component: SpendingView,
    meta: {
      label: 'Spending',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/cards',
    component: CardView,
    meta: {
      label: 'Cards',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/wallet',
    component: WalletView,
    meta: {
      label: 'Wallet',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/settings',
    component: SettingsView,
    meta: {
      label: 'Settings',
      icon: '',
      layout: 'App'
    }
  },
  {
    path: '/signin',
    component: SigninView,
    meta: {
      label: 'Login',
      icon: '',
      layout: 'Auth'
    }
  },
  {
    path: '/signup',
    component: SignupView,
    meta: {
      label: 'Register',
      icon: '',
      layout: 'Auth'
    }
  }
]

export default routes
