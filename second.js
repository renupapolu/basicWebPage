
document.getElementById('bt1').addEventListener('click',function(){
  document.getElementById('watchImg').src='redWatch.png'
});
document.getElementById('bt2').addEventListener('click',function(){
  document.getElementById('watchImg').src='pinkWatch.png'
});
document.getElementById('bt3').addEventListener('click',function(){
  document.getElementById('watchImg').src='blackWatch.png'
});
document.getElementById('bt4').addEventListener('click',function(){
  document.getElementById('watchImg').src='blueWatch.png'
});
document.getElementById('bt5').addEventListener('click',function(){
  alert(`sucessfully added to the cart`);
});
document.getElementById('bt0').addEventListener('click',function(){
  var image=document.getElementById('heartRate');
  image.src='heart-example.gif';
})
