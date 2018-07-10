<template lang="html">
    <div id="user-page" class="animated" style="animation-duration: .5s;">
        <profile
            :username="profile.login"
            :profile="profile"
        ></profile>
        <div class="repo-list">
            <div class="repo-list-header">POPULAR REPOSITORIES</div>
            <list-transition>
                <repo-item
                    v-for="(repo, index) in repos"
                    :repo="repo" :key="repo.full_name"
                    :data-index="index"
                    :profileUrl="profile.html_url"
                ></repo-item>
            </list-transition>
        </div>
    </div>
</template>

<script>
import Profile from '@/components/Profile';
import RepoItem from '@/components/RepoItem';
import ListTransition from '@/components/ListTransition';
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            profile: 'getProfile',
            repos: 'getRepos'
        })
    },
    components: {
        Profile,
        RepoItem,
        ListTransition
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        this.fetchData();
    },
    methods: {
        ...mapActions([
            'setUserProfile',
            'setUserRepos',
            'triggerLoadAnimation',
            'triggerLoadAnimationDone',
            'requestFailed'
        ]),
        fetchData() {
            const { username } = this.$route.params;
            if (username !== this.profile.login) {
                this.loadUser(username);
            }
        },
        loadUser(username) {
            Promise.all([
                this.setUserProfile(username),
                this.setUserRepos(username)
            ]).then(() => {
                this.triggerLoadAnimationDone();
            }, () => {
                this.requestFailed();
            });
            this.triggerLoadAnimation();
        }
    }
}
</script>

<style lang="scss">
#user-page {
    background-color: #f5f5f5;
    padding-bottom: 20px;
}

.repo-list {
    padding: 15px;
    min-height: 100vh;

    .repo-list-header {
        color: #aeb6c0;
        font-family: GothamPro;
        font-size: 13px;
        letter-spacing: 0.6px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
}
</style>
