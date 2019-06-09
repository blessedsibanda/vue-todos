<template>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Done</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(todo, index) in todos" :key="index">
                <td>{{todo.action}}</td>
                <td>
                    <input @click="toggleTodo(todo)" type="checkbox" v-model="todo.done" >
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    computed: {
        ...mapGetters({ 'todos' :'filteredTodos'})
    },
    methods: {
        ...mapMutations(['toggleTodo'])
    }
}
</script>

<style>

</style>
