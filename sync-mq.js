// Sync MQ by Frank LANG
// Live demo: https://jsfiddle.net/frontenddeveloper/ws54xrhr/20/

// JS dependencies: enquire.js
// http://wicky.nillia.ms/enquire.js/

// Sync MQ global vars
  // Bootstrap 3 media queries breakpoints variables values
  // https://github.com/twbs/bootstrap-sass/blob/3.3-stable/assets/stylesheets/bootstrap/_variables.scss#L286
  var bs_screen_xs_min = '480';
      bs_screen_sm_min = '768';
      bs_screen_md_min = '992';
      bs_screen_lg_min = '1200';
      bs_screen_xs_max = bs_screen_sm_min - 1;
      bs_screen_sm_max = bs_screen_md_min - 1;
      bs_screen_md_max = bs_screen_lg_min - 1;

  // Sync MQ media queries aliases
  // (as seen on Bootstrap documentation: http://getbootstrap.com/css/#grid-media-queries)
      bpMobile = 'screen and (max-width: '+ bs_screen_sm_max +'px)';
      bpSmartphone = 'screen and (max-width: '+ bs_screen_xs_max +'px)';
      bpTablet = 'screen and (min-width: '+ bs_screen_sm_min +'px) and (max-width: '+ bs_screen_sm_max +'px)';
      bpTabletUp = 'screen and (min-width: '+ bs_screen_sm_min +'px)';
      bpDesktop = 'screen and (min-width: '+ bs_screen_md_min +'px)';
      bpSmallDesktop = 'screen and (min-width: '+ bs_screen_md_min +'px) and (max-width: '+ bs_screen_md_max +'px)';
      bpLargeDesktop = 'screen and (min-width: '+ bs_screen_lg_min +'px)';


// enquire JS
enquire.register(bpMobile, {
  match : function() {
    // console.log('bpMobile');
  },
  unmatch : function() {}
});

enquire.register(bpSmartphone, {
  match : function() {
    // console.log('bpSmartphone');
  },
  unmatch : function() {}
});

enquire.register(bpTablet, {
  match : function() {
    // console.log('bpTablet');
  },
  unmatch : function() {}
});

enquire.register(bpTabletUp, {
  match : function() {
    // console.log('bpTabletUp');
  },
  unmatch : function() {}
});

enquire.register(bpDesktop, {
  match : function() {
    // console.log('bpDesktop');
  },
  unmatch : function() {}
});

enquire.register(bpSmallDesktop, {
  match : function() {
    // console.log('bpSmallDesktop');
  },
  unmatch : function() {}
});

enquire.register(bpLargeDesktop, {
  match : function() {
    // console.log('bpLargeDesktop');
  },
  unmatch : function() {}
});
