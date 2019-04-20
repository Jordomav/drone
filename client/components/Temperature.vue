<template>
    <h1 :style="'color:' + getColor + ';'">{{averageTemp()}}&deg;</h1>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class Temperature extends Vue {
    @Prop({ required: true }) tempLow!: string;
    @Prop({ required: true }) tempHigh!: string;

    private averageTemp() {
        return (parseFloat(this.tempLow) + parseFloat(this.tempHigh)) / 2;
    }

    get getColor() {
        if (this.averageTemp() > 80) { return 'red' }
        else if ((this.averageTemp() < 80) && (this.averageTemp() > 50)) { return 'yellow' }
        else if (this.averageTemp() <= 50) { return 'blue' }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
</style>
