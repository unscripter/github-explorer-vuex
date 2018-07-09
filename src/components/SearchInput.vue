<template lang="html">
    <div id="search-input">
        <button style="margin: 8px;"
            :class="buttontext ? '' : 'icon'"
            @click="$emit('search')"
        >{{ buttontext }} <i class="fa fa-search" v-if="!buttontext"></i>
        </button>
        <input
            @focus="$emit('focus')"
            @input="handleInput"
            @keyup.enter="$emit('search')"
            aria-label="Search"
            type="search"
            :placeholder="placeholder" v-focus
        ></input>
    </div>
</template>

<script>
export default {
    props: ['buttontext', 'placeholder', 'searchtext'],
    methods: {
        handleInput(e) {
            const {value} = e.target;
            this.$emit('input', value);
        }
    },
directives: {
    focus: {
      // directive definition
      inserted: function (el) {
          console.log("Hello v-focus");
          debugger;
            el.focus()
      },
      bind (el, bind) {
          console.log("Hello v-focus bind");
          setTimeout(function() {
              debugger;
              console.log("Binded data is", bind);
          })
      }
    }
  }
}
</script>

<style lang="scss">
#search-input {
    width: 282px;
    position: relative;
    z-index: 1;
    background: #2c3e50;
    input {
        width: 80%;
        height: 40px;
        border-radius: 8px;
        background-color: #ffffff;
        font-family: GothamPro;
        font-size: 14px;
        border: 0;
        color: #8f9aa8;
        padding-left: 15px;
        padding-right: 55px;
        -webkit-appearance: none;
        &:focus {
            outline: 0;
        }
    }

    button {
        height: 40px;
        border-radius: 0 8px 8px 0;
        background-image: linear-gradient(to bottom, #a5de41, #55b130);
        box-shadow: inset 0 0.5px 0.5px 0 #e2ffce;
        border: none;
        position: absolute;
        right: 0;
        font-family: GothamPro-Bold;
        font-size: 14px;
        letter-spacing: 0.5px;
        text-align: center;
        color: #ffffff;
        padding: 0 20px;

        &.icon {
            padding: 0;
            width: 44px;
            font-size: 20px;
        }

        &:focus {
            outline: 0;
        }
    }
}
</style>
