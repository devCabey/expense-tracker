import DashboardView from '../views/DashboardView.vue'
import CardView from '../views/CardView.vue'
import EarningView from '../views/EarningView.vue'
import SpendingView from '../views/SpendingView.vue'
import WalletView from '../views/WalletView.vue'
import SettingsView from '../views/SettingsView.vue'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'

import {
  BanknotesIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  WalletIcon,
  CogIcon,
  ServerStackIcon
} from '@heroicons/vue/24/outline'

const routes = [
  {
    path: '/',
    component: DashboardView,
    meta: {
      label: 'Dashboard',
      icon: ServerStackIcon,
      layout: 'App'
    }
  },
  {
    path: '/earning',
    component: EarningView,
    meta: {
      label: 'Earning',
      icon: BanknotesIcon,
      layout: 'App'
    }
  },
  {
    path: '/spending',
    component: SpendingView,
    meta: {
      label: 'Spending',
      icon: CurrencyDollarIcon,
      layout: 'App'
    }
  },
  {
    path: '/cards',
    component: CardView,
    meta: {
      label: 'Cards',
      icon: CreditCardIcon,
      layout: 'App'
    }
  },
  {
    path: '/wallet',
    component: WalletView,
    meta: {
      label: 'Wallet',
      icon: WalletIcon,
      layout: 'App'
    }
  },
  {
    path: '/settings',
    component: SettingsView,
    meta: {
      label: 'Settings',
      icon: CogIcon,
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
