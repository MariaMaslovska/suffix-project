<template>
  <main>
    <ArticlesBaner />
    <section>
      <div class="container">
        <router-link :to="'/articles'" class="block__btn">
          <p>see all</p>
        </router-link>
        <router-link
          :to="{
            path: `articles?tag=${tag.data.tag}`,
            query: { tag: tag.data.tag }
          }"
          :key="tag.id"
          v-for="tag in tags"
          class="block__btn"
        >
          <p v-html="tag.data.name"></p>
        </router-link>

        <Loader v-if="loading" />
        <div class="block__wrap" v-else>
          <ul class="block__list">
            <ArticleItem
              v-bind="article"
              :key="article.id"
              v-for="article in filteredArticles"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ArticlesBaner from "@/components/articles-baner/articles-baner";
import ArticleItem from "@/components/article-item/article-item";
export default {
  name: "articles",
  data() {
    return {
      loading: true
    };
  },
  metaInfo() {
    return {
      title: this.$title("Articles")
    };
  },
  computed: {
    ...mapState("blog", ["tags", "filteredArticles"])
  },
  methods: {
    ...mapActions("blog", ["getArticlesByTag"])
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true;
    this.getArticlesByTag().then(() => {
      const el = this.tags.find(i => {
        return i.data.tag === to.query.tag;
      });
      const tagId = el && el.id ? el.id : null;
      this.getArticlesByTag(tagId);
      this.loading = false;
      next();
    });
  },
  created() {
    this.loading = true;
    this.getArticlesByTag().then(() => {
      const el = this.tags.find(i => {
        return i.data.tag === this.$route.query.tag;
      });
      const tagId = el && el.id ? el.id : null;
      if (tagId) {
        this.getArticlesByTag(tagId);
      }
      this.loading = false;
    });
  },
  components: {
    ArticlesBaner,
    ArticleItem
  }
};
</script>
