<template>
  <div class="profile">
    <div class="profile__contents">
      <div class="profile__header">
        <img
          class="profile__avatar"
          src="/img/profile/nakayama.jpg"
          alt=""
        >
        <div class="profile__name">
          <div class="profile__full-name">
            <span class="profile__name-sei">中山</span>
            <span class="profile__name-mei">勝則</span>
          </div>
          <div class="profile__kana">
            <span class="profile__name-sei">Katsunori</span>
            <span class="profile__name-mei">Nakayama</span>
          </div>
        </div>
      </div>
      <div class="profile__body">
        <p>
          神奈川県出身、海の近くで育ちましたが泳げません。<br>
          １９８９年１２月２６日生まれ。『そらまる』が愛称の声優さんと同じ生年月日なのでサイト名をそらまるにしました。ただのアニメオタクです。
        </p>
        <p>
          中学の入学祝いで買ってもらったPCが楽しく、その頃からWeb制作をはじめてはや18年。メインはCSS、Vue.jsやデザインをやっています。
        </p>
        <p>
          現在はフリーのWebデザイナーです。お仕事のご依頼はメールフォームよりご連絡ください。
        </p>
      </div>
    </div>

    <img
      class="profile__cloud"
      src="/img/profile/cloud.png"
      alt=""
    >
  </div>
</template>


<script>
</script>


<style lang="scss">
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 90vh;

  &__contents {
    display: flex;
    flex-direction: row-reverse;
  }

  &__header {
    display: flex;
    flex-direction: row;
    writing-mode: vertical-rl;
  }

  &__avatar {
    border-radius: 1.25rem;
    width: 4.5rem;
    margin-bottom: 1.5rem;
  }

  &__name {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  &__name-sei {
    margin-bottom: 0.625em;
  }

  &__name-mei {
  }

  &__full-name {
    font-size: 20px;
    letter-spacing: 0.4em;
    height: 100%;
  }

  &__kana {
    font-size: 10px;
    height: 100%;
  }

  &__body {
    writing-mode: vertical-rl;
    line-height: 2.125;
    letter-spacing: 0.2em;
    p {
      text-align: justify;
      text-justify: inter-ideograph;
      height: 18rem;
      margin: 0 2.25rem;
    }
  }

  &__cloud {
    position: absolute;
    right: -6rem;
    bottom: -10rem;
    height: 16rem;
  }
}
</style>
