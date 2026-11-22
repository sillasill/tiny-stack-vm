import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T="/@p359:>        888888848884888 888             OSSO/           47              3303";
function run(p,q){
let D=[],s=0,C=[],c=0,M=[],o='',j=0,x=0,t=0,n=p.length;
const E=e=>[Buffer.from(o,'latin1'),e];
for(;;){
if(t==1e6)return E(10);
if(x<0||x>=n)return E(9);
let k=p[x],v=T.charCodeAt(k)-31;
if(k>83||v==1)return E(5);
v-=16;let m=v>>4;
if(x+m>=n)return E(9);
t++;let y=x+1+m;
if(s<((v>>2)&3))return E(2);
if(s-((v>>2)&3)+(v&3)>256)return E(3);
x=y;
if(k<8){
if(k==0)return E(0);
if(k<3)D[s++]=k==1?(p[y-1]<<24)>>24:p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;
else if(k==3)s--;
else if(k==4){D[s]=D[s-1];s++}
else if(k==5)[D[s-1],D[s-2]]=[D[s-2],D[s-1]];
else if(k==6){D[s]=D[s-2];s++}
else[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];
}else if(k>15&&k<35){
if(k==23||k==27)D[s-1]=k==23?-D[s-1]|0:~D[s-1];
else{
let a=D[s-2],b=D[s-1],r;
if(k>18&&k<23&&!b)return E(4);
r=k==16?a+b|0:k==17?a-b|0:k==18?Math.imul(a,b):k==19?a==-2147483648&&b==-1?a:a/b|0:k==20?b==-1?0:a%b|0:k==21?(a>>>0)/(b>>>0)|0:k==22?(a>>>0)%(b>>>0)|0:k==24?a&b:k==25?a|b:k==26?a^b:k==28?a<<(b&31):k==29?a>>(b&31):k==30?a>>>(b&31)|0:k==32?+(a==b):k==33?+(a<b):+((a>>>0)<(b>>>0));
s-=2;D[s++]=r
}
}else if(k>47&&k<53){
if(k<51){let r=((p[y-2]|p[y-1]<<8)<<16)>>16;if(k==48||(k==49)==(D[--s]==0))x=y+r}
else if(k==51){if(c==64)return E(7);C[c++]=y;x=p[y-2]|p[y-1]<<8}
else{if(c==0)return E(8);x=C[--c]}
}else if(k==64||k==65){
if(k==64){let a=D[s-1];if(a<0||a>255)return E(6);D[s-1]=M[a]|0}
else{let a=D[s-1],w=D[s-2];if(a<0||a>255)return E(6);s-=2;M[a]=w}
}else{
if(k==80){let d=''+D[s-1];if(o.length+d.length>65536)return E(11);s--;o+=d}
else if(k==81){if(o.length+1>65536)return E(11);o+=String.fromCharCode(D[--s]&255)}
else if(k==82)D[s++]=j<q.length?q[j++]:-1;
else return E(D[--s]&255)
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I)){
let r=run(readFileSync(I+'/'+d+'/program.bin'),readFileSync(I+'/'+d+'/input.bin'));
mkdirSync(O+'/'+d,{recursive:true});
writeFileSync(O+'/'+d+'/stdout.bin',r[0]);
writeFileSync(O+'/'+d+'/exit.txt',r[1]+'\n')
}
