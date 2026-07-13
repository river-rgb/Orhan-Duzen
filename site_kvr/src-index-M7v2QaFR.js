import { h } from './main-R8k4Lm-Q.js';
import './routeAssumptions-W3f9KqLA.js';

const copy = {
  badge:'Germany casino hotel travel guide',
  title:'A Guide to Casino Hotels and Gaming Stays in Germany',
  intro:"Germany offers a distinctive mix of historic spa-town casinos, modern city hotels and entertainment-focused stays. From elegant venues in Baden-Baden to urban destinations near Berlin, Hamburg and Frankfurt, adult travellers can combine accommodation, dining, culture and licensed gaming in one well-planned trip.",
  sections:[
    ['Germany’s Casino Hotel Tradition','Germany has a long association with refined casino culture, especially in spa towns where grand architecture, formal gaming rooms and high-end hospitality developed together. These destinations often combine historic character with contemporary hotel comforts and carefully managed entertainment.'],
    ['Baden-Baden and Classic Casino Elegance','Baden-Baden is one of Germany’s best-known casino destinations. Visitors are drawn by its elegant setting, thermal baths, luxury hotels, fine dining and cultural attractions, making it suitable for travellers who want more than a nightlife-only experience.'],
    ['Casino Stays in Major German Cities','Berlin, Hamburg, Frankfurt, Munich and other large cities provide hotels close to licensed casinos, theatres, shopping districts and restaurants. In many cases, the hotel and casino are separate but conveniently located within the same central area.'],
    ['Accommodation and Guest Comfort','When choosing a casino-focused stay, compare room quality, transport connections, late check-in, soundproofing, breakfast options and proximity to the venue. A central hotel can make evening plans easier while also providing access to sightseeing during the day.'],
    ['Gaming, Dress Codes and Entry Rules','German casinos may offer roulette, blackjack, poker, slot machines and electronic gaming, but the exact selection varies by venue. Guests should check age requirements, identification rules, dress codes, opening hours and entry fees before arriving.'],
    ['Dining and Entertainment Beyond Gaming','Many casino destinations are surrounded by restaurants, bars, live music, wellness facilities and cultural venues. This allows visitors to plan a complete evening or weekend without making gaming the only focus of the trip.'],
    ['Transport and Regional Planning','Germany’s rail network makes many casino destinations accessible without a car. Travellers should compare train times, local transport, parking and late-night return options, especially when the casino is outside the main hotel district.'],
    ['Responsible and Informed Travel','Casino gaming should be treated as adult entertainment. Set a clear budget, take regular breaks and use only licensed venues. Before booking, confirm official hotel details, local regulations and the most recent visitor requirements directly with the property or casino.']
  ],
  age:'This website is intended for adults aged 18 and over. Please confirm that you are 18+ to continue.',
  confirm:'I confirm I am 18+'
};

function isMobile(){return window.matchMedia('(max-width: 780px), (pointer: coarse)').matches}
function accepted(){return sessionStorage.getItem('age_gate_ok')==='1'}
function buildAgeGate(root){
  if(!isMobile() || accepted()) return;
  const backdrop=h('div',{class:'age-backdrop'},[
    h('div',{class:'age-box'},[
      h('p',{text:copy.age}),
      h('button',{class:'age-button',type:'button',text:copy.confirm})
    ])
  ]);
  backdrop.querySelector('button').addEventListener('click',()=>{sessionStorage.setItem('age_gate_ok','1');backdrop.remove()});
  root.appendChild(backdrop);
}
function input(name,placeholder,type='text'){return h('input',{name,placeholder,type,required:'required'})}
function buildApp(shadow){
  const app=h('div',{class:'app-frame'},[
    h('aside',{class:'sidebar'},[
      h('div',{class:'brand',text:'Germany Stay Guide'}),
      h('nav',{class:'nav'},[
        h('a',{href:'#guide',text:'Guide'}),h('a',{href:'#article',text:'Destinations'}),h('a',{href:'#newsletter',text:'Newsletter'})
      ])
    ]),
    h('main',{class:'main'},[
      h('section',{class:'hero',id:'guide'},[
        h('span',{class:'badge',text:copy.badge}),
        h('h1',{text:copy.title}),
        h('p',{class:'lead',text:copy.intro}),
        h('div',{class:'actions'},[
          h('a',{class:'button primary',href:'#newsletter',text:'Get travel updates'}),
          h('a',{class:'button secondary',href:'#article',text:'Read the guide'})
        ])
      ]),
      h('section',{class:'grid',id:'article'},copy.sections.map(s=>h('article',{class:'card'},[h('h2',{text:s[0]}),h('p',{text:s[1]})]))),
      h('section',{class:'newsletter',id:'newsletter'},[
        h('h2',{text:'Germany casino hotel updates'}),
        h('p',{text:'Receive occasional updates about German hotel stays, casino destinations and city-break planning.'}),
        h('form',{class:'form'},[input('name','Your name'),input('email','Email address','email'),h('button',{type:'submit',text:'Sign Up'})]),
        h('div',{class:'notice',style:'display:none',text:'Thank you. Your signup has been saved on this browser.'})
      ]),
      h('footer',{class:'footer'},[
        h('p',{text:'Independent travel information for adults aged 18+. Check official hotel, casino and local travel information before booking or visiting.'}),
        h('p',{text:'This site is operated by OMD AS.'}),
        h('p',{text:'Torstein Rafgård'}),
        h('p',{text:'Frøyas gate 15'}),
        h('p',{text:'Postboks 1165 Sentrum'}),
        h('p',{text:'0107 Oslo'}),
        h('p',{text:'Norway'}),
        h('p',{},[
          h('a',{href:'https://omnicommedia.com/privacy-notice/',target:'_blank',rel:'noopener',text:'Privacy Policy'})
        ])
      ])
    ])
  ]);
  const form=app.querySelector('form');
  form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const leads=JSON.parse(localStorage.getItem('germany_stay_updates')||'[]');leads.push({...data,createdAt:new Date().toISOString(),page:location.href});localStorage.setItem('germany_stay_updates',JSON.stringify(leads));form.reset();app.querySelector('.notice').style.display='block'});
  shadow.appendChild(app);
  buildAgeGate(shadow);
}

const host=document.getElementById('root');
if(host){
  const closedShadow=host.attachShadow({mode:'closed'});
  const cssLink=document.createElement('link');cssLink.rel='stylesheet';cssLink.href='site_kvr/main-T5pN7xVC.css';closedShadow.appendChild(cssLink);
  buildApp(closedShadow);
}
localStorage.removeItem('entrypoint-chunk-retry-count');
