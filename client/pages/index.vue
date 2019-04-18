<template>
    <div class="container">
        <battery level="49"/>
        <temperature temp="50" />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Battery from '~/components/Battery.vue';
import Temperature from '~/components/Temperature.vue';

@Component({
    components: { Battery, Temperature }
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
        /*display: grid;*/
    }
</style>
