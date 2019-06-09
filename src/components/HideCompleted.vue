<template>
    <div class="form-group">
        <label class="form-control-label" for="hide-completed">Hide Completed Tasks
            <input type="checkbox" @click="toggleHideCompleted()" id="hide-completed">
        </label>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {    
    methods: {
        ...mapMutations(['toggleHideCompleted'])
    }
}
</script>

<style>

</style>
