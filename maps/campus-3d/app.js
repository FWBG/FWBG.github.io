(function(){
"use strict";
const NAMES={1:"Garden Center",2:"Botanical Research Institute of Texas",3:"Pollinator Pathway",4:"Water Conservation Garden",
5:"Margery Leonard Courtyard",6:"Adelaide Polk Fuller Garden",7:"Texas Native Forest Boardwalk",8:"Rose Gardens",9:"Perennial Garden",
10:"Victor and Cleyone Tinsley Rock Springs Garden",11:"Horseshoe Garden",12:"Backyard Vegetable Garden",13:"Compost Outpost",
14:"Trial Garden",15:"Grove",16:"Cactus Garden",17:"Japanese Garden",18:"Four Seasons Garden",19:"Rock Springs Cafe",20:"Japanese Garden East Entrance"};
const D=window.FWBG_DATA;
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOTION=reduceMotion?0.3:1;
const EX=1.6;            // vertical exaggeration
const W=D.W,H=D.H,HW=D.hw,HH=D.hh;

// ---------- heights ----------
const raw=atob(D.height);const HT=new Float32Array(HW*HH);
for(let i=0;i<HT.length;i++)HT[i]=(D.lo+raw.charCodeAt(i)/255*(D.hi-D.lo))*EX;
function hAt(X,Z){ // world coords
  let u=(X+W/2)/W*(HW-1),v=(Z+H/2)/H*(HH-1);
  u=Math.min(Math.max(u,0),HW-1.001);v=Math.min(Math.max(v,0),HH-1.001);
  const i=Math.floor(u),j=Math.floor(v),fu=u-i,fv=v-j;
  const a=HT[j*HW+i],b=HT[j*HW+i+1],c=HT[(j+1)*HW+i],d=HT[(j+1)*HW+i+1];
  return a*(1-fu)*(1-fv)+b*fu*(1-fv)+c*(1-fu)*fv+d*fu*fv;
}
const toW=(x,y)=>[x-W/2,y-H/2];

// ---------- renderer ----------
const canvas=document.getElementById('scene');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});}
catch(e){document.getElementById('error').style.display='grid';document.getElementById('loading').classList.add('done');return;}
THREE.ColorManagement.legacyMode=false;
renderer.outputEncoding=THREE.sRGBEncoding;
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;

const scene=new THREE.Scene();
const HORIZON=new THREE.Color('#e3eee8');
scene.fog=new THREE.Fog(HORIZON,1400,5200);
const camera=new THREE.PerspectiveCamera(48,1,0.3,9000);

// sky dome
{
  const g=new THREE.SphereGeometry(7000,32,16);
  const m=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
    uniforms:{top:{value:new THREE.Color('#7fb9e0')},bot:{value:HORIZON.clone()}},
    vertexShader:'varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'uniform vec3 top;uniform vec3 bot;varying vec3 vP;void main(){float h=clamp(normalize(vP).y*2.2,0.,1.);gl_FragColor=vec4(mix(bot,top,pow(h,.7)),1.);\n#include <encodings_fragment>\n}'});
  const sky=new THREE.Mesh(g,m);sky.renderOrder=-1;scene.add(sky);
  scene.userData.sky=sky;
}

// lights
const hemi=new THREE.HemisphereLight('#ffffff','#b9c2a4',0.62);scene.add(hemi);
const sun=new THREE.DirectionalLight('#fff6e8',0.58);
sun.position.set(-520,900,-460);sun.castShadow=true;
sun.shadow.mapSize.set(4096,4096);
const sc=sun.shadow.camera;sc.left=-900;sc.right=900;sc.top=900;sc.bottom=-900;sc.near=100;sc.far=2600;
sun.shadow.bias=-0.0006;sun.shadow.normalBias=0.4;
scene.add(sun);scene.add(sun.target);

// toon gradient
const grad=new THREE.DataTexture(new Uint8Array([110,175,235,255]),4,1,THREE.RedFormat);
grad.minFilter=grad.magFilter=THREE.NearestFilter;grad.needsUpdate=true;
const toon=(c,extra)=>new THREE.MeshToonMaterial(Object.assign({color:c,gradientMap:grad},extra||{}));
const timeU={value:0};

// ---------- ground ----------
const tex=new THREE.TextureLoader().load('map-texture.jpg',()=>{texReady=true;maybeReady();});
let texReady=false;
tex.encoding=THREE.sRGBEncoding;tex.anisotropy=renderer.capabilities.getMaxAnisotropy();
{
  const g=new THREE.PlaneGeometry(W,H,HW-1,HH-1);g.rotateX(-Math.PI/2);
  const p=g.attributes.position;
  for(let i=0;i<p.count;i++)p.setY(i,HT[i]);
  g.computeVertexNormals();
  const m=new THREE.MeshLambertMaterial({map:tex});
  const ground=new THREE.Mesh(g,m);ground.receiveShadow=true;scene.add(ground);
  // skirt so edges never show a gap
  const apron=new THREE.Mesh(new THREE.PlaneGeometry(14000,14000).rotateX(-Math.PI/2),new THREE.MeshLambertMaterial({color:'#dde4d4'}));
  apron.position.y=-0.15;apron.receiveShadow=true;scene.add(apron);
}

// ---------- water ----------
const waterMat=new THREE.MeshPhongMaterial({color:'#8fc9c4',transparent:true,opacity:.78,shininess:90,specular:'#ffffff'});
{
  const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');
  const img=x.createImageData(128,128);
  for(let j=0;j<128;j++)for(let i=0;i<128;i++){
    const a=Math.sin(i/128*Math.PI*6+Math.sin(j/128*Math.PI*4)*1.4),b=Math.sin(j/128*Math.PI*8+Math.cos(i/128*Math.PI*2)*1.2);
    const k=(j*128+i)*4;img.data[k]=128+a*40;img.data[k+1]=128+b*40;img.data[k+2]=255;img.data[k+3]=255;}
  x.putImageData(img,0,0);
  const nt=new THREE.CanvasTexture(c);nt.wrapS=nt.wrapT=THREE.RepeatWrapping;nt.repeat.set(W/25,H/25);
  waterMat.normalMap=nt;waterMat.normalScale.set(.35,.35);
  const am=new THREE.TextureLoader().load('data:image/png;base64,'+D.water);waterMat.alphaMap=am;waterMat.alphaTest=.08;
  const wm=new THREE.Mesh(new THREE.PlaneGeometry(W,H).rotateX(-Math.PI/2),waterMat);
  wm.position.y=0.2;wm.renderOrder=1;scene.add(wm);
}

// ---------- buildings ----------
const blockers=[];
function pip(pt,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];
  if(((a[1]>pt[1])!==(b[1]>pt[1]))&&(pt[0]<(b[0]-a[0])*(pt[1]-a[1])/(b[1]-a[1])+a[0]))c=!c;}return c;}
{
  const wall=toon('#efe7da'),roof=toon('#7c6862'),edge=new THREE.LineBasicMaterial({color:'#3c2f2c',transparent:true,opacity:.55});
  const glassWall=new THREE.MeshPhongMaterial({color:'#7fb2d6',transparent:true,opacity:.5,shininess:120,specular:'#ffffff',side:THREE.DoubleSide});
  const glassRoof=new THREE.MeshPhongMaterial({color:'#9cc8e6',transparent:true,opacity:.62,shininess:120,specular:'#ffffff'});
  const glassEdge=new THREE.LineBasicMaterial({color:'#2f6f9a'});
  D.buildings.forEach(b=>{
    const pts=b.p.map(([x,y])=>toW(x,y));
    let lo=Infinity,hi=-Infinity;pts.forEach(([X,Z])=>{const h=hAt(X,Z);lo=Math.min(lo,h);hi=Math.max(hi,h);});
    const glass=b.k==='glass';
    const tall=glass?(b.a>2000?11:b.a>1000?9:6):(b.a>1500?12:b.a>300?7:b.a>150?5:3.6);
    const shape=new THREE.Shape(pts.map(([X,Z])=>new THREE.Vector2(X,-Z)));
    const depth=(hi-lo)+tall+0.6;
    const g=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:false});
    g.rotateX(-Math.PI/2);
    const mesh=new THREE.Mesh(g,glass?[glassRoof,glassWall]:[roof,wall]);
    mesh.position.y=lo-0.6;mesh.castShadow=!glass;mesh.receiveShadow=true;
    const e=new THREE.LineSegments(new THREE.EdgesGeometry(g,25),glass?glassEdge:edge);e.position.y=mesh.position.y;
    scene.add(mesh,e);
    if(glass){ // mullions on the roof for the greenhouse look
      const ribs=new THREE.Group();
      const xs=pts.map(p=>p[0]),zs=pts.map(p=>p[1]);
      const minX=Math.min(...xs),maxX=Math.max(...xs),minZ=Math.min(...zs),maxZ=Math.max(...zs);
      const top=mesh.position.y+depth+0.05,m=new THREE.LineBasicMaterial({color:'#2f6f9a',transparent:true,opacity:.6});
      const pos=[];const step=2.2;
      for(let X=minX;X<=maxX;X+=step){pos.push(X,top,minZ,X,top,maxZ);}
      for(let Z=minZ;Z<=maxZ;Z+=step*2){pos.push(minX,top,Z,maxX,top,Z);}
      const lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
      // clip lines to footprint roughly by testing midpoints
      const keep=[];for(let i=0;i<pos.length;i+=6){
        const segs=12;for(let s=0;s<segs;s++){
          const t0=s/segs,t1=(s+1)/segs,mx=pos[i]+(pos[i+3]-pos[i])*(t0+t1)/2,mz=pos[i+2]+(pos[i+5]-pos[i+2])*(t0+t1)/2;
          if(pip([mx,mz],pts))keep.push(pos[i]+(pos[i+3]-pos[i])*t0,top,pos[i+2]+(pos[i+5]-pos[i+2])*t0,pos[i]+(pos[i+3]-pos[i])*t1,top,pos[i+2]+(pos[i+5]-pos[i+2])*t1);}}
      lg.setAttribute('position',new THREE.Float32BufferAttribute(keep,3));
      scene.add(new THREE.LineSegments(lg,m));
    }
    blockers.push(pts);
  });
}

// ---------- trees ----------
function addSway(mat,amt){
  mat.onBeforeCompile=sh=>{
    sh.uniforms.uTime=timeU;
    sh.vertexShader='uniform float uTime;\n'+sh.vertexShader.replace('#include <begin_vertex>',
      `#include <begin_vertex>
      #ifdef USE_INSTANCING
      vec3 ip=vec3(instanceMatrix[3][0],instanceMatrix[3][1],instanceMatrix[3][2]);
      float k=max(position.y+1.0,0.0)*${amt.toFixed(3)};
      transformed.x+=sin(uTime*1.4+ip.x*.045+ip.z*.06)*k;
      transformed.z+=cos(uTime*1.1+ip.x*.07-ip.z*.03)*k*.7;
      #endif`);
  };
  return mat;
}
{
  const round=D.trees.filter(t=>t[3]===0),cone=D.trees.filter(t=>t[3]===1),all=D.trees;
  const trunkG=new THREE.CylinderGeometry(.22,.32,1,6);trunkG.translate(0,.5,0);
  const trunks=new THREE.InstancedMesh(trunkG,toon('#6b4a3a'),all.length);
  const canG=new THREE.IcosahedronGeometry(1,1);canG.computeVertexNormals();
  const canopy=new THREE.InstancedMesh(canG,addSway(toon('#ffffff'),.05),round.length);
  const coneG=new THREE.ConeGeometry(1,1,7);coneG.translate(0,.5,0);
  const coneA=new THREE.InstancedMesh(coneG,addSway(toon('#ffffff'),.035),cone.length);
  const coneB=new THREE.InstancedMesh(coneG,addSway(toon('#ffffff'),.035),cone.length);
  const greens=['#6a8f58','#5d8050','#7a9b60','#56744a','#6f9562'].map(c=>new THREE.Color(c));
  const fall=['#c98a3a','#b9652f','#d4a748','#a9813a'].map(c=>new THREE.Color(c));
  const cedars=['#4c6a46','#56744d','#47613f'].map(c=>new THREE.Color(c));
  const m4=new THREE.Matrix4(),q=new THREE.Quaternion(),s=new THREE.Vector3(),p=new THREE.Vector3(),e=new THREE.Euler();
  let rnd=12345;const R=()=>(rnd=(rnd*16807)%2147483647)/2147483647;
  let ri=0,ci=0;
  all.forEach((t,i)=>{
    const [X,Z]=toW(t[0],t[1]);const y=hAt(X,Z);const r=Math.max(2.4,Math.min(t[2],6.5));
    const isCone=t[3]===1;
    const th=isCone?r*1.1:r*1.25;
    e.set(0,R()*6.28,0);q.setFromEuler(e);
    m4.compose(p.set(X,y-.2,Z),q,s.set(1+r*.08,th,1+r*.08));trunks.setMatrixAt(i,m4);
    if(!isCone){
      const cr=r*1.05;
      m4.compose(p.set(X,y+th+cr*.75,Z),q,s.set(cr,cr*(.95+R()*.2),cr));canopy.setMatrixAt(ri,m4);
      canopy.setColorAt(ri,R()<.14?fall[Math.floor(R()*fall.length)]:greens[Math.floor(R()*greens.length)]);ri++;
    }else{
      const cr=r*.95,h=r*3.1;
      m4.compose(p.set(X,y+th*.6,Z),q,s.set(cr,h*.62,cr));coneA.setMatrixAt(ci,m4);
      m4.compose(p.set(X,y+th*.6+h*.38,Z),q,s.set(cr*.72,h*.55,cr*.72));coneB.setMatrixAt(ci,m4);
      const c=cedars[Math.floor(R()*cedars.length)];coneA.setColorAt(ci,c);coneB.setColorAt(ci,c.clone().offsetHSL(0,0,.04));ci++;
    }
  });
  [trunks,canopy,coneA,coneB].forEach(m=>{m.castShadow=true;m.receiveShadow=true;m.instanceMatrix.needsUpdate=true;if(m.instanceColor)m.instanceColor.needsUpdate=true;scene.add(m);});
}

// ---------- clouds ----------
const clouds=[];
{
  const mat=toon('#ffffff',{transparent:true,opacity:.96});const g=new THREE.IcosahedronGeometry(1,2);
  let rnd=777;const R=()=>(rnd=(rnd*16807)%2147483647)/2147483647;
  for(let i=0;i<16;i++){
    const c=new THREE.Group();const n=5+Math.floor(R()*4);const base=22+R()*28;
    for(let k=0;k<n;k++){const m=new THREE.Mesh(g,mat);const s=base*(.55+R()*.6);
      m.scale.set(s,s*.62,s*.85);m.position.set((k-n/2)*base*.55+R()*10,R()*base*.25,(R()-.5)*base*.6);m.castShadow=true;c.add(m);}
    c.position.set((R()-.5)*2600,190+R()*90,(R()-.5)*2600);c.userData.v=3+R()*3;
    scene.add(c);clouds.push(c);
  }
}

// ---------- birds ----------
const flocks=[];
{
  const mat=toon('#3d2b28',{side:THREE.DoubleSide});
  const wingG=new THREE.BufferGeometry();
  wingG.setAttribute('position',new THREE.Float32BufferAttribute([0,0,-.35, 0,0,.45, 1.5,0,.1],3));wingG.computeVertexNormals();
  const bodyG=new THREE.ConeGeometry(.22,1.3,5);bodyG.rotateX(Math.PI/2);
  for(let f=0;f<4;f++){
    const birds=[];const n=5+f%3*2;
    for(let i=0;i<n;i++){
      const b=new THREE.Group();b.add(new THREE.Mesh(bodyG,mat));
      const L=new THREE.Mesh(wingG,mat),Rw=new THREE.Mesh(wingG,mat);Rw.scale.x=-1;b.add(L,Rw);
      b.scale.setScalar(1.6);
      const side=i%2?1:-1,row=Math.ceil(i/2);
      b.userData={L,R:Rw,off:new THREE.Vector3(side*row*5,(Math.random()-.5)*2,row*5),ph:Math.random()*6};
      scene.add(b);birds.push(b);
    }
    flocks.push({birds,cx:(Math.random()-.5)*500,cz:(Math.random()-.5)*800,rx:220+Math.random()*180,rz:300+Math.random()*220,
      sp:.035+Math.random()*.02,ph:Math.random()*6,alt:45+Math.random()*40,dir:f%2?1:-1});
  }
}

// ---------- butterflies ----------
const flies=[];
{
  const cols=['#f08a24','#f6c445','#ffffff','#7fb4e8','#e8607a','#f08a24'];
  const wg=new THREE.PlaneGeometry(.55,.42);wg.translate(.275,0,0);
  const homes=[3,4,5,6,8,9,10,11,12,14,16,17,18,7,15].map(k=>D.dest[k]);
  let rnd=4242;const R=()=>(rnd=(rnd*16807)%2147483647)/2147483647;
  for(let i=0;i<64;i++){
    const m=new THREE.MeshToonMaterial({color:cols[i%cols.length],gradientMap:grad,side:THREE.DoubleSide});
    const g=new THREE.Group();const L=new THREE.Mesh(wg,m),Rw=new THREE.Mesh(wg,m);Rw.rotation.y=Math.PI;
    const body=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,.4,4).rotateX(Math.PI/2),new THREE.MeshBasicMaterial({color:'#2b1f1c'}));
    const wings=new THREE.Group();wings.add(L,Rw);g.add(wings,body);g.scale.setScalar(2.2);
    const h=homes[i%homes.length];const [hx,hz]=toW(h[0]+(R()-.5)*60,h[1]+(R()-.5)*60);
    g.userData={L,R:Rw,hx,hz,a:R()*6.28,b:R()*6.28,f1:.18+R()*.2,f2:.13+R()*.2,rad:6+R()*14,ph:R()*6.28};
    scene.add(g);flies.push(g);
  }
}

// ---------- destination pins ----------
const pins=[];
function makePins(){
  Object.entries(D.dest).sort((a,b)=>+a[0]-+b[0]).forEach(([k,[x,y]])=>{
    const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');
    g.fillStyle='rgba(0,0,0,.18)';g.beginPath();g.arc(66,70,52,0,7);g.fill();
    g.fillStyle='#4a2320';g.beginPath();g.arc(64,64,52,0,7);g.fill();
    g.strokeStyle='#ffffff';g.lineWidth=6;g.stroke();
    g.fillStyle='#fff';g.font='600 54px Jost, "Century Gothic", sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(k,64,67);
    const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;
    const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,sizeAttenuation:false,depthTest:false,transparent:true}));
    const [X,Z]=toW(x,y);s.position.set(X,hAt(X,Z)+16,Z);s.scale.set(.042,.042,1);s.renderOrder=10;s.userData.k=+k;
    scene.add(s);pins.push(s);
    const o=document.createElement('option');o.value=k;o.textContent=k+'. '+NAMES[k];document.getElementById('dest').appendChild(o);
  });
}
(document.fonts&&document.fonts.load?Promise.race([document.fonts.load('600 54px Jost'),new Promise(r=>setTimeout(r,1500))]):Promise.resolve()).then(()=>{makePins();pinsReady=true;maybeReady();});
let pinsReady=false;

// ---------- controls ----------
const controls=new THREE.OrbitControls(camera,canvas);
controls.enableDamping=true;controls.dampingFactor=.08;controls.screenSpacePanning=false;
controls.minDistance=12;controls.maxDistance=2400;controls.maxPolarAngle=1.42;
controls.keys={LEFT:'ArrowLeft',UP:'ArrowUp',RIGHT:'ArrowRight',BOTTOM:'ArrowDown'};controls.listenToKeyEvents(window);
const HOME={pos:new THREE.Vector3(80,980,1180),tgt:new THREE.Vector3(30,0,40)};
camera.position.copy(HOME.pos);controls.target.copy(HOME.tgt);controls.update();

let mode='fly';
const walk={pos:new THREE.Vector3(),yaw:0,pitch:-.05,keys:{},eye:1.7};
const hint=document.getElementById('hint'),pad=document.getElementById('pad');
const isTouch=matchMedia('(pointer:coarse)').matches;
function setHint(){
  hint.textContent=mode==='fly'
    ?(isTouch?'Drag to rotate, pinch to zoom, two fingers to pan':'Drag to rotate, right-drag to pan, scroll to zoom')
    :(isTouch?'Drag to look around, hold the arrows to walk':'Drag to look, WASD or arrows to walk, hold Shift to run');
}
let anim=null; // camera tween
function tweenTo(pos,tgt,ms){anim={p0:camera.position.clone(),t0:controls.target.clone(),p1:pos,t1:tgt,s:performance.now(),d:ms||1400};}
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

function setMode(m){
  if(m===mode)return;
  const fwd=new THREE.Vector3();
  if(m==='walk'){
    const t=controls.target;const [X,Z]=[THREE.MathUtils.clamp(t.x,-W/2+5,W/2-5),THREE.MathUtils.clamp(t.z,-H/2+5,H/2-5)];
    camera.getWorldDirection(fwd);walk.yaw=Math.atan2(-fwd.x,-fwd.z);walk.pitch=-.05;
    walk.pos.set(THREE.MathUtils.clamp(X+Math.sin(walk.yaw)*22,-W/2+5,W/2-5),0,THREE.MathUtils.clamp(Z+Math.cos(walk.yaw)*22,-H/2+5,H/2-5));nudgeOut();
    walk.pos.y=hAt(walk.pos.x,walk.pos.z)+walk.eye;
    controls.enabled=false;anim=null;
  }else{
    fwd.set(-Math.sin(walk.yaw),0,-Math.cos(walk.yaw));
    const tgt=walk.pos.clone().addScaledVector(fwd,40);tgt.y=hAt(tgt.x,tgt.z);
    camera.position.set(walk.pos.x-fwd.x*130,walk.pos.y+110,walk.pos.z-fwd.z*130);
    controls.target.copy(tgt);controls.enabled=true;controls.update();
  }
  mode=m;
  document.getElementById('modeFly').setAttribute('aria-pressed',m==='fly');
  document.getElementById('modeWalk').setAttribute('aria-pressed',m==='walk');
  pad.classList.toggle('on',m==='walk');setHint();canvas.focus();
}
function blocked(X,Z){for(const b of blockers)if(pip([X,Z],b))return true;return false;}
function nudgeOut(){let a=0,r=0;while(blocked(walk.pos.x,walk.pos.z)&&r<200){r+=2;a+=1.3;walk.pos.x+=Math.cos(a)*2;walk.pos.z+=Math.sin(a)*2;}}

function goTo(k){
  const [x,y]=D.dest[k];const [X,Z]=toW(x,y);const g=hAt(X,Z);
  toast(k+'. '+NAMES[k]);
  if(mode==='fly'){
    const dir=new THREE.Vector3().subVectors(camera.position,controls.target).setY(0);
    if(dir.lengthSq()<1)dir.set(0,0,1);dir.normalize();
    tweenTo(new THREE.Vector3(X+dir.x*135,g+100,Z+dir.z*135),new THREE.Vector3(X,g,Z));
  }else{
    walk.pos.set(X,0,Z+26);nudgeOut();walk.yaw=Math.atan2(-(X-walk.pos.x),-(Z-walk.pos.z));walk.pitch=-.08;
  }
}
let toastT;function toast(s){const t=document.getElementById('toast');t.textContent=s;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2600);}

document.getElementById('modeFly').onclick=()=>setMode('fly');
document.getElementById('modeWalk').onclick=()=>setMode('walk');
document.getElementById('dest').onchange=e=>{if(e.target.value)goTo(+e.target.value);e.target.blur();canvas.focus();};
let pinsOn=true;
document.getElementById('labels').onclick=e=>{pinsOn=!pinsOn;e.currentTarget.setAttribute('aria-pressed',pinsOn);};
const fsBtn=document.getElementById('fullscreen');
if(document.fullscreenEnabled||document.webkitFullscreenEnabled){
  fsBtn.hidden=false;
  fsBtn.onclick=()=>{const el=document.documentElement;
    if(document.fullscreenElement||document.webkitFullscreenElement){(document.exitFullscreen||document.webkitExitFullscreen).call(document);}
    else{(el.requestFullscreen||el.webkitRequestFullscreen).call(el);}};
  const upd=()=>{fsBtn.textContent=(document.fullscreenElement||document.webkitFullscreenElement)?'Exit full screen':'Full screen';};
  document.addEventListener('fullscreenchange',upd);document.addEventListener('webkitfullscreenchange',upd);
}
document.getElementById('overview').onclick=()=>{setMode('fly');tweenTo(HOME.pos.clone(),HOME.tgt.clone(),1600);};

// pointer: click pins, drag-look in walk mode
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();let down=null;
canvas.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,lx:e.clientX,ly:e.clientY,id:e.pointerId};
  if(mode==='walk')canvas.setPointerCapture(e.pointerId);anim=null;});
canvas.addEventListener('pointermove',e=>{if(!down||e.pointerId!==down.id||mode!=='walk')return;
  walk.yaw+=(e.clientX-down.lx)*.004;walk.pitch=THREE.MathUtils.clamp(walk.pitch+(e.clientY-down.ly)*.003,-1.2,1.0);down.lx=e.clientX;down.ly=e.clientY;});
canvas.addEventListener('pointerup',e=>{
  if(down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<6){
    const r=canvas.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);
    ray.setFromCamera(ndc,camera);const hit=ray.intersectObjects(pins.filter(p=>p.visible))[0];
    if(hit)goTo(hit.object.userData.k);
  }down=null;});
window.addEventListener('keydown',e=>{if(e.target.tagName==='SELECT')return;walk.keys[e.code]=true;if(mode==='walk'&&/Arrow|Space/.test(e.code))e.preventDefault();});
window.addEventListener('keyup',e=>{walk.keys[e.code]=false;});
window.addEventListener('blur',()=>{walk.keys={};});
const padHeld={};
pad.querySelectorAll('button').forEach(b=>{
  const k=b.dataset.k;
  const on=e=>{e.preventDefault();padHeld[k]=true;b.classList.add('held');b.setPointerCapture&&b.setPointerCapture(e.pointerId);};
  const off=()=>{padHeld[k]=false;b.classList.remove('held');};
  b.addEventListener('pointerdown',on);b.addEventListener('pointerup',off);b.addEventListener('pointercancel',off);b.addEventListener('lostpointercapture',off);
});

// ---------- loop ----------
function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
addEventListener('resize',resize);resize();
const clock=new THREE.Clock();let t=0;
const tmp=new THREE.Vector3(),look=new THREE.Vector3();
function tick(){
  const dt=Math.min(clock.getDelta(),.05);t+=dt*MOTION;timeU.value=t;
  // clouds
  clouds.forEach(c=>{c.position.x+=c.userData.v*dt*MOTION;if(c.position.x>1500)c.position.x=-1500;});
  // birds
  flocks.forEach(f=>{
    const a=t*f.sp*f.dir+f.ph;
    const cx=f.cx+Math.cos(a)*f.rx,cz=f.cz+Math.sin(a*1.3)*f.rz;
    const nx=f.cx+Math.cos(a+.01*f.dir)*f.rx,nz=f.cz+Math.sin((a+.01*f.dir)*1.3)*f.rz;
    const yaw=Math.atan2(nx-cx,nz-cz);
    f.birds.forEach(b=>{const u=b.userData;
      const ox=u.off.x*Math.cos(yaw)+u.off.z*Math.sin(yaw),oz=-u.off.x*Math.sin(yaw)+u.off.z*Math.cos(yaw);
      b.position.set(cx-ox,f.alt+u.off.y+Math.sin(t*.7+u.ph)*2,cz-oz);b.rotation.set(0,yaw,Math.sin(t*.5+u.ph)*.12);
      const fl=Math.sin(t*7+u.ph)*.6+.1;u.L.rotation.z=fl;u.R.rotation.z=-fl;});
  });
  // butterflies
  flies.forEach(g=>{const u=g.userData;
    const x=u.hx+Math.sin(t*u.f1+u.a)*u.rad+Math.sin(t*u.f2*2.3+u.b)*u.rad*.35;
    const z=u.hz+Math.cos(t*u.f2+u.b)*u.rad+Math.cos(t*u.f1*1.7+u.a)*u.rad*.35;
    const y=hAt(x,z)+1.1+Math.sin(t*1.7+u.ph)*.5+Math.sin(t*5.1+u.ph)*.12;
    const dx=x-g.position.x,dz=z-g.position.z;if(dx*dx+dz*dz>1e-6)g.rotation.y=Math.atan2(dx,dz)+Math.PI/2;
    g.position.set(x,y,z);const fl=.15+Math.abs(Math.sin(t*15+u.ph))*1.15;u.L.rotation.y=-fl;u.R.rotation.y=Math.PI+fl;});
  waterMat.normalMap.offset.set(t*.012,t*.008);

  if(mode==='fly'){
    if(anim){const k=Math.min((performance.now()-anim.s)/anim.d,1),e=ease(k);
      camera.position.lerpVectors(anim.p0,anim.p1,e);controls.target.lerpVectors(anim.t0,anim.t1,e);if(k>=1)anim=null;}
    controls.target.x=THREE.MathUtils.clamp(controls.target.x,-W/2-100,W/2+100);
    controls.target.z=THREE.MathUtils.clamp(controls.target.z,-H/2-100,H/2+100);
    controls.update();
    const g=hAt(camera.position.x,camera.position.z)+4;if(camera.position.y<g)camera.position.y=g;
  }else{
    const K=walk.keys,run=K.ShiftLeft||K.ShiftRight?16:5.5;
    let f=(K.KeyW||K.ArrowUp||padHeld.fwd?1:0)-(K.KeyS||K.ArrowDown||padHeld.back?1:0);
    let s=(K.KeyD?1:0)-(K.KeyA?1:0);
    const turn=(K.ArrowLeft||K.KeyQ||padHeld.tl?1:0)-(K.ArrowRight||K.KeyE||padHeld.tr?1:0);
    walk.yaw+=turn*1.6*dt;
    if(f||s){const sx=-Math.sin(walk.yaw),sz=-Math.cos(walk.yaw);
      const mx=(sx*f+Math.cos(walk.yaw)*s)*run*dt, mz=(sz*f-Math.sin(walk.yaw)*s)*run*dt;
      const X=THREE.MathUtils.clamp(walk.pos.x+mx,-W/2+3,W/2-3),Z=THREE.MathUtils.clamp(walk.pos.z+mz,-H/2+3,H/2-3);
      if(!blocked(X,walk.pos.z))walk.pos.x=X;if(!blocked(walk.pos.x,Z))walk.pos.z=Z;}
    const gy=Math.max(hAt(walk.pos.x,walk.pos.z),0.2)+walk.eye;
    walk.pos.y+=(gy-walk.pos.y)*Math.min(1,dt*10);
    camera.position.copy(walk.pos);
    look.set(-Math.sin(walk.yaw)*Math.cos(walk.pitch),Math.sin(walk.pitch),-Math.cos(walk.yaw)*Math.cos(walk.pitch)).add(walk.pos);
    camera.lookAt(look);
  }
  pins.forEach(p=>{
    if(mode==='walk'){const d=p.position.distanceTo(camera.position);p.visible=pinsOn&&d<240;p.material.depthTest=true;p.scale.setScalar(.042*THREE.MathUtils.clamp(1.4-d/300,.6,1.2));}
    else{p.visible=pinsOn;p.material.depthTest=false;p.scale.setScalar(.042);}
  });
  scene.userData.sky.position.copy(camera.position);
  renderer.render(scene,camera);
  requestAnimationFrame(tick);
}
function maybeReady(){if(texReady&&pinsReady&&!started){started=true;setHint();requestAnimationFrame(tick);
  setTimeout(()=>document.getElementById('loading').classList.add('done'),150);}}
let started=false;
})();
