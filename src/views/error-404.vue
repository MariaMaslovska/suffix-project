<template>
  <main class="container__error">
    <h1 class="heading">404</h1>
		<p class="subheading">Looks like the page you were looking for is no longer here</p>
  </main>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$title(`404 NOT FOUND`)
    };
  }
};
</script>

<style lang="scss">
.container__error {
  width: 100vw;
  height: 63.7vh;
  background-color: grey;
  margin-bottom: -100px;
  font-family: $font-base;
}
.heading{
    text-align: center;
    font-size: 9em;
    line-height: 1.3em;
    margin: 2rem 0 0.5rem 0;
    padding: 0;
    text-shadow: 0 0 1rem #fefefe;
}
.subheading{
    text-align: center;
    max-width: 480px;
    font-size: 1.5em;
    line-height: 1.15em;
    padding: 0 1rem;
    margin: 0 auto;
}
</style>
