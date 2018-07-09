<template lang="html">
        <a class="repo-item" :href="repoLink" target="_blank">
        <repo-content :repo="repo"></repo-content>
        </a>
</template>

<script>
import RepoContent from './RepoContent';
export default {
    props: ['repo', 'profileUrl'],
    components: {
        RepoContent
    },
   computed: {
       repoLink() {
           debugger
           return this.profileUrl + '/' + this.repo.name;
       }
   }
}
</script>

<style lang="scss">
.repo-item {
    border-radius: 6px;
    background-color: #ffffff;
    border: solid 0.5px #e5e5e5;
    margin-bottom: 5px;
    display: block;
    text-decoration: none !important;
    overflow: hidden;
}
</style>
