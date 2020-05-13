<template>
  <div class="profile">
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
        中学の入学祝いで買ってもらったＰＣが楽しく、その頃からＷｅｂ制作をはじめてはや１８年。メインはＣＳＳ、Ｖｕｅ．ｊｓやデザインをやっています。
      </p>
      <p>
        現在はフリーのＷｅｂデザイナーです。お仕事のご依頼は現在受け付けてません。
      </p>
    </div>
  </div>
</template>


<script>
</script>


<style lang="scss">
.profile {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  &__header {
    display: flex;
    flex-direction: row;
    writing-mode: vertical-rl;
    height: 18rem;
    margin-left: 1.5rem;
  }

  &__avatar {
    display: block;
    border-radius: 1.25rem;
    width: 72px;
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
    font-family: $font-family-serif;
    font-size: 20px;
    letter-spacing: 0.4em;
    height: 100%;
  }

  &__kana {
    font-size: 10px;
    font-weight: 500;
    color: #979ca1;
    height: 100%;
  }

  &__body {
    writing-mode: vertical-rl;
    *:last-of-type {
      margin-left: 0;
    }
    p {
      font-size: 0.8125rem;
      text-align: justify;
      text-justify: inter-ideograph;
      line-height: 2.425;
      letter-spacing: 0.125em;
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
