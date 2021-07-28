<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"produtoAdd"}' class="btn btn-outline-success">+ Novo</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Produtos</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Preço</th>
                                    <th>Código</th>
                                    <th>Categoria</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody v-if="produtos.length > 0">
                                <tr v-for="(produto,key) in produtos" :key="key">
                                    <td>{{ produto.id }}</td>
                                    <td>{{ produto.nome }}</td>
                                    <td>{{ produto.preco }}</td>
                                    <td>{{ produto.codigo }}</td>
                                    <td>{{ produto.categoria }}</td>
                                    <td>{{ produto.status }}</td>
                                    <td>
                                        <router-link :to='{name:"produtoEdit",params:{id:produto.id}}' class="btn btn-outline-warning">&#9999;</router-link>
                                        <button type="button" @click="deleteProduto(produto.id)" class="btn btn-outline-danger">&#128465; Del</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">Nenhum produto cadastrado.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"produtos",
    data(){
        return {
            produtos:[]
        }
    },
    mounted(){
        this.getProdutos()
    },
    methods:{
        async getProdutos(){
            await this.axios.get('/api/produto').then(response=>{
                this.produtos = response.data
            }).catch(error=>{
                console.log(error)
                this.produtos = []
            })
        },
        deleteProduto(id){
            if(confirm("Deseja excluir?")){
                this.axios.delete(`/api/produto/${id}`).then(response=>{
                    this.getProdutos()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>