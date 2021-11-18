import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'
import Justhome from './Justhome'
import CreateHomeslide from './createHomeslide/createHomeslide'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Justhome} />
            <Route path="/product" exact component={isAdmin ? Products  : NotFound} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/admin/create_homeslide" exact component={isAdmin ? CreateHomeslide : NotFound} />
            <Route path="/admin/edit_homeslide/:id" exact component={isAdmin ? CreateHomeslide : NotFound} />

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
