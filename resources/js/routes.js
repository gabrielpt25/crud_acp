const Welcome = () => import('../views/components/Welcome' /* webpackChunkName: "resource/js/components/welcome" */)
const ProdutoList = () => import('../views/components/produto/List.vue' /* webpackChunkName: "resource/js/components/produto/list" */)
const ProdutoCreate = () => import('../views/components/produto/Add.vue' /* webpackChunkName: "resource/js/components/produto/add" */)
const ProdutoEdit = () => import('../views/components/produto/Edit.vue' /* webpackChunkName: "resource/js/components/produto/edit" */)
const ProdutoSearch = () => import('../views/components/produto/AutocompleteComponent.vue' /* webpackChunkName: "resource/js/components/produto/AutocompleteComponent" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'produtoList',
        path: '/produto',
        component: ProdutoList
    },
    {
        name: 'produtoEdit',
        path: '/produto/:id/edit',
        component: ProdutoEdit
    },
    {
        name: 'produtoAdd',
        path: '/produto/add',
        component: ProdutoCreate
    },

    {
        name: 'produtoSearch',
        path: '/produto/search',
        component: ProdutoSearch
    }
]