<template>
    <div class="data">
        <div>
            <span class="header">Pitch</span>
            <span>{{ data.pitch }}</span>
        </div>
        <div>
            <span class="header">Roll</span>
            <span>{{ data.roll }}</span>
        </div>
        <div>
            <span class="header">Yaw</span>
            <span>{{ data.yaw }}</span>
        </div>
        <div>
            <span class="header">Speed X</span>
            <span>{{ data.speedX }}</span>
        </div>
        <div>
            <span class="header">Speed Y</span>
            <span>{{ data.speedY }}</span>
        </div>
        <div>
            <span class="header">Speed Z</span>
            <span>{{ data.speedZ }}</span>
        </div>
        <div>
            <span class="header">Distance</span>
            <span>{{ data.distanceTraveled }}</span>
        </div>
        <div>
            <span class="header">Height</span>
            <span>{{ data.height }}</span>
        </div>
        <div>
            <span class="header">Barometer</span>
            <span>{{ data.barometer }}</span>
        </div>
        <div>
            <span class="header">Time</span>
            <span>{{ data.flightTime }}</span>
        </div>
        <div>
            <span class="header">Accel. X</span>
            <span>{{ data.accelX }}</span>
        </div>
        <div>
            <span class="header">Accel. Y</span>
            <span>{{ data.accelY }}</span>
        </div>
        <div>
            <span class="header">Accel. Z</span>
            <span>{{ data.accelZ }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class DroneData extends Vue {
    @Prop({ required: true }) data!: object;
}
</script>

<style lang="scss" scoped>
    .data {
        display: flex;
        div {
            border: 1px solid #000;
            display: flex;
            width: 75px;
            flex-direction: column;
            align-items: center;
            .header {
                border-bottom: 1px solid #000;
            }
        }
    }
</style>
