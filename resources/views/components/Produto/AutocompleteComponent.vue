<template>
    <div>
        <input type="text" v-model="keyword">
        <ul v-if="Produto.length > 0">
            <li v-for="produto in produtos" :key="produto.id" v-text="produto.nome"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: null,
            Produtos: []
        };
    },
    watch: {
        keyword(after, before) {
            this.getResults();
        }
    },
    methods: {
        getResults() {
            axios.get('/livesearch', { params: { keyword: this.keyword } })
                .then(res => this.Produtos = res.data)
                .catch(error => {});
        }
    }
}
</script>