<template>
    <main class="bg-white md:p-10 p-4">
        <h1 class="flex justify-center text-4xl mb-9 font-bold !text-black">Scholarship Winners</h1>
        <div v-if="winnersData?.data?.length" class="grid gap-4 flex-wrap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card v-for="winner in winnersData.data" :key="winner.id" @click="showDialog(winner)" class="mb-4 overflow-hidden group cursor-pointer">
                <template #header>
                    <div class="overflow-hidden">
                        <img :alt="winner.attributes.winnerName" :src="winner.attributes.winnerPhoto" class="group-hover:scale-110  w-full h-90 object-cover object-top transition-transform duration-300 ease-in-out" />
                    </div>
                </template>
                <template #title>{{ winner.attributes.winnerName }}</template>
                <template #content>
                    <p class="text-sm text-gray-500 mb-2 font-semibold">Winner Data: {{ formatDate(winner.attributes.wonAt) }}</p>
                    <p :title="winner.attributes.testimonialText" class="m-0 ellipsis-5" v-html="winner.attributes.testimonialText" />
                </template>
            </Card>
        </div>
        <Paginator @page="onPageChange" :rows="9" :totalRecords="winnersData?.meta?.pagination?.total" ></Paginator>
        <Dialog v-model:visible="visible" dismissableMask modal :header="activeWinner?.attributes.winnerName" class="w-11/12">
            <div class="flex flex-col gap-4">
                <div class="flex gap-4 md:flex-row flex-col">
                    <img :alt="activeWinner?.attributes.winnerName" :src="activeWinner?.attributes.winnerPhoto" class="md:w-80 h-auto shrink-0" />
                    <div class="w-full">
                        <p class="text-sm mb-2 font-semibold">{{ activeWinner?.attributes.scholarshipTitle }}</p>
                        <p class="text-sm mb-2 font-semibold">Winner Data: {{ formatDate(activeWinner?.attributes.wonAt) }}</p>
                        <p class="text-sm mb-2 font-semibold">Amount Won: {{ activeWinner?.attributes.amountWon }}$</p>
                        <iframe v-if="activeWinner?.attributes.testimonialVideo" :src="activeWinner?.attributes.testimonialVideo" frameborder="0" class="w-full h-[250px]"></iframe>
                    </div>
                </div>
                <p v-html="activeWinner?.attributes.testimonialText" class="text-sm" />
            </div>
        </Dialog>
    </main>
</template>

<script setup lang="ts">
import { formatDate } from '~/utility/date';
import type { pagination, WinnerItem, WinnersResponse } from '../types/index';
const runtimeConfig = useRuntimeConfig()

const page = ref(1)
const visible = ref(false)
const activeWinner = ref<WinnerItem | null>(null)

const showDialog = (winner: WinnerItem) => {
    activeWinner.value = winner
    visible.value = true
}

const onPageChange = (paginataion: pagination) => {
    page.value = paginataion.page + 1
}

const {data: winnersData} = await useAsyncData(
    () => fetch(
    `${runtimeConfig.public.baseUrl}/winner?page[number]=${page.value}&page[size]=12`
    )
    .then((response) => response.json() as Promise<WinnersResponse>)
    .then((response) => {
        return response;
    }),
    {
        watch: [page]
    })
</script>

<style lang="css" scoped>
.ellipsis-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>