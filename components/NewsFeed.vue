<template>
  <div>
    <h1>News Feed</h1>
    <ul>
      <li v-for="item in newsItems" :key="item.guid">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface RSSItem {
  guid: string;
  link: string;
  title: string;
}

const newsItems = ref<RSSItem[]>([]);

const fetchRSSFeed = async () => {
  try {
    const response = await axios.get('/api/rss');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, 'application/xml');
    const items = xmlDoc.querySelectorAll('item');
    const parsedItems: RSSItem[] = Array.from(items).map(item => ({
      guid: item.querySelector('guid')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
      title: item.querySelector('title')?.textContent || ''
    }));
    newsItems.value = parsedItems;
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(() => {
  fetchRSSFeed();
});
</script>

<style scoped></style>