<template>
    <div class="battery">
        <div class="battery__progress" :style="'flex-basis:' + level + '%; background-color:' + getColor + ';'">
            {{ level + '%' }}
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class Battery extends Vue {
    @Prop({ required: true }) level!: number;

    get getColor() {
        if (this.level > 50) { return 'green' }
        else if ((this.level < 50) && (this.level > 25)) { return 'yellow' }
        else if (this.level < 25) { return 'red' }
    }
}
</script>

<style lang="scss" scoped>
    .battery {
        display: flex;
        height: 50px;
        width: 200px;
        border: 3px solid #000;
        .battery__progress {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
