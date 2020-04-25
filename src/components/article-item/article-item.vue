<template>
  <li class="block__item">
    <div class="block__img-wrap">
      <img
        :src="data.image ? data.image[0] : ''"
        alt="article-image"
        class="block__img"
      />
      <div class="block__overlay"></div>
    </div>
    <div class="block__nav">
      <div class="block__date-wrap">
        <time
          :datetime="data.date"
          class="block__date date--small date--black "
        >
          {{ data.date | formatDate }}
        </time>
      </div>
      <div class="block__link-wrap">
        <!-- <router-link
          :to="{
            path: `articles?tag=${_getTag(data.tag)}`,
            query: { tag: _getTag(data.tag) }
          }"
          class="block__link link--small link--black"
        >
          <p v-html="data.link"></p>
        </router-link> -->
      </div>
    </div>
    <h2 class="block__title"><p v-html="data.title"></p></h2>
    <router-link :to="'/articles/' + data.slug" class="block__link link--black">
      <p>read more</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "article-item",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
