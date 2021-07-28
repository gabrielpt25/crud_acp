<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Editar Produto</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" class="form-control" v-model="produto.nome">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Preço</label>
                                    <input type="text" class="form-control" v-model="produto.preco">
                                </div>
                            </div>

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Código</label>
                                    <input type="text" class="form-control" v-model="produto.codigo">
                                </div>
                            </div>

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Categoria</label>
                                    <input type="text" class="form-control" v-model="produto.categoria">
                                </div>
                            </div>

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Status</label>
                                    <input type="text" class="form-control" v-model="produto.status">
                                </div>
                            </div>
                        
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Editar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"update-produto",
    data(){
        return {
            produto:{
                nome:"",
                preco:"",
                codigo:"",
                categoria:"",
                status:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showProduto()
    },
    methods:{
        async showProduto(){
            await this.axios.get(`/api/produto/${this.$route.params.id}`).then(response=>{
                const { nome, preco, codigo, categoria, status } = response.data
                this.produto.nome = nome
                this.produto.preco = preco
                this.produto.codigo = codigo
                this.produto.categoria = categoria
                this.produto.status = status
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/produto/${this.$route.params.id}`,this.produto).then(response=>{
                this.$router.push({name:"produtoList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>