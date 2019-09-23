import { Component, OnInit } from '@angular/core';


declare var $;
declare var ScrollReveal;
@Component({
  selector: 'app-corporate-page',
  templateUrl: './corporate-page.component.html',
  styleUrls: ['./corporate-page.component.scss']
})
export class CorporatePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {  
      $('.navbar-toggler').click(() => {
        console.log($(this).hasClass('collapsed'));
        if($('.navbar-toggler').hasClass('collapsed')){
          $('.top-wrapper').parent().addClass('collapsed-menu');
        } else {

          setTimeout(() => {
              $('.top-wrapper').parent().removeClass('collapsed-menu');
          },300)
          
        }
      })
      $('.pgs-click').click(() => {
        window.open("https://www.pgs-soft.com/wroclaw/#/", "_blank")
      })
      $('.home-click').click(() => {
        window.open("https://itunes.apple.com/us/app/burrow-at-home/id1304445713?mt=8", "_blank")
      })
      $('.sibi-click').click(() => {
        window.open("https://itunes.apple.com/us/app/sibi-see-it-buy-it/id1136039668?mt=8", "_blank")
      })
      $('.wonder-click').click(() => {
        window.open("https://wonderlandams.com/", "_blank")
      })
      $('.verity-click').click(() => {
        window.open("https://veritystudios.com/", "_blank")
      })
      $('.doman-click').click(() => {
        window.open("https://www.pgs-soft.com/wroclaw/#/", "_blank")
      })
      window['sr'] = ScrollReveal({ reset: true });

var slideUp = {
    distance: '10%',
    origin: 'bottom',
    duration: 2000,
    reset: false,
};

window['sr'].reveal('.reveal2', slideUp);


window['sr'].reveal('.reveal-left', {
  origin : 'left',
  distance: '10%',
  duration: 2000,
  reset: false
 });
 window['sr'].reveal('.reveal-right', {
  origin : 'right',
  distance: '10%',
  duration: 2000,
  reset: false
 });
 window['sr'].reveal('.dozens-img-1', {
  origin : 'right',
  distance: '10%',
  duration: 2000,
  reset: false
 });
 window['sr'].reveal('.dozens-img-2', {
  origin : 'right',
  distance: '10%',
  duration: 2000,
  reset: false
 });
 window['sr'].reveal('.dozens-img-3', {
  origin : 'right',
  distance: '10%',
  duration: 2000,
  reset: false
 });

        // $(".slick2").slick({
        //     slidesToShow: 3,
        //   slidesToScroll: 1,
        //   // centerPadding: '10',
        //   dots: false,
        //   centerMode: true,
        //   focusOnSelect: true,
        //   responsive: [
        //     {
        //       breakpoint: 1249,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 3,
        //       }
        //     },
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 3,
        //       }
        //     }
        //   ]
        // });
    });
  }

}
