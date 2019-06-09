<template>
    <div class="bg-primary text-white text-center">
        <h1>{{username}}'s To Dos</h1>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(['username', ''])
    }
}
</script>