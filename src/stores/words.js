import { defineStore } from 'pinia';

const url = 'https://jsonplaceholder.typicode.com/posts';
const limit = 10;

export const useWordsStore = defineStore('wordsStore', {
    state: () => ({
        words: [],
        isLoading : false,
        error: null
    }),
    actions: {
        async getWords() {
            try {
                this.isLoading = true
                const res = await fetch(`${url}?_limit=${limit}`);
                const data = await res.json();
                localStorage.setItem('words', JSON.stringify(data));
                this.words = JSON.parse(localStorage.getItem('words'))
                this.isLoading = false
            } catch (error) {
                return this.error = error
            }
        }
    },
})