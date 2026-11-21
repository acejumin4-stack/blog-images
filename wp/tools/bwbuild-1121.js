window._C={name:'셀프수리왕',domain:'betterwise.kr',accent:'#65A30D',tint:'#F7FEE7',coupang:true,
cats:[
['laundry','🧺','세탁기·건조기','세탁기·건조기·워시타워 에러코드와 멈춤, 배수·문잠김 확인 순서'],
['kitchen','🍳','주방 가전','냉장고·식기세척기·인덕션·전자레인지·정수기·커피머신 고장과 설정'],
['bathroom','🚿','비데·욕실','비데 노즐·수압·전원 문제와 소모품 교체'],
['security-network','🔐','도어락·공유기·홈캠','디지털도어락·와이파이 공유기·홈캠 연결과 초기화'],
['digital','💻','노트북·프린터·TV','노트북·프린터·TV·셋톱박스 전원·연결·오류 해결'],
['cleaning','🤖','청소기','로봇청소기·무선청소기 에러와 필터·브러시 관리']],
hero:['집 안 가전, 서비스 부르기 전에 확인할 것','브랜드·모델별 에러코드와 증상을 제조사 설명서 기준으로 정리합니다. 사용자 조치로 해결되는지, 서비스센터가 필요한지 순서대로 확인하세요.'],
menuShort:['세탁','주방','욕실','보안·네트워크','디지털','청소'],
intro:'셀프수리왕은 세탁기, 냉장고, 식기세척기, 비데, 도어락, 공유기, 노트북, 로봇청소기처럼 집 안에서 쓰는 제품에 에러코드나 고장이 생겼을 때 서비스 접수 전에 직접 확인할 수 있는 순서를 정리하는 사이트입니다.',
verify:'제조사 공식 고객지원 페이지, 제품 사용설명서, 서비스센터 공지',
caution:'분해나 전기부품 수리는 다루지 않습니다. 설명서가 안내하는 사용자 조치까지만 정리하고, 그 이상이 필요한 증상은 서비스센터 접수 기준을 안내합니다. 감전·누수·가스 냄새가 있으면 전원을 끄고 바로 제조사나 전문가에게 연락하세요.'};
const C=window._C; const E='acejumin4@gmail.com'; const D='2026년 11월 21일'; const log=[];
const n=await fetch('/wp-admin/admin-ajax.php?action=rest-nonce').then(r=>r.text()); window._n=n;
const H={'Content-Type':'application/json','X-WP-Nonce':n};
const api=(p,m='GET',b)=>fetch('/wp-json'+p,{method:m,headers:H,body:b?JSON.stringify(b):undefined}).then(r=>r.json());
// categories
const catIds={};
for(const [slug,ic,name,desc] of C.cats){let r=await api('/wp/v2/categories','POST',{name,slug,description:desc}); if(r.code==='term_exists') r={id:r.data.term_id}; catIds[slug]=r.id;}
await api('/wp/v2/categories/1','POST',{name:'기타',slug:'etc'});
await api('/wp/v2/settings','POST',{default_category:catIds[C.cats[0][0]], description:C.hero[0].replace(/[?？]$/,'')});
log.push('cats '+JSON.stringify(catIds));
const css=`<style>.site-info{max-width:760px;margin:0 auto;line-height:1.85;font-size:16px;color:#1F2937}.site-info h2{font-size:20px;margin:34px 0 12px;padding-bottom:6px;border-bottom:2px solid #E5E7EB;background:none;color:#111827}.site-info ul{padding-left:20px}.site-info li{margin:6px 0}.si-box{background:${C.tint};border-left:5px solid ${C.accent};padding:14px 18px;border-radius:8px;margin:18px 0}.si-muted{color:#6B7280;font-size:14px}</style>`;
const W=b=>css+'<div class="site-info">'+b+'</div>';
const catList=C.cats.map(c=>`<li><a href="/category/${c[0]}/">${c[2]}</a> – ${c[3]}</li>`).join('');
const cp=C.coupang?`<p>일부 글에는 쿠팡 파트너스 링크가 들어갑니다. 해당 글 맨 위에 "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."라는 문구를 표시하며, 링크로 구매해도 구매자가 내는 가격은 같습니다.</p>`:'';
const pages=[
{slug:'about',title:'소개',content:W(`<p>${C.intro}</p><h2>다루는 주제</h2><ul>${catList}</ul><h2>글을 만드는 방식</h2><ul><li>확인 출처: ${C.verify}를 직접 열어 확인합니다.</li><li>글마다 확인 기준일과 출처 링크를 적고, 내용이 바뀌면 고친 뒤 수정일을 남깁니다.</li><li>확인되지 않은 소문, 경험담처럼 꾸민 문장, 과장된 표현은 쓰지 않습니다.</li><li>초안 작성에 AI 도구를 쓰며, 공식 자료와 대조해 정리합니다. 각 글 끝에 작성 방식을 밝힙니다.</li></ul><div class="si-box">${C.caution}</div><h2>운영 정보</h2><p>운영: ${C.name} 운영 담당<br>문의: <a href="mailto:${E}">${E}</a> (<a href="/contact/">문의 안내</a>)<br>광고·제휴: <a href="/disclaimer/">정보 이용 안내와 광고·제휴 고지</a></p><p class="si-muted">검토일: ${D}</p>`)},
{slug:'contact',title:'문의',content:W(`<p>${C.name}의 내용 오류, 자료 정정, 이용 불편과 협업 제안을 보내주세요.</p><div class="si-box"><b>문의 이메일</b> <a href="mailto:${E}">${E}</a><br><span class="si-muted">링크를 누르면 기기의 메일 앱이 열립니다. 이 페이지에는 사이트 내 전송 양식이 없습니다.</span></div><h2>내용 오류와 정정 요청</h2><ul><li>해당 글의 주소</li><li>확인이 필요한 문장·표·금액</li><li>확인 가능한 공식 자료나 출처 링크</li></ul><p>확인된 오류는 자료를 검토한 뒤 수정합니다. 개별 상담이나 대행은 하지 않습니다.</p><h2>이용 불편과 협업 제안</h2><p>깨진 링크나 화면 표시 문제는 사용한 기기·브라우저와 페이지 주소를 알려주세요. 협업 제안은 내용과 회신 주소를 함께 보내주세요.</p><h2>개인정보 문의</h2><p>개인정보의 열람·정정·삭제·처리 정지 요청도 같은 이메일로 받습니다. 자세한 내용은 <a href="/privacy-policy/">개인정보처리방침</a>을 확인해 주세요.</p><div class="si-box">문의에 주민등록번호, 비밀번호, 결제정보 같은 개인정보를 넣지 마세요.</div><p>문의는 받은 순서대로 검토하며 답변 시간을 보장하지 않습니다.</p><p class="si-muted">검토일: ${D}</p>`)},
{slug:'privacy-policy',title:'개인정보처리방침',content:W(`<p>${C.name}(${C.domain})는 사이트를 운영하며 처리하는 개인정보의 항목, 목적, 보관과 이용자의 권리를 아래와 같이 안내합니다.</p><p class="si-muted">시행일·최종 수정일: ${D}</p><h2>1. 운영 및 문의 창구</h2><ul><li>사이트: ${C.name} (${C.domain})</li><li>개인정보 보호·문의 담당: ${C.name} 운영 담당</li><li>이메일: <a href="mailto:${E}">${E}</a></li></ul><p>사이트 열람에는 회원가입이나 결제가 필요하지 않으며, 댓글 기능은 사용하지 않습니다.</p><h2>2. 처리하는 정보와 목적</h2><ul><li><b>이메일 문의</b>: 발신 이메일 주소, 이용자가 적은 이름·연락처, 문의 내용과 첨부 자료를 답변과 정정 처리에 사용합니다.</li><li><b>서버·보안 기록</b>: 웹서버가 처리하는 IP 주소, 요청 주소·시각, 브라우저 정보와 오류 기록은 페이지 제공, 장애 대응, 부정 이용 방지에 사용될 수 있습니다.</li><li><b>Google 분석·광고</b>: Google Analytics와 Google AdSense를 사용합니다. 페이지 주소, IP 주소, 쿠키·기기 식별정보, 이용·광고 상호작용 정보가 해당 서비스에 전달되거나 처리될 수 있습니다.</li>${C.coupang?'<li><b>제휴 링크</b>: 쿠팡 파트너스 링크를 누르면 쿠팡이 쿠키 등으로 유입 경로를 기록할 수 있습니다. 구매 정보는 이 사이트가 받지 않습니다.</li>':''}</ul><h2>3. 보관 및 파기</h2><p>문의 자료는 답변과 관련 정정 처리가 끝나면 불필요한 개인정보를 지체 없이 삭제합니다. 법령상 보존 의무나 분쟁이 있으면 그 범위에서 분리 보관합니다. Google 서비스의 정보는 Google의 정책과 각 서비스 보관 설정을 따르며, 서버 기록은 호스팅 업체 정책이 적용됩니다.</p><h2>4. 외부 서비스와 쿠키</h2><p>이 사이트는 문의 정보를 판매하거나 마케팅 명단으로 제공하지 않습니다. Google을 포함한 제3자 공급업체는 쿠키를 사용해 이용자의 이 사이트 및 다른 사이트 방문 기록을 바탕으로 광고를 게재할 수 있습니다. Google의 광고 쿠키를 통해 Google과 파트너는 이용자의 방문 기록에 따라 광고를 제공할 수 있습니다. 맞춤 광고는 <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google 광고 설정</a>에서 끌 수 있고, 자세한 내용은 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Google 파트너 사이트 데이터 사용 안내</a>에서 확인할 수 있습니다. 브라우저 설정에서 쿠키 저장을 거부하거나 삭제할 수 있습니다. Google 서비스 처리 과정에서 정보가 국외(미국 등)에서 처리될 수 있습니다.</p><h2>5. 이용자의 권리</h2><p>이용자는 개인정보의 열람·정정·삭제·처리 정지를 위 이메일로 요청할 수 있습니다. 필요한 범위에서 본인 확인 후 처리합니다. 개인정보 침해 상담은 개인정보침해신고센터(국번 없이 118)에서도 받을 수 있습니다.</p><h2>6. 아동의 개인정보</h2><p>이 사이트는 만 14세 미만 아동을 대상으로 하지 않으며 아동의 개인정보를 일부러 수집하지 않습니다.</p><h2>7. 방침의 변경</h2><p>내용이 바뀌면 이 페이지에 수정일과 함께 알립니다.</p>`)},
{slug:'terms',title:'이용약관',content:W(`<p>이 약관은 ${C.name}(${C.domain}, 이하 "사이트")의 이용 조건을 정합니다. 사이트를 이용하면 이 약관에 동의한 것으로 봅니다.</p><p class="si-muted">시행일: ${D}</p><h2>1. 제공하는 정보</h2><p>사이트는 공개된 공식 자료를 바탕으로 정리한 일반 정보를 무료로 제공합니다. 개별 상황에 대한 상담, 예약·신청 대행, 결과 보장은 제공하지 않습니다.</p><h2>2. 정보의 정확성</h2><p>글마다 확인 기준일을 적고 공식 출처와 대조하지만, 이후 제도·요금·운영 방식이 바뀔 수 있습니다. 중요한 결정이나 결제 전에는 해당 기관에서 최종 확인해 주세요.</p><h2>3. 저작권</h2><p>사이트의 글·표·이미지의 저작권은 사이트에 있습니다. 출처와 링크를 밝힌 짧은 인용은 허용하며, 전문 복제·재배포·상업적 이용은 허락 없이 할 수 없습니다.</p><h2>4. 외부 링크와 광고</h2><p>사이트에는 외부 사이트 링크, Google AdSense 광고${C.coupang?', 쿠팡 파트너스 제휴 링크':''}가 포함될 수 있습니다. 외부 사이트의 내용과 거래에 대해서는 해당 사이트의 약관이 적용됩니다.</p><h2>5. 금지 행위</h2><p>사이트에 대한 자동화된 대량 수집, 서비스 운영을 방해하는 행위, 광고를 부정하게 클릭하는 행위를 금지합니다.</p><h2>6. 약관의 변경</h2><p>약관이 바뀌면 이 페이지에 시행일과 함께 알립니다. 문의: <a href="/contact/">문의 안내</a></p>`)},
{slug:'disclaimer',title:'정보 이용 안내',content:W(`<p>${C.name}의 글은 공개된 공식 자료를 바탕으로 이해하기 쉽게 정리한 일반 안내입니다.</p><h2>정보의 기준</h2><p>확인 출처는 ${C.verify}입니다. 글마다 확인 기준일과 출처를 적습니다.</p><div class="si-box">${C.caution}</div><h2>외부 링크</h2><p>글에 연결한 외부 사이트의 내용과 운영은 이 사이트가 보장하지 않습니다.</p><h2>광고와 제휴 고지</h2><p>이 사이트에는 Google AdSense 광고가 표시됩니다. 광고는 Google이 자동으로 배치하며 글 내용과 별개입니다.</p>${cp}<p>광고나 제휴 여부는 글의 정보 선정과 설명에 영향을 주지 않도록 작성합니다.</p><h2>오류 신고</h2><p>잘못된 내용은 <a href="/contact/">문의</a>로 알려주시면 확인 후 수정합니다.</p><p class="si-muted">검토일: ${D}</p>`)}
];
const pid={};
for(const p of pages){const r=await api('/wp/v2/pages','POST',{...p,status:'publish',comment_status:'closed'}); pid[p.slug]=r.id;}
log.push('pages '+JSON.stringify(pid));
// home
const cards=C.cats.map(c=>`<a class="hub-card" href="/category/${c[0]}/"><span class="hub-ic">${c[1]}</span><b>${c[2]}</b><span>${c[3]}</span></a>`).join('');
const home=`<!-- wp:html --><style>.hub-hero{background:linear-gradient(135deg,${C.tint},#F8FAFC);border-radius:16px;padding:32px 26px;margin:0 0 28px}.hub-hero h1{font-size:28px;margin:0 0 10px;color:#1F2937}.hub-hero p{margin:0;font-size:16px;color:#374151;line-height:1.7}.hub-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:0 0 34px}.hub-card{display:flex;flex-direction:column;gap:6px;padding:18px;border:1px solid #E5E7EB;border-radius:12px;background:#fff;text-decoration:none!important;color:#1F2937!important}.hub-card:hover{box-shadow:0 6px 18px rgba(0,0,0,.08)}.hub-card b{font-size:17px}.hub-card span{font-size:14px;color:#6B7280;line-height:1.5}.hub-card .hub-ic{font-size:26px}.hub-h{font-size:22px;margin:0 0 14px;background:none!important;color:#111827!important;border:0!important;box-shadow:none!important;padding:0!important}@media(max-width:768px){.hub-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:480px){.hub-grid{grid-template-columns:1fr}}</style><div class="hub-hero"><h1>${C.hero[0]}</h1><p>${C.hero[1]}</p></div><div class="hub-grid">${cards}</div><h2 class="hub-h">최근 글</h2><!-- /wp:html --><!-- wp:latest-posts {"postsToShow":12,"displayPostDate":true,"displayExcerpt":true,"excerptLength":40,"displayFeaturedImage":true,"featuredImageSizeSlug":"medium","postLayout":"grid","columns":3} /-->`;
const hp=await api('/wp/v2/pages','POST',{title:'홈',slug:'home',status:'publish',content:home,comment_status:'closed',meta:{_kad_post_title:'hide',_kad_post_layout:'fullwidth'}});
await api('/wp/v2/settings','POST',{show_on_front:'page',page_on_front:hp.id});
log.push('home '+hp.id);
// menus
const m1=await api('/wp/v2/menus','POST',{name:'주 메뉴',locations:['primary','mobile']});
let i=1; for(const c of C.cats){await api('/wp/v2/menu-items','POST',{title:C.menuShort[i-1],type:'taxonomy',object:'category',object_id:catIds[c[0]],menus:m1.id,menu_order:i++,status:'publish'});}
const m2=await api('/wp/v2/menus','POST',{name:'푸터 메뉴',locations:['footer']});
i=1; for(const s of ['about','contact','privacy-policy','terms','disclaimer']){await api('/wp/v2/menu-items','POST',{type:'post_type',object:'page',object_id:pid[s],menus:m2.id,menu_order:i++,status:'publish'});}
log.push('menus '+m1.id+','+m2.id);
// privacy page option
const ph=await fetch('/wp-admin/options-privacy.php').then(r=>r.text()); const pd=new DOMParser().parseFromString(ph,'text/html');
for(const form of pd.querySelectorAll('form')){const a=form.querySelector('input[name=action]'); if(a&&a.value==='set-privacy-page'){const fd=new FormData(form); fd.set('page_for_privacy_policy',String(pid['privacy-policy'])); await fetch('/wp-admin/options-privacy.php',{method:'POST',body:fd});}}
log.push('privacy set');
log
