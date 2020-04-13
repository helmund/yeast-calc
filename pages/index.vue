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
        <svg
          id="Ebene_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
          fill="currentColor"
          class="h-5 w-5 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            d="M77.6,10.9h-57c-2,0-3.6,1.6-3.6,3.6c0,0,0,0,0,0v65.2C17,87,23,93,30.3,93h37.6c7.4,0,13.3-6,13.3-13.3
                V14.5C81.2,12.5,79.6,10.9,77.6,10.9C77.6,10.9,77.6,10.9,77.6,10.9z M67.8,85.8H30.3c-3.4,0-6.1-2.7-6.1-6.1V30.2h0.1
                c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.3,0.5-0.4c0.2-0.2,0.3-0.3,0.4-0.5c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.2-0.7
                c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.3-0.4-0.4-0.5
                c-0.2-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.6-0.3h-0.1v-5.4H74v5.4l0,0c-0.9,0.4-1.6,1.1-1.9,1.9c-0.1,0.2-0.2,0.4-0.2,0.7
                c0,0.2,0,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0,0.2,0.1,0.4,0.2,0.7c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.4,0.4,0.5
                c0.2,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.4,0.2,0.6,0.3l0,0v49.5C74,83.1,71.3,85.8,67.8,85.8L67.8,85.8z M47.4,26.9
                c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2-0.1,3.6,1.5,3.7,3.5C47.5,26.8,47.5,26.8,47.4,26.9L47.4,26.9z
                    M36.9,26.9c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2-0.1,3.7,1.5,3.7,3.5c0,0,0,0,0,0L36.9,26.9z
                    M57.8,26.9c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2-0.1,3.7,1.5,3.7,3.5c0,0,0,0,0,0L57.8,26.9z
                    M68.3,26.9c0,2-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2-0.1,3.7,1.5,3.7,3.5c0,0,0,0,0,0L68.3,26.9z"
          />
        </svg>
      </div>
      <input
        id="dryYeast"
        v-model="dryYeastValue"
        name="dryYeast"
        class="form-input block w-full pl-10 pr-12 text-md leading-10 h-12"
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
        <svg
          id="Ebene_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
          fill="currentColor"
          class="h-5 w-5 text-gray-400"
        >
          <g transform="translate(0,-952.36218)">
            <path
              fill-rule="evenodd"
              d="M50.1,962.5c-0.2,0-0.4,0.1-0.7,0.2l-36,16c-0.7,0.3-1.2,1-1.2,1.8v44c0,0.8,0.5,1.5,1.2,1.8l36,16
        c0.5,0.2,1.1,0.2,1.6,0l36-16c0.7-0.3,1.2-1,1.2-1.8v-44c0-0.8-0.5-1.5-1.2-1.8l-36-16C50.8,962.5,50.5,962.4,50.1,962.5
        L50.1,962.5z M50.3,966.7l31.1,13.8l-31.1,13.8l-31.1-13.8L50.3,966.7z M16.3,983.5l32,14.2v39.6l-32-14.2V983.5L16.3,983.5z
            M84.3,983.5v39.6l-32,14.2v-39.6L84.3,983.5L84.3,983.5z"
            />
          </g>
        </svg>
      </div>
      <input
        id="freshYeast"
        v-model="freshYeastValue"
        class="form-input block w-full pl-10 pr-12 text-sm leading-10 h-12"
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

    <div class="py-4 flex justify-center items-center">
      <div class="mx-2">
        <img src="/icon-yeast-package.svg" class="w-12">
      </div>
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
          />
        </span>
      </div>
      <div class="mx-2">
        <img src="/icon-yeast-cube.svg" class="w-12">
      </div>
    </div>
    <div class="font-serif text-md my-4">
      <h2 class="text-xl border-b-2 border-frost inline">
        Info
      </h2>
      <p class="mt-2">
        In Rezepten ließt man immer von Trockenhefe oder von frischer Hefe, aber wie verhalten sich diese zueinander?
      </p>
      <p>Hier kannst du es schnell ausrechnen!</p>
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
