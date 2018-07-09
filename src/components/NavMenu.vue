<template>
    <div style="background-color: #2c3e50;">
      <div class="nav-menu">
        <search-input
                placeholder="Search by username..."
                v-model="searchText"
                @search="getUsers"
            ></search-input>
      </div>
      <div class="list-scroll">
            <div id="loading" v-if="searching">
                <div class="loading"></div>
            </div>
            <a class="user-item animated"
                @click="handleClick(user.login)"
                transition="fade"
                stagger="100"
                v-for="user in users" :key="user.login">
                <avatar
                    class="user-avatar"
                    :src="`https://avatars.githubusercontent.com/u/${user.id.split('-')[1]}`"
                ></avatar>
                <div class="user-info">
                    <div class="fullname">{{user.fullname || user.login}}</div>
                    <div class="username">{{user.login || user.fullname}}</div>
                </div>
            </a>
      </div>
    </div>
</template>

<script>
// import SearchInput from '@/components/SearchInput'
import api from '@/api'
// import Avatar from '@/components/Avatar'
export default {
    data() {
        return {
            searchText: '',
            users: [],
            searching: true,
        }
    },
    mounted() {
        this.$nextTick(this.getUsers);
    },
    props: ['showMenu'],
    methods: {
        getUsers() {
            this.searching = true;
            api('https://api.github.com/legacy/user/search/' +
                `${this.searchText || Math.random().toString(36).split('')[2]}%20sort:followers`)
            .then(data => data.users.slice(0, 15))
            .then(users => {
                this.users = users;
                this.searching = false;
            });
        }, 
        handleClick(username) {
            debugger;
            setTimeout(() => {
                this.$router.push({
                    name: 'USER_DETAIL',
                    params: {
                        username
                    }
                });
                this.$emit('showMenu', false);
            }, 300);
        },
    },
    components: {
        SearchInput: () => import('@/components/SearchInput'),
        Avatar: () => import('@/components/Avatar')
    }
    }
</script>
<style lang="scss">
    .nav-menu {
        height: 53px; line-height:53px; color: white;font-size: 20px;
    }
    #user-list {
        position: absolute;
        left: 0;
        top: 70px;
        right: 0;
        bottom: 0;
        overflow-y: scroll; /* has to be scroll, not auto */
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
    
    .user-item {
        display: flex;
        padding: 12px 15px;
        will-change: transform;

        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background-position: center center;
            background-size: cover;
            margin-right: 20px;
            background-color: rgba(255, 255, 255, 0.5);
        }

        .fullname {
            font-family: GothamPro-Medium;
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 9px;
        }

        .username {
            font-family: GothamPro;
            font-size: 12px;
            color: #8f9aa8;
        }
    }
    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loading {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: .25rem solid rgba(255,255,255,0.2);
    border-top-color: white;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}
</style>

