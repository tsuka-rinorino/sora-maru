<template>
  <div class="product">
    <div class="product__list">
      <div
        v-for="item in itemsSort"
        :key="item.id"
        class="product__item"
      >
        <a
          class="product__link"
          :href="item.url ? item.url : null"
        >
          <div class="product__img-outer">
            <img
              class="product__img"
              :src="item.img"
              alt=""
            >
          </div>
          <div class="product__body">
            <div class="product__title">
              {{ item.title }}
            </div>
            <div class="product__footer">
              <div class="product__tags">
                <div
                  v-for="tag in item.tags"
                  :key="tag"
                  class="product__tag"
                >
                  {{ tag }}
                </div>
              </div>
              <div class="product__date">
                {{ item.date | moment }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment';

export default {
  filters: {
    moment(date) {
      return moment(date).format('YYYY-MM');
    },
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Illustheme',
          img: '/img/product/illustheme.jpg',
          url: 'https://tsuka-rinorino.github.io/illustheme/',
          tags: [
            'デザイン',
            'コーディング',
          ],
          date: '201803',
        }, {
          id: 2,
          title: 'CDLPT',
          img: '/img/product/cdlpt.jpg',
          url: 'https://tsuka-rinorino.github.io/cdlpt/',
          tags: [
            'デザイン',
            'コーディング',
          ],
          date: '201803',
        }, {
          id: 3,
          title: '青春は白百合の花束',
          img: '/img/product/shirayurinohanataba.jpg',
          url: 'https://www.amazon.co.jp/%E9%9D%92%E6%98%A5%E3%81%AF%E7%99%BD%E7%99%BE%E5%90%88%E3%81%AE%E8%8A%B1%E6%9D%9F-%E7%99%BE%E5%90%88%E5%B0%8F%E8%AA%AC-%E7%B6%BE%E5%8A%A0%E5%A5%88-ebook/dp/B07GR7M6MQ/ref=sr_1_2?qid=1582541653&s=digital-text&sr=1-2',
          tags: [
            'ロゴ',
            'デザイン',
          ],
          date: '201808',
        }, {
          id: 4,
          title: 'ぼくらは吠える弱い犬だから',
          img: '/img/product/bokurahahoeru.jpg',
          url: 'https://www.amazon.co.jp/%E3%81%BC%E3%81%8F%E3%82%89%E3%81%AF%E5%90%A0%E3%81%88%E3%82%8B%E5%BC%B1%E3%81%84%E7%8A%AC%E3%81%A0%E3%81%8B%E3%82%89-%E7%99%BE%E5%90%88%E5%B0%8F%E8%AA%AC-%E7%B6%BE%E5%8A%A0%E5%A5%88-ebook/dp/B07JNS8KCH/ref=sr_1_6?qid=1582541653&s=digital-text&sr=1-6',
          tags: [
            'ロゴ',
            'デザイン',
          ],
          date: '201810',
        }, {
          id: 5,
          title: 'アナタコンプレックス',
          img: '/img/product/anatacomplex.jpg',
          url: 'https://www.amazon.co.jp/%E3%82%A2%E3%83%8A%E3%82%BF%E3%82%B3%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9-%E7%99%BE%E5%90%88%E5%B0%8F%E8%AA%AC-%E7%B6%BE%E5%8A%A0%E5%A5%88-ebook/dp/B07LGV8N4T/ref=sr_1_7?qid=1582541653&s=digital-text&sr=1-7',
          tags: [
            'ロゴ',
            'デザイン',
          ],
          date: '201812',
        }, {
          id: 6,
          title: '空の器になに注ぐ？',
          img: '/img/product/karanoutuwaninanisosogu.jpg',
          url: 'https://www.amazon.co.jp/%E7%A9%BA%E3%81%AE%E5%99%A8%E3%81%AB%E3%81%AA%E3%81%AB%E6%B3%A8%E3%81%90%EF%BC%9F-%E7%99%BE%E5%90%88%E5%B0%8F%E8%AA%AC-%E7%B6%BE%E5%8A%A0%E5%A5%88-ebook/dp/B07R8LJKTJ/ref=sr_1_9?qid=1582541653&s=digital-text&sr=1-9',
          tags: [
            'ロゴ',
            'デザイン',
          ],
          date: '201904',
        }, {
          id: 7,
          title: 'Contentful',
          img: '/img/product/contentful.png',
          url: 'https://tsuka-rinorino.github.io/contentful/docs/',
          tags: [
            'コーディング',
            'サンプル',
          ],
          date: '202005',
        }, {
          id: 8,
          title: 'Vue.js TypeScript サンプル',
          img: '/img/product/vue.png',
          url: 'https://github.com/tsuka-rinorino/vue-typescript',
          tags: [
            'コーディング',
            'サンプル',
          ],
          date: '202005',
        }, {
          id: 9,
          title: 'Vue.js 単体テストサンプル',
          img: '/img/product/unit-test.png',
          url: 'https://github.com/tsuka-rinorino/vue-unit-test',
          tags: [
            'コーディング',
            'サンプル',
          ],
          date: '202005',
        },
      ],
    };
  },
  computed: {
    itemsSort() {
      const { items } = this;

      return items.sort((a, b) => {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      });
    },
  },
};
</script>


<style lang="scss">
.product {
  $e: &;
  width: 608px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
    width: 272px;
  }

  &__link {
    display: block;
    transition: $transition-base;
    overflow: hidden;
    border-radius: 0.4rem;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.1),
                0px 2px 2px 0px rgba(0, 0, 0, 0.07),
                0px 1px 5px 0px rgba(0, 0, 0, 0.06);
    &:hover {
      cursor: default;
      text-decoration: none;
    }
    &[href] {
      &:hover {
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.1),
                    0px 5px 8px 0px rgba(0, 0, 0, 0.07),
                    0px 1px 14px 0px rgba(0, 0, 0, 0.06);
      }
    }
  }

  &__img-outer {
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    line-height: 1.4;
    height: calc(100% - 134px);
    padding: 0.25rem 1rem;
  }

  &__title {
    font-size: 0.8125rem;
    color: $oc-gray-8;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &__footer {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.125rem;
    margin-right: -0.125rem;
  }

  &__tag {
    border-radius: 0.25rem;
    border: 1px solid $oc-gray-3;
    background-color: $oc-gray-1;
    font-size: 0.625rem;
    line-height: 1;
    color: $oc-gray-6;
    margin-bottom: 0.325rem;
    padding: 0.25rem 0.325rem;
    & + #{$e}__tag {
      margin-left: 0.325rem;
    }
  }

  &__date {
    font-size: 0.625rem;
    font-weight: 500;
    color: #9aa2aa;
  }
}
</style>
