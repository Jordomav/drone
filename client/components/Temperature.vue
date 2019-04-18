<template>
    <h1 :style="'color:' + getColor + ';'">{{toFahrenhet()}}&deg;</h1>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class Temperature extends Vue {
    @Prop({ required: true }) temp!: string;
    toFahrenhet () {
        return this.temp * 9 / 5 + 32;
    }

    get getColor() {
        if (this.toFahrenhet() > 80) { return 'red' }
        else if ((this.toFahrenhet() < 80) && (this.toFahrenhet() > 50)) { return 'yellow' }
        else if (this.toFahrenhet() <= 50) { return 'blue' }
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
