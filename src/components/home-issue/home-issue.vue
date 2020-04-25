<template name="component-name">
  <section class="issue">
    <div class="container">
      <div class="issue__wrap">
        <div class="issue__img-box"
        >
        <img
          class="issue__img"
          alt=""
          src=""
        />
          <div class="block__overlay"></div>
        </div>
        <div class="issue__content-box">
          <div class="issue__content">
            <h3 class="issue__title">issue 22 - may 2020</h3>
            <router-link :to="'/'" class="issue__btn">
              <p>subscribe now</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
@import "home-issue.scss";
</style>

