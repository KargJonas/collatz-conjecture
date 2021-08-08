const cnv = document.querySelector('canvas');
const ctx = cnv.getContext('2d');

cnv.width = innerWidth;
cnv.height = innerHeight;

for (let i = 1; i < 5000; i++) {
  ctx.moveTo(i, i);
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

  let x = i;

  for(let n = 0; ; n++) {
    if (x === 1) break; 
    if (x % 2 === 0) x /= 2;
    else x = (x * 3 + 1);

    ctx.lineTo(n * 7, x / 1000);
  }

  ctx.stroke();
}