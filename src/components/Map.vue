<template>
<div>
    <div style="height: 78vh" id="mapContainer"></div>
</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    name: "Map",
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.map = L.map("mapContainer").setView([46.05, 11.05], 5);
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
    },
    onBeforeUnmount() {
        if (this.map) {
            this.map.remove();
        }
    },

}
</script>

<style scoped>

</style>
