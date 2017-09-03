Vue.component('header__portfolio', {
  template: 
    `
      <ul class="header__portfolio">
        <li v-for="item in portfolio">
          <a v-bind:href="item.url" class="js-object-fit" target="blank">
            <img v-bind:src="item.imageurl">
          </a>
        </li>
        <li></li>
      </ul>
    `,
    data() {
      return {
        portfolio:[
        {imageurl: 'img/portfolio_01.jpg', url: 'portfolio_01/index.html'},
        {imageurl: 'img/portfolio_02.jpg', url: 'portfolio_02/index.html'},
        {imageurl: 'img/portfolio_03.jpg', url: 'portfolio_03/index.html'},
        {imageurl: 'img/portfolio_04.jpg', url: 'portfolio_04/index.html'},
        {imageurl: 'img/portfolio_05.jpg', url: 'portfolio_05/index.html'}
        ]
      }
    }
  });

new Vue({
  el: '#app',
  data: {
    title: 'Alexander SND portfolio',
    email: 'snd.dnb@gmail.com'
  }
  
});