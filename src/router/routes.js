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
    layout: 'App',
    meta: {
      label: 'Dashboard',
      icon: ''
    }
  },
  {
    path: '/earning',
    component: EarningView,
    layout: 'App',
    meta: {
      label: 'Earning',
      icon: ''
    }
  },
  {
    path: '/spending',
    component: SpendingView,
    layout: 'App',
    meta: {
      label: 'Spending',
      icon: ''
    }
  },
  {
    path: '/cards',
    component: CardView,
    layout: 'App',
    meta: {
      label: 'Cards',
      icon: ''
    }
  },
  {
    path: '/wallet',
    component: WalletView,
    layout: 'App',
    meta: {
      label: 'Wallet',
      icon: ''
    }
  },
  {
    path: '/settings',
    component: SettingsView,
    layout: 'App',
    meta: {
      label: 'Settings',
      icon: ''
    }
  },
  {
    path: '/signin',
    component: SigninView,
    layout: 'Auth',
    meta: {
      label: 'Settings',
      icon: ''
    }
  },
  {
    path: '/signup',
    component: SignupView,
    layout: 'Auth',
    meta: {
      label: 'Settings',
      icon: ''
    }
  }
]

export default routes
