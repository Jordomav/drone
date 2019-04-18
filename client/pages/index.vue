<template>
    <div class="container">
        <battery level="49"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Battery from '~/components/Battery.vue';

@Component({
    components: { Battery }
})
export default class Home extends Vue {
    $socket: any;

    mounted() {
        this.$socket.on('state', (message) => {
            console.log(message);
        })
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
    }
</style>
