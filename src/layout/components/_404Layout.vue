<template>
  <div class="bg-white">
    <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <img
        class="mx-auto h-10 w-auto sm:h-12"
        src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600"
        alt="Your Company"
      />
      <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <p class="text-base font-semibold leading-8 text-primary-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          This page does not exist
        </h1>
        <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 class="sr-only">Popular pages</h2>
        <ul role="list" class="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
          <li v-for="(link, linkIdx) in links" :key="linkIdx" class="relative flex gap-x-6 py-6">
            <div
              class="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10"
            >
              <component :is="link.icon" class="h-6 w-6 text-primary-600" aria-hidden="true" />
            </div>
            <div class="flex-auto">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">
                <a :href="link.href">
                  <span class="absolute inset-0" aria-hidden="true" />
                  {{ link.name }}
                </a>
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-600">{{ link.description }}</p>
            </div>
            <div class="flex-none self-center">
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </li>
        </ul>
        <div class="mt-10 flex justify-center">
          <a href="/" class="text-sm font-semibold leading-6 text-primary-600">
            <span aria-hidden="true">&larr;</span>
            Back to home
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { BookOpenIcon, QueueListIcon } from '@heroicons/vue/24/solid'

const links = [
  {
    name: 'Create an account',
    href: '/signin',
    description: 'Join us now and enjoy managing your expenses',
    icon: BookOpenIcon
  },
  {
    name: 'Dashboard',
    href: '/',
    description: 'Continue managing your expenses with us',
    icon: QueueListIcon
  }
]
</script>
