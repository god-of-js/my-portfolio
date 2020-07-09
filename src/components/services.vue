<template>
    <div class="services border_radius m-2 pt-3 pl-3 pr-3 pb-4 box_shadow">
        <div class="service_avatar mb-3"> <i :class="icon"> </i></div>
        <div class="header text-center">{{name}} </div>
        <div class="text pt-4 text-center">
            {{text}}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        icon: String,
        text: String,
        
    }
}
</script>