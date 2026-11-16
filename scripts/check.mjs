import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),site=path.join(root,'site');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
let links=0,pages=0;const errors=[];
for(const f of walk(site)){if(!f.endsWith('.html'))continue;pages++;const s=fs.readFileSync(f,'utf8');if((s.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push('Expected exactly one h1: '+f);for(const m of s.matchAll(/(?:href|src)="([^"]+)"/g)){const t=m[1].replaceAll('&amp;','&');if(/^https?:/.test(t))continue;links++;const [p,hash]=t.split('#');const dest=p?path.resolve(path.dirname(f),p.split('?')[0]):f;if(!fs.existsSync(dest)){errors.push(`Broken link ${t}: ${f}`);continue}if(hash&&dest.endsWith('.html')&&!fs.readFileSync(dest,'utf8').includes(`id="${hash}"`))errors.push('Missing anchor '+t)}}
const index=fs.readFileSync(path.join(root,'wiki/index.md'),'utf8');for(const f of walk(path.join(root,'wiki'))){if(!f.endsWith('.md')||['index.md','log.md'].includes(path.basename(f)))continue;const body=fs.readFileSync(f,'utf8');if(!body.startsWith('---'))errors.push('Missing frontmatter '+f);if(!index.includes(path.relative(path.join(root,'wiki'),f).replaceAll('\\','/')))errors.push('Unindexed '+f);for(const m of body.matchAll(/\]\(([^)]+)\)/g)){if(/^https?:/.test(m[1])||m[1].startsWith('../../raw/'))continue;if(!fs.existsSync(path.resolve(path.dirname(f),m[1].split('#')[0])))errors.push('Broken wiki link '+m[1])}}
if(walk(site).some(f=>f.includes(path.sep+'raw'+path.sep)))errors.push('Raw files in public artifact');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`PASS: ${pages} HTML pages, ${links} local links/assets/anchors, wiki index and source links; no raw directory published.`);

