var fdr = new Snap("#jump-animation").attr({viewBox: "0 0 250 250"});

var time1_stp0 = [4,0, 21,0, 34,0];
var time1_stp1 = [4,0, 21,37, 34,0];

var time2_stp1 = [28,37, 42,37, 59,37];
var time2_stp2 = [28, 37, 42,0, 59,37];

var time3_stp1 = [70,37, 87,37, 101,37];
var time3_stp2 = [70,37, 87,0, 101,37];

var time4_stp1 = [70,42, 87,42, 101,42];
var time4_stp2 = [70,42, 87,80, 101,42];

var time5_stp1 = [49,80, 64,80, 80,80];
var time5_stp2 = [49,80, 64,42, 80,80];

var time6_stp1 = [94,80, 109,80, 125,80];
var time6_stp2 = [94,80, 109,42, 125,80];

var time7_stp1 = [115,42, 132,42, 146,42];
var time7_stp2 = [115,42, 132,80, 146,42];

var time8_stp1 = [94,85, 109,85, 125,85];
var time8_stp2 = [94,85, 109,122, 125,85];

var time9_stp1 = [115,122, 132,122, 146,122];
var time9_stp2 = [115,122, 132,85, 146,122];

var time10_stp1 = [94,165, 109,165, 125,165];
var time10_stp2 = [94,165, 109,127, 125,165];

var timeline1 = fdr.polygon(time1_stp0).attr({fill:'rgb(242,206,36)',opacity:'1'});

var timeline2 = fdr.polygon(time2_stp1).attr({fill:'rgb(226,96,38)',opacity:'1'});

var timeline3 = fdr.polygon(time3_stp1).attr({fill:'rgb(192,43,38)',opacity:'1'});

var timeline4 = fdr.polygon(time4_stp1).attr({fill:'rgb(242,206,36)',opacity:'1'});

var timeline5 = fdr.polygon(time5_stp1).attr({fill:'rgb(32,66,128)',opacity:'1'});

var timeline6 = fdr.polygon(time6_stp1).attr({fill:'rgb(137,197,63)',opacity:'1'});

var timeline7 = fdr.polygon(time7_stp1).attr({fill:'rgb(89,90,90)',opacity:'1'});

var timeline8 = fdr.polygon(time8_stp1).attr({fill:'rgb(28,162,162)',opacity:'1'});

var timeline9 = fdr.polygon(time9_stp1).attr({fill:'rgb(137,197,63)',opacity:'1'});

var timeline10 = fdr.polygon(time10_stp1).attr({fill:'rgb(226,96,38)',opacity:'1'});

// var mina_val = '';
function updateMina() {
 var mina_val1 = $('#group-1     option:selected').val();
  var speed1 = parseInt($('#speed-1').val());
  timeline1_anim = function(){
    Snap.animate(time1_stp0, time1_stp1, 
      function( val ){ 
        timeline1.attr({ points: val })
      }, 
    speed1, mina[mina_val1]);
  }
  run();
}

function updateMinaB() {
  console.log('updateB');
var mina_val1b = $('#group-1b     option:selected').val();
  var speed1b = parseInt($('#speed-1b').val());
  timeline1b_anim = function(){
  Snap.animate(time2_stp1, time2_stp2, 
      function( val ){ 
        timeline2.attr({ points: val })
      }, 
  speed1b, mina[mina_val1b]);
  }
  runB();
}

function updateMina2() {
  var mina_val2 = $('#group-2     option:selected').val();
  var speed2 = parseInt($('#speed-2').val());
  timeline2_anim = function(){
    Snap.animate(time3_stp1, time3_stp2, 
      function( val ){ 
        timeline3.attr({ points: val })
      }, 
    speed2, mina[mina_val2]);
      Snap.animate(time4_stp1, time4_stp2, 
      function( val ){ 
        timeline4.attr({ points: val })
      }, 
     speed2, mina[mina_val2]);
      Snap.animate(time5_stp1, time5_stp2, 
      function( val ){ 
        timeline5.attr({ points: val })
      }, 
     speed2, mina[mina_val2]);
      Snap.animate(time6_stp1, time6_stp2, 
      function( val ){ 
        timeline6.attr({ points: val })
      }, 
     speed2, mina[mina_val2]);
  }
  run2();
}
function updateMina3() {
  var mina_val3 = $('#group-3     option:selected').val();
  var speed3 = parseInt($('#speed-3').val());
  timeline3_anim = function(){
     Snap.animate(time7_stp1, time7_stp2, 
      function( val ){ 
        timeline7.attr({ points: val })
      }, 
   speed3, mina[mina_val3]);
      Snap.animate(time8_stp1, time8_stp2, 
      function( val ){ 
        timeline8.attr({ points: val })
      }, 
    speed3, mina[mina_val3]);
  } 
  run3();
}
function updateMina4() {
  var mina_val4 = $('#group-4     option:selected').val();
  var speed4 = parseInt($('#speed-4').val());
  timeline4_anim = function(b){
  Snap.animate(time9_stp1, time9_stp2, 
      function( val ){ 
        timeline9.attr({ points: val })
      }, 
    speed4, mina[mina_val4]);

      Snap.animate(time10_stp1, time10_stp2, 
      function( val ){ 
        timeline10.attr({ points: val })
      }, 
    speed4, mina[mina_val4]);
  }
  run4();
}


function run() {
  var time1 = parseInt($('#time-1').val());
  setTimeout(function(){
    timeline1_anim();
     }, time1);  
}
function runB() {
  var time2 = parseInt($('#time-2').val());
  setTimeout(function(){
   timeline1b_anim();
 }, time2);  
}

function run2() {
  var time3 = parseInt($('#time-3').val());
  setTimeout(function(){
   timeline2_anim();
 }, time3);  
}


function run3() {
  var time4 = parseInt($('#time-4').val());
  setTimeout(function(){
   timeline3_anim();
 }, time4);  
}

function run4() {
  var time5 = parseInt($('#time-5').val());
setTimeout(function(){
   timeline4_anim();
 }, time5);    
}


function runAll() {
  updateMina();
  updateMinaB();
  updateMina2();
  updateMina3();
  updateMina4();
}
