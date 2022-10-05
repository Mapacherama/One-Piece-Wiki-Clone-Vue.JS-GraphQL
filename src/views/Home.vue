<template lang="pug">
#Home
  header
    img.logo(src='https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2022/07/One-Piece-Symbol.png')
    h1 {{ pjson.name }}
    p {{ pjson.description }}
    a(href="https://github.com/Mapacherama", target="_blank") Github
</template>

<script>
import gql from 'graphql-tag'
import pjson from '../../package.json'

export default {
  name: 'Home',
  data() {
    return {
      pjson,
    }
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    listOfCharacters: gql`query {
      listCharacters {
        name
      }
    }`,
  },
  methods: {
    async addTag() {
      // Call to the graphql mutation
      const result = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation {
          
          }
        }`,
        // Parameters
        variables: {
          label: this.newTag,
        },
      })
    }
  }
}
</script>

<style lang="scss">
#Home {
  .logo {
    max-width: 400px;
    margin: 30px 0;
    background: #ffffff;  
  }
  header{
    color: $primary
  }

  a{
    color: rgb(55, 37, 158);
  }

}

</style>
