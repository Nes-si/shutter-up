<template lang="pug">
  .about
    .about-title
      | About

    .about-item
      .about-image
        img(src="~assets/images/about-studio-1.jpg" v-on:load="onImgLoaded")
      .about-copy
        | THE STUDIO
        .about-largeText.about-margin-1vw
          | There are a lot of still life, product and fashion photography studios in New York City.
        .about-text.about-margin-5vw
          | The distinction enjoyed by Doug Holt’s Commercial Photography Studio lies in the fact that the Studio demands energy and collaboration. More than just a product photography studio, art direction, styling and retouching can be done in-house (by arrangement).

    .about-item-image
      img(src="~assets/images/about-studio-2.jpg" v-on:load="onImgLoaded")

    .about-item
      .about-copy
        .about-text
          | You’ll notice, no one spends much time on my comfortable couches. Everyone is standing close to the Set, looking at the shot being taken, discussing what is appearing on the digital monitors; focusing together to capture one excellent image, after another, after another.
      .about-image
        img(src="~assets/images/about-studio-3.jpg" v-on:load="onImgLoaded")

    .about-item-image
      img(src="~assets/images/about-studio-4.jpg" v-on:load="onImgLoaded")

    .about-item
      .about-image
        img(src="~assets/images/about-studio-5.jpg" v-on:load="onImgLoaded")
      .about-copy
        .about-text
          | The studio collaborates with graphics designers, web engineers and social media experts, stylists, models, agenices as well as advertising and marketing professionals. We produce in-studio and on-location photo shoots as well as commercials and documentaries.
        .about-largeText.about-margin-5vw
          | And in the end, we just have FUN!

    .about-item-image
      img(src="~assets/images/about-studio-6.jpg" v-on:load="onImgLoaded")


    .about-item
      .about-copy
        .about-largeText
          | Doug Holt has 15 years experience as a professional photographer.
        .about-text.about-margin-5vw
          | Coming to the calling after several years as a risk analyst on Wall St. His career’s arc fuses good business sense with a talent for enhancing luxury brands and is apparent in the long client list of Doug Holt Photography.
      .about-image
        img(src="~assets/images/about-studio-7.jpg" v-on:load="onImgLoaded")

    .about-item-image
      img(src="~assets/images/about-studio-8.jpg" v-on:load="onImgLoaded")

    .clients
      .clients-column
        .clients-item
          .clients-letter
            | SELECTED CLIENTS
      .clients-column
        .clients-item
          .clients-letter
            | A
          span Adriana Castro
          span Adriana Castro
          span Aimee Kestenberg
          span Alison Brod Communications
          span Allure
          span Amy Conway

        .clients-item
          .clients-letter
            | B
          span B Low the Belt
          span Bajra Silk & Cashmere
          span Be & D Design
          span Behrman Communications
          span BonFaire
          span Boots USA
          span Bottletops
          span Brand Value Advisors
          span Butter and Eggs
          span by Kilian USA

        .clients-item
          .clients-letter
            | C
          span Carnegie Fabrics
          span Carson Street
          span Casadei
          span Casio
          span Charles Pavarini III Design Associates
          span Chic Child
          span Clara Kasavina
          span Claudio Ciuti
          span Clos-ette
          span Clutch Bags
          span Coye Nokes
          span Crosby Wright Marketing and PR
          span Cynthia Desser
          span Cynthia Gale

        .clients-item
          .clients-letter
            | D
          span Dan Nelson – Vision Design
          span Dareen Hakim
          span Details
          span Diane Young Cosmetics

        .clients-item
          .clients-letter
            | E
          span Elle
          span Emilia Fanjul Communications Corp
          span Esquire

        .clients-item
          .clients-letter
            | F
          span Folley + Corrina
          span Forbes

      .clients-column
        .clients-item
          .clients-letter
            | G
          span Gauthier Jewelry
          span Genetech Building Systems
          span Glamour
          span Google
          span GQ

        .clients-item
          .clients-letter
            | H
          span Halston
          span Hammitt
          span Hayden Harnett

        .clients-item
          .clients-letter
            | I
          span Isharya
          span Ivy Kirzhner

        .clients-item
          .clients-letter
            | J
          span Jenny Bird
          span Joanna Maxham
          span Joy Gryson

        .clients-item
          .clients-letter
            | K
          span Katherine Kwei
          span Konplott
          span Kooba

        .clients-item
          .clients-letter
            | L
          span Land Rover
          span Laura B
          span Laura Geller Cosmetics
          span Lionette by Noa Sade
          span Liquid Metal

        .clients-item
          .clients-letter
            | M
          span Madeline Weinrib
          span Marriott
          span Missoni

        .clients-item
          .clients-letter
            | N
          span Nanette Lepore
          span Noon by Noor

        .clients-item
          .clients-letter
            | O
          span Oakley

      .clients-column
        .clients-item
          .clients-letter
            | P
          span PepperCom PR
          span Peter Margonelli Studios
          span Porcelanosa Tiles and Bathroom

        .clients-item
          .clients-letter
            | R
          span Ralph Lauren
          span Ramy Brook
          span Robb Report
          span Robert Lee Morris Jewelry
          span Rolls Royce

        .clients-item
          .clients-letter
            | S
          span Sergio Rossi
          span Shoshanna
          span Side Design
          span Siren PR
          span Snapping Turtle Kids
          span Strategic Hotels and Resorts
          span SuperSmile
          span Sydney Salerno Jewelry

        .clients-item
          .clients-letter
            | T
          span Tamara Magel Home Inc
          span Tecno Spa
          span The Armoury
          span The New York Times
          span The New Yorker
          span Tibi
          span Tocca
          span Town and Country

        .clients-item
          .clients-letter
            | U
          span United Nations

        .clients-item
          .clients-letter
            | V
          span Verizon
          span Versace
          span Viacom + Nickelodeon
          span Vogue

        .clients-item
          .clients-letter
            | W
          span W Magazine
</template>

<script type="text/babel">
  import {onLoad} from 'ducks/nav';
  import {store} from 'index';
  
  
  //images on page
  const IMG_CNT = 8;
  
  export default {
    name: "AboutComponent",
    
    data () {
      return {
        imgLoaded: 0
      }
    },
    
    methods: {
      onImgLoaded () {
        this.imgLoaded++;
        if (this.imgLoaded == IMG_CNT)
          store.dispatch(onLoad(100));
        else
          store.dispatch(onLoad(this.imgLoaded * 100 / IMG_CNT));
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .about {
    width: 100%;
    height: 100%;
    background: white;

    overflow-y: scroll;

    padding: 0 10% 11vw;

    &-title {
      margin-top: 14vw;

      font-size: 2.2vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 2px;
      line-height: 3vw;

      text-align: center;
    }

    &-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      margin-top: 11vw;

      font-family: 'Marvel', sans-serif;
      font-weight: bold;
      font-size: 1.25vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.55px;
      line-height: 1.35vw;

      &:first-child {
        margin-top: 165px;
      }

      img {
        width: 100%;
      }
    }

    &-item-image {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;

      margin-top: 140px;

      padding-left: 24%;

      img {
        width: 100%;
      }
    }

    &-image,
    &-copy {
      flex: 0 0 40%;
    }

    &-largeText {
      font-family: 'Work Sans', sans-serif;
      font-weight: 400;
      font-size: 2vw;
      line-height: 2.5vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 2px;
    }

    &-text {
      font-family: 'Work Sans', sans-serif;
      font-weight: 400;
      font-size: 1.55vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1px;
      line-height: 2vw;
    }

    &-margin-1vw {
      margin-top: 1vw;
    }

    &-margin-5vw {
      margin-top: 5vw;
    }
  }

  .clients {
    margin-top: 165px;
    border-top: 1px solid rgba(0,0,0,0.24);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &-column {
      flex: 1;

      &:first-child {
        flex: 0 0 25%;
      }
    }

    &-item {
      margin-top: 1vw;

      display: flex;
      flex-flow: column nowrap;
    }

    &-letter {
      font-family: 'Marvel', sans-serif;
      font-weight: bold;
      font-size: 1.1vw;
      line-height: 1.25vw;
      color: rgba(0,0,0,0.87);
      letter-spacing: 1.55px;

      margin-bottom: 1vw;
    }

    span {
      font-size: 0.9vw;
      color: rgba(0,0,0,0.54);
      letter-spacing: 0;
      line-height: 1.45vw;
    }
  }
</style>
