<script setup>
  import { computed, defineProps } from 'vue'
  // import { CheckIcon } from '@heroicons/vue/solid'
  import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/vue'

  // Define las propiedades
  const props = defineProps({
    modelValue: {type: Object},
    items: {
      type: Array,
      required: true,
    },
    title:{
      type: String,
      default:'title'
    },
    subTitle:{
      type: String,
      
    },
    keyItem:{
      type: String,
      default:'id'
    },
  })

  const query = ref('')
  const selectedItems = ref(props.modelValue)
  const filteredItems = computed(() =>
    query.value === ''
      ? props.items
      : props.items.filter((item) => {
          return item[props.title].toLowerCase().includes(query.value.toLowerCase())
        })
  )

  const getTitleBySubtitle = (value) => {
    const item = props.items.find((item) => item[props.keyItem] === value)
    return item ? item[props.title] : ''
  }
</script>


<template>
  <div>
    <Combobox as="div" v-model="selectedItems">
      <div class="relative mt-2">
        <ComboboxInput class="w-full  rounded-md  bg-white  py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
          @change="query = $event.target.value" 
          :display-value="() => getTitleBySubtitle(modelValue)"
        />
        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <div class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
            <Icon name="fa6-solid:angles-down" color="black" class="h-4 w-4"/>
          </div>
        </ComboboxButton>
  
        <ComboboxOptions v-if="filteredItems.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ComboboxOption v-for="item in filteredItems" :key="item.username" :value="item" as="template" v-slot="{ active }" @click="$emit('update:modelValue', item[keyItem])">
            <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
              <div class="flex">
                <span :class="['truncate', modelValue == item[keyItem] && 'font-semibold']">
                  {{ item[title] }}
                </span>
                <span v-if="subTitle" :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                  {{ item[subTitle] }}
                </span>
              </div>

              <span v-if="modelValue == item[keyItem]" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                x
                <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>
  </div>
</template>