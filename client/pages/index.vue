<template>
    <div class="container">
        <battery class="batter" :level="droneState.bat"/>
        <drone-data class="drone-data" :data="droneData()" />
        <temperature class="temp" :temp-low="droneState.templ" :temp-high="droneState.temph" />
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'nuxt-property-decorator';
import { DroneStateInterface } from "~/types/DroneStateInterface";
import Battery from '~/components/Battery.vue';
import Temperature from '~/components/Temperature.vue';
import DroneData from '~/components/DroneData.vue';

@Component({
    components: { Battery, Temperature, DroneData }
})
export default class Home extends Vue {
    $socket: any;
    droneState: DroneStateInterface = {
        bat: 0, templ: 0, temph: 0, pitch: 0, roll: 0,
        yaw: 0, vgx: 0, vgy: 0, vgz: 0, tof: 0, h: 0,
        baro: 0, time: 0, agx: 0, agy: 0, agz: 0
    };

    @Watch('droneState')
    droneData() {
        return {
            pitch: this.droneState.pitch,
            roll: this.droneState.roll,
            yaw: this.droneState.yaw,
            speedX: this.droneState.vgx,
            speedY: this.droneState.vgy,
            speedZ: this.droneState.vgz,
            distanceTraveled: this.droneState.tof,
            height: this.droneState.h,
            barometer: this.droneState.baro,
            flightTime: this.droneState.time,
            accelX: this.droneState.agx,
            accelY: this.droneState.agy,
            accelZ: this.droneState.agz
        }
    }

    mounted() {
        this.$socket.on('state', (message) => {
            this.droneState = message;
        })
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
        grid-template-columns: 250px 1fr 75px;
        grid-template-rows: 125px 1fr;
        grid-template-areas:
        "battery data temp"
        "battery controls temp";
        align-items: center;
        justify-items: center;
    }

    .battery {
        grid-area: battery;
    }

    .drone-data {
        grid-area: data;
    }

    .temp {
        grid-area: temp;
    }
</style>
