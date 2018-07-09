<template>
    <div style="color: white">
        <div :class="['footer-logo']">
            <span style="color: white"><i class="fa fa-github"></i><span id="version">0.1.26</span></span>
        </div>
        <div :class="['footer-author']">
            <span>
                Github Browse By: Amit Mundra
            </span>
        </div>
    </div>
</template>
<style lang="scss">

.footer-logo {
    padding: 10px;
    float: left;
    font-size: 20px;
}
.footer-author {
    font-size: 20px;
    padding: 10px;
    float: right;
     @media (max-width: 768px) {
       font-size: 15px;
    }
}
</style>
