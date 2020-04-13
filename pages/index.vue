<template>
  <div class="mx-auto max-w-sm my-6 px-4">
    <h1 class="my-8 font-serif text-2xl">
      Wieviel
      <small class="font-medium">g</small>
      <span class="border-b-2 border-frost">
        <span v-if="!isActive">
          Trockenhefe
        </span>
        <span v-else>Frische Hefe</span>
      </span>
      sind wieviel <small class="font-medium">g</small>
      <span class="border-b-2 border-frost">
        <span v-if="!isActive">Frische Hefe</span>
        <span v-else>Trockenhefe</span>
      </span>?
    </h1>
    <div
      class="mt-1 relative rounded-md shadow-sm transform transition ease-in-out duration-200"
      :class="{'translate-y-26': isActive, 'translate-y-0': !isActive}"
    >
      <label for="dryYeast" class="absolute top transform -translate-y-1/2 pl-6 text-xs">
        Trockenhefe
      </label>
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-sm leading-5">
          $
        </span>
      </div>
      <input
        id="dryYeast"
        v-model="dryYeastValue"
        name="dryYeast"
        class="form-input block w-full pl-6 pr-12 text-md leading-10 h-12"
        placeholder="Trockenhefe"
        autocomplete="no"
        @input="updateFreshYeast"
      >
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-md leading-5">
          g
        </span>
      </div>
    </div>
    <div class="py-1 text-center text-3xl font-sans text-gray-500">
      =
    </div>
    <div
      class="mt-1 relative rounded-md shadow-sm  transform transition ease-in-out duration-200"
      :class="{'-translate-y-26': isActive, 'translate-y-0': !isActive}"
    >
      <label
        for="freshYeast"
        class="absolute top transform -translate-y-1/2 pl-6 text-xs"
      >Frische Hefe</label>
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-md leading-5">
          $
        </span>
      </div>
      <input
        id="freshYeast"
        v-model="freshYeastValue"
        class="form-input block w-full pl-6 pr-12 text-sm leading-10 h-12"
        placeholder="Frische Hefe"
        @input="updateDryYeast"
      >
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-sm leading-5">
          g
        </span>
      </div>
    </div>

    <div v-if="errorNaN" class="mt-6 mb-2 text-sm text-center text-red-700">
      Bitte geben Sie eine korrekte Zahl ein
    </div>

    <div class="py-4 flex justify-center">
      <div>
        <span
          class="relative inline-block flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
          role="checkbox"
          tabindex="0"
          :class="{'bg-tumbleweed': isActive, 'bg-gray-400': !isActive}"
          @click="toggle()"
          @keydown.space.prevent="toggle()"
        >
          <span
            class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200 "
            :class="{'translate-x-6': isActive, 'translate-x-0': !isActive}"
          >
            <span
              class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
              :class="{'opacity-100 ease-out duration-100': isActive, 'opacity-0 ease-in duration-200': !isActive}"
            >
              <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span
              class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity "
              :class="{'opacity-0 ease-out duration-100': isActive, 'opacity-100 ease-in duration-200': !isActive}"
            >
              <svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dryYeaser: '0',
      freshYeast: '0',
      freshYeastValue: '',
      dryYeastValue: '',
      isActive: false,
      errorNaN: false
    }
  },
  methods: {
    updateFreshYeast (event) {
      const a = event.target.value.replace(',', '.')
      if (!isNaN(a)) {
        const b = a * 3
        this.freshYeastValue = b.toLocaleString()
        this.errorNaN = false
      } else {
        this.errorNaN = true
      }
    },
    updateDryYeast (event) {
      const a = event.target.value.replace(',', '.')
      if (!isNaN(a)) {
        const b = a / 3
        this.dryYeastValue = b.toLocaleString()
        this.errorNaN = false
      } else {
        this.errorNaN = true
      }

      if (this.dryYeastValue === 7) {
        console.log('ein Paeckchen')
      }
    },

    toggle () {
      if (this.isActive === true) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    }
  }
}
</script>

<style>
</style>
