<template>
    <div class="bg-primary text-white text-center">
        <h1>{{username}}'s To Dos
            ( {{totalUnfinishedTodos}} remaining)
        </h1>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        ...mapState(['username']),
        ...mapGetters(['totalUnfinishedTodos']),
    }
}
</script>