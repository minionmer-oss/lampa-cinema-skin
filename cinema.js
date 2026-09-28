(function() {
    "use strict";
    var VERSION = "20260929.1";
    var KEY = "cinema_pilot_enabled";
    var STYLE = "body.cinema-pilot { background:#0d1015!important; }\nbody.cinema-pilot .background { opacity:.17!important; }\nbody.cinema-pilot .head { background:linear-gradient(180deg,#11151cf5,#11151c00); }\nbody.cinema-pilot-home { background: #0d1015 !important; }\nbody.cinema-pilot-home .background { opacity: .17 !important; }\nbody.cinema-pilot-home .head { background: linear-gradient(180deg,#11151cf5,#11151c00); }\nbody.cinema-pilot-home .head__logo-icon { color: #eb3948; }\nbody.cinema-pilot-home .head__title { letter-spacing: .12em; font-size: 1.05em; }\nbody.cinema-pilot-home .head__action.focus, body.cinema-pilot-home .head__action.hover { background: #ffffff24; color: #fff; border-radius: .8em; }\n.cinema-home { position: relative; color: #f4f5f7; }\n.cinema-home > .scroll > .scroll__content { padding-top:1em; }\n.cinema-home .cinema-hero { margin:0 var(--cp-pad,1.5em) 2em; }\n.cinema-button svg { width:1.15em; height:1.15em; flex-shrink:0; }\n.cinema-hero { position:relative; min-height:25em; margin:0 0 2em; border:1px solid #ffffff25; border-radius:1.7em; overflow:hidden; background:radial-gradient(ellipse at 85% 30%,#435250,#14191f 75%); isolation:isolate; }\n.cinema-art { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:75% 32%; z-index:-2; }\n.cinema-art[hidden] { display:none; }\n.cinema-shade { position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,#0b1118f5,#0b111898 40%,#0b111810 85%),linear-gradient(0deg,#0b1118ed,transparent 85%); }\n.cinema-hero-label { position:absolute; left:2em; top:1.65em; letter-spacing:.17em; font-size:.65em; font-weight:600; color:#d4d9df; }\n.cinema-hero-label:before { content:''; display:inline-block; width:.5em; height:.5em; background:#e83443; border-radius:50%; margin-right:.7em; vertical-align:middle; }\n.cinema-copy { padding:6.2em 2em 2em; max-width:40em; }\n.cinema-kicker { text-transform:uppercase; letter-spacing:.25em; color:#c5cbd3; font-size:.72em; margin-bottom:1em; }\n.cinema-title { font-weight:600; font-size:3.25em; letter-spacing:-.025em; line-height:1.08; margin:0 0 .4em; overflow-wrap:anywhere; text-shadow:0 2px 22px #0006; }\n.cinema-title--logo { font-size:1em; line-height:1; text-shadow:none; margin-bottom:.9em; }\n.cinema-logo { display:block; width:auto; height:auto; max-width:min(26em,80%); max-height:5.4em; object-fit:contain; object-position:left bottom; filter:drop-shadow(0 .15em .9em #000a); }\n.cinema-meta { display:flex; gap:.85em; flex-wrap:wrap; font-size:.8em; color:#d5d9df; }\n.cinema-rating { color:#f1d59a; }\n.cinema-desc { font-size:.85em; line-height:1.6; color:#c7cdd5; max-width:32em; margin:1.2em 0 1.6em; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }\n.cinema-actions { display:flex; flex-wrap:wrap; gap:.7em; }\n.cinema-button { display:inline-flex; align-items:center; justify-content:center; gap:.7em; padding:.95em 1.35em; min-height:44px; border:1px solid #ffffff30; border-radius:.85em; background:#363e49e0; color:#fff; font-family:inherit; font-size:.85em; cursor:pointer; }\n.cinema-button-primary { background:#de3041; border-color:#ee4151; }\n.cinema-button.focus, .cinema-button.hover, .cinema-button:focus-visible { outline:2px solid #fff; outline-offset:3px; filter:brightness(1.12); }\n.cinema-button[disabled] { opacity:.5; }\n@supports(backdrop-filter:blur(20px)) { .cinema-button:not(.cinema-button-primary) { background:#ffffff13; backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); } }\n@media(max-width:800px) { .cinema-copy { max-width:34em; } .cinema-title { font-size:2.5em; } .cinema-hero { min-height:25em; } }\n@media(max-width:480px) { .cinema-logo { max-height:4.4em; max-width:85%; } .cinema-copy { padding:5.5em 1.3em 1.6em; } .cinema-hero { min-height:26em; } .cinema-title { font-size:2.3em; } .cinema-hero-label { left:1.8em; } .cinema-shade { background:linear-gradient(90deg,#0b1118ce,#0b11185a),linear-gradient(0deg,#0b1118f5,transparent); } }\n@media(prefers-reduced-motion:reduce) { .cinema-home *,body.cinema-pilot-home .head { transition:none!important; animation:none!important; } }\n.cinema-home .cinema-pager { display:flex; justify-content:flex-end; align-items:center; gap:.8em; padding:0 1.5em 1.2em; }\n.cinema-home .cinema-pager[hidden] { display:none; }\n.cinema-home .cinema-pager .cinema-button { min-width:44px; padding:.25em .7em; font-size:1.2em; }\n.cinema-home .cinema-hero { touch-action:pan-y; }\n@media (pointer:coarse) { .cinema-home .cinema-pager { display:none; } }\n.cinema-home .cinema-tv .cinema-pager { display:none; }\n.cinema-home .cinema-tv .cinema-title { display:inline-block; max-width:100%; vertical-align:top; }\n.cinema-home .cinema-tv .cinema-title.focus { outline:2px solid #ffffff80; outline-offset:.15em; border-radius:.15em; }\nbody.cinema-pilot-detail { background:#0d1015!important; }\nbody.cinema-pilot-detail .background { opacity:.12!important; }\nbody.cinema-pilot-detail .head { background:linear-gradient(180deg,#0d1015f5,#0d101500); }\n.cinema-detail { position:relative; isolation:isolate; color:#f4f5f7; background:#0d1015; }\n.cinema-detail > .full-start__background { left:0; top:0; width:100%; height:70vh; object-fit:cover; object-position:70% 20%; opacity:.55; z-index:-1; -webkit-mask-image:linear-gradient(180deg,#000,transparent); mask-image:linear-gradient(180deg,#000,transparent); }\n.cinema-detail > .full-start__background.dim { opacity:.16; }\n.cinema-detail .full-start-new, .cinema-detail .full-start { margin:.7em 1.5em 1.2em; padding:1.6em; border:1px solid #ffffff20; border-radius:1.7em; background:linear-gradient(100deg,#101620ed,#101620b8 65%,#10162072); }\n.cinema-detail .full-start-new__body { align-items:center; }\n.cinema-detail .full-start-new__left { width:11.5em; margin-right:2em; }\n.cinema-detail .full-start-new__right { min-width:0; }\n.cinema-detail .full-start-new__poster { border-radius:1em; box-shadow:0 1em 3em #0005; }\n.cinema-detail .full-start-new__title, .cinema-detail .full-start__title { font-size:3.2em; font-weight:600; line-height:1.12; letter-spacing:-.025em; margin:.2em 0 .5em; max-width:100%; overflow-wrap:anywhere; -webkit-line-clamp:3; }\n.cinema-detail .full-start-new__head { color:#bbc4d1; font-size:1em; }\n.cinema-detail .full-start-new__rate-line { flex-wrap:wrap; gap:.6em 0; margin-bottom:1.2em; }\n.cinema-detail .full-start-new__details { color:#d3dbe5; font-size:1em; line-height:1.5; }\n.cinema-detail .full-start__rate, .cinema-detail .full-start__pg, .cinema-detail .full-start__status { background:#ffffff12; border:1px solid #ffffff25; border-radius:.5em; }\n.cinema-detail .full-start-new__buttons { flex-wrap:wrap; gap:.65em; overflow:visible; }\n.cinema-detail .full-start__button { background:#ffffff13; color:#f4f5f7; border:1px solid #ffffff30; border-radius:.8em; min-height:44px; margin:0; font-size:1.05em; padding:.75em 1em; height:auto; }\n.cinema-detail .full-start__button.button--play { background:#de3041; border-color:#ee4151; }\n.cinema-detail .full-start__button.button--play span { display:inline!important; }\n.cinema-detail .full-start__button.focus, .cinema-detail .full-start__button.hover { outline:2px solid #fff; outline-offset:3px; background:#525e70; color:#fff; }\n.cinema-detail .full-start__button.button--play.focus { background:#ef4051; }\n.cinema-detail .full-descr { margin:0 1.5em 2em; padding:1.8em 2em; border:1px solid #ffffff14; border-radius:1.3em; background:linear-gradient(145deg,#1d2127ed,#121418ed); }\n.cinema-detail .full-descr__text { color:#d3dbe5; font-size:1.1em; line-height:1.65; }\n.cinema-detail .full-descr__line-name { color:#aab5c5; }\n.cinema-detail .full-descr__tag { background:#ffffff12; border-radius:.6em; }\n@media(max-width:900px) {\n .cinema-detail .full-start-new__left { width:11em; margin-right:1.6em; }\n .cinema-detail .full-start-new__title { font-size:2.6em; }\n .cinema-detail .full-start-new, .cinema-detail .full-start, .cinema-detail .full-descr { margin-left:1em; margin-right:1em; padding:1.5em; }\n}\n@media(max-width:580px) {\n .cinema-detail .full-start-new__body { display:block; }\n .cinema-detail .full-start-new__left { width:8em; margin:0 0 1.5em; }\n .cinema-detail .full-start-new__right { margin:0; padding:0; background:none; overflow:visible; }\n .cinema-detail .full-start-new__title { font-size:2.2em; }\n .cinema-detail .full-start-new__buttons { gap:.65em; }\n .cinema-detail .full-descr { display:block; }\n}\n@media(max-width:580px) { .cinema-detail .full-start-new__poster { padding-bottom:150%; } }\n.cinema-detail .full-descr__text { color:#e0e5ed; font-weight:400; max-height:none; overflow:visible; -webkit-mask-image:none; mask-image:none; }\n@media(max-width:580px) {\n .cinema-detail .full-start-new { padding:1.2em; margin-top:.5em; margin-bottom:1.3em; }\n .cinema-detail .full-start-new__body { display:grid; grid-template-columns:6.6em minmax(0,1fr); column-gap:1.2em; row-gap:.45em; align-items:start; }\n .cinema-detail .full-start-new__left { grid-column:1; grid-row:1 / 4; width:100%; margin:0; }\n .cinema-detail .full-start-new__right { display:contents; }\n .cinema-detail .full-start-new__right > * { grid-column:1 / -1; min-width:0; }\n .cinema-detail .full-start-new__head { grid-column:2; grid-row:1; font-size:.85em; margin:0; }\n .cinema-detail .full-start-new__title { grid-column:2; grid-row:2; font-size:1.9em; line-height:1.15; margin:0; -webkit-line-clamp:unset; display:block; overflow:visible; }\n .cinema-detail .full-start-new__tagline { grid-column:2; grid-row:3; font-size:1em; line-height:1.4; margin:0; color:#c5cedb; }\n .cinema-detail .full-start-new__rate-line { margin:.9em 0 .4em; padding:0; }\n .cinema-detail .full-start-new__details { margin:0 -.45em .3em; }\n .cinema-detail .full-start-new__reactions { margin:0 -.5em .3em; min-height:0; }\n .cinema-detail .full-start-new__buttons { margin-top:.3em; gap:.5em; }\n .cinema-detail .full-start__button { padding:.65em .8em; }\n .cinema-detail .full-start-new__img { border-radius:.75em; -webkit-mask-image:none!important; mask-image:none!important; }\n .cinema-detail .full-start-new__poster .card__type { left:.4em; top:.4em; font-size:.75em; }\n .cinema-detail .full-descr { padding:1.3em; }\n}\nbody.cinema-pilot .selectbox__content { background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; box-shadow:0 1em 4em #0006; color:#f4f5f7; }\nbody.cinema-pilot .selectbox__head { padding:1.5em 1.5em .8em; }\nbody.cinema-pilot .selectbox__title { font-size:1.6em; font-weight:500; }\nbody.cinema-pilot .selectbox-item { margin:.4em .8em; padding:1em; min-height:44px; background:#ffffff07; border:1px solid #ffffff13; border-radius:.85em; }\nbody.cinema-pilot .selectbox-item__title { font-size:1.15em; color:#f4f5f7; }\nbody.cinema-pilot .selectbox-item__subtitle { color:#bdc8d8; opacity:1; font-size:.95em; }\nbody.cinema-pilot .selectbox-item.focus { background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .selectbox-item--checkbox { padding-right:4em; }\n@media(max-width:480px) {\n body.cinema-pilot .selectbox__content { border-radius:1.5em 1.5em 0 0; padding-bottom:env(safe-area-inset-bottom,0px); }\n}\nbody.cinema-pilot .search__body { color:#f4f5f7; background:#0d1015; }\nbody.cinema-pilot .search__input { margin:1em 1.5em .9em; padding:.85em 1.1em; min-height:44px; font-size:1.3em; color:#f4f5f7; background:linear-gradient(145deg,#1d2127ed,#121418ed); border:1px solid #ffffff22; border-radius:1em; }\nbody.cinema-pilot .search__input.focus, body.cinema-pilot .search-box--focus .search__input { border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .search-box { background:#0d1015f2; }\nbody.cinema-pilot .search__keypad { margin:0 1.5em 1.4em; }\nbody.cinema-pilot .search__keypad .simple-keyboard, body.cinema-pilot .search-box__keypad .simple-keyboard { background:#141a24e8; border:1px solid #ffffff14; border-radius:1.2em; padding:.7em; }\nbody.cinema-pilot .search__keypad .hg-button, body.cinema-pilot .search-box__keypad .hg-button { min-height:44px; color:#e6ebf2; background:#ffffff0f; border:1px solid #ffffff1a; border-radius:.65em; }\nbody.cinema-pilot .search__keypad .hg-button.focus, body.cinema-pilot .search__keypad .hg-button.hover, body.cinema-pilot .search-box__keypad .hg-button.focus, body.cinema-pilot .search-box__keypad .hg-button.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\nbody.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin:0 1.5em 1.4em; }\nbody.cinema-pilot .search-history-key { display:inline-flex; align-items:center; margin:.35em .45em .35em 0; padding:.55em 1em; min-height:44px; color:#d3dbe5; background:#ffffff0d; border:1px solid #ffffff1a; border-radius:2em; }\nbody.cinema-pilot .search-history-key.focus, body.cinema-pilot .search-history-key.hover { background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .search-source { display:inline-flex; align-items:center; gap:.6em; margin:.35em .5em .35em 0; padding:.55em 1em; min-height:44px; color:#d3dbe5; background:#ffffff0d; border:1px solid #ffffff1a; border-radius:.9em; }\nbody.cinema-pilot .search-source__tab { font-size:1.05em; }\nbody.cinema-pilot .search-source__count { min-width:2em; padding:.1em .5em; text-align:center; font-size:.9em; color:#0d1015; background:#8f9bad; border-radius:1em; }\nbody.cinema-pilot .search-source.focus, body.cinema-pilot .search-source.hover { background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .search-source.focus .search-source__count { background:#f2f4f6; color:#0d1015; }\nbody.cinema-pilot .search-source--loading .search-source__count { opacity:.5; }\nbody.cinema-pilot .search-looking { padding:3em 1.5em; }\nbody.cinema-pilot .search-looking__text { color:#aab5c5; font-size:1.2em; line-height:1.6; }\nbody.cinema-pilot .search__results .items-line__head { margin-bottom:.6em; }\nbody.cinema-pilot .search__results .items-line__title { font-size:1.5em; font-weight:500; color:#f4f5f7; letter-spacing:-.015em; }\nbody.cinema-pilot .search__results .items-line__more { color:#bdc8d8; background:#ffffff0f; border:1px solid #ffffff1c; border-radius:.7em; padding:.4em .9em; min-height:44px; display:inline-flex; align-items:center; }\nbody.cinema-pilot .search__results .items-line__more.focus, body.cinema-pilot .search__results .items-line__more.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n@media(max-width:900px) {\n body.cinema-pilot .search__input { margin-left:1em; margin-right:1em; font-size:1.2em; }\n body.cinema-pilot .search__keypad, body.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin-left:1em; margin-right:1em; }\n body.cinema-pilot .search__results .items-line__title { font-size:1.3em; }\n}\n@media(max-width:580px) {\n body.cinema-pilot .search__input { margin:.7em .8em; padding:.7em .9em; font-size:1.15em; border-radius:.9em; }\n body.cinema-pilot .search__keypad { margin:0 .8em 1em; }\n body.cinema-pilot .search__keypad .simple-keyboard, body.cinema-pilot .search-box__keypad .simple-keyboard { padding:.45em; border-radius:1em; }\n body.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin:0 .8em 1em; }\n body.cinema-pilot .search-history-key, body.cinema-pilot .search-source { padding:.5em .85em; }\n body.cinema-pilot .search__results { padding-bottom:env(safe-area-inset-bottom,0px); }\n}\n@media(prefers-reduced-motion:reduce) { body.cinema-pilot .search__body * { transition:none!important; animation:none!important; } }\nbody.cinema-pilot-catalog { background:#0d1015!important; }\nbody.cinema-pilot-catalog .background { opacity:.17!important; }\nbody.cinema-pilot-catalog .head { background:linear-gradient(180deg,#11151cf5,#11151c00); }\n.cinema-rows { color:#f4f5f7; --cp-gap:1em; --cp-pad:1.5em; }\n.cinema-rows .items-line { padding-bottom:2.2em; }\n.cinema-rows .items-line__head, .cinema-home .items-line__head { padding-left:var(--cp-pad,1.5em); padding-right:var(--cp-pad,1.5em); margin-bottom:.9em; gap:1em; }\n.cinema-rows .items-line__title, .cinema-home .items-line__title { font-size:1.35em; font-weight:600; letter-spacing:-.01em; font-size:max(17px,1.35em); line-height:1.25; color:#f4f5f7; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\n.cinema-rows .items-line__title .full-person, .cinema-home .items-line__title .full-person { background:none; padding:0; }\n.cinema-rows .items-line__title .full-person__photo, .cinema-home .items-line__title .full-person__photo { width:1.7em; height:1.7em; border-radius:50%; }\n.cinema-rows .items-line__more, .cinema-home .items-line__more { flex-shrink:0; margin-left:0; display:inline-flex; align-items:center; min-height:44px; padding:.35em 1.3em; font-size:13px; font-size:max(13px,.9em); color:#d3dbe5; background:#ffffff0f; border:1px solid #ffffff1f; border-radius:.8em; }\n.cinema-rows .items-line__more.focus, .cinema-rows .items-line__more.hover, .cinema-home .items-line__more.focus, .cinema-home .items-line__more.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .card__view, .cinema-home .card__view { margin-bottom:.7em; }\n.cinema-rows .card__img { border-radius:.9em; object-fit:cover; background-color:#1e2630; }\n.cinema-rows .card__title, .cinema-home .card__title { font-size:13px; font-size:max(13px,1em); line-height:1.3; font-weight:500; color:#eef1f5; max-height:2.6em; -webkit-line-clamp:2; line-clamp:2; }\n.cinema-rows .card__age, .cinema-home .card__age { margin-top:.3em; font-size:11px; font-size:max(11px,.8em); color:#a1aaba; }\n.cinema-rows .card__vote, .cinema-home .card__vote { right:.45em; bottom:.45em; padding:.2em .5em; font-size:12px; font-size:max(12px,.85em); font-weight:600; color:#f1d59a; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.55em; }\n.cinema-rows .card__type { border-radius:.45em; }\n.cinema-rows .card--wide .card__promo-title { font-size:1.35em; font-weight:600; }\n.cinema-rows .card--wide .card__promo-text { color:#c7cdd5; }\n.cinema-rows .card.focus .card__view:after, .cinema-rows .card.hover .card__view:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-rows .card.hover .card__view:after { border-color:#f2f4f680; }\n.cinema-rows .card.focus .card__title { color:#fff; }\n.cinema-rows .card-more__box { background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.9em; }\n.cinema-rows .card-more__title { font-size:1.2em; font-weight:500; color:#d3dbe5; }\n.cinema-rows .card-more.focus .card-more__box:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-radius:1.2em; }\n.cinema-rows .items-line .card + .card, .cinema-rows .items-line .card + .card-more { margin-left:var(--cp-gap); }\n@supports (container-type:inline-size) {\n .cinema-rows .items-line__body { container-type:inline-size; --cp-cols:2.55; --cp-gaps:2; }\n .cinema-rows .items-line .card:not(.card--wide):not(.card--collection):not(.card--category):not(.card--explorer), .cinema-rows .items-line .card-more:not(.card-more--first) { width:calc((100cqw - var(--cp-pad) - var(--cp-gap) * var(--cp-gaps)) / var(--cp-cols)); }\n .cinema-rows .items-line .card--wide { width:calc((100cqw - var(--cp-pad) - var(--cp-gap) * var(--cp-gaps)) / var(--cp-cols) * 2 + var(--cp-gap)); }\n @container (min-width:480px) { .cinema-rows .items-line__body > * { --cp-cols:3.45; --cp-gaps:3; } }\n @container (min-width:680px) { .cinema-rows .items-line__body > * { --cp-cols:4.4; --cp-gaps:4; } }\n @container (min-width:900px) { .cinema-rows .items-line__body > * { --cp-cols:5.35; --cp-gaps:5; } }\n @container (min-width:1200px) { .cinema-rows .items-line__body > * { --cp-cols:6.3; --cp-gaps:6; } }\n @container (min-width:1600px) { .cinema-rows .items-line__body > * { --cp-cols:7.3; --cp-gaps:7; } }\n .cinema-rows .mapping--grid { container-type:inline-size; }\n .cinema-rows .mapping--grid > .card { width:33.333%; }\n @container (min-width:480px) { .cinema-rows .mapping--grid > .card { width:25%; } }\n @container (min-width:680px) { .cinema-rows .mapping--grid > .card { width:20%; } }\n @container (min-width:900px) { .cinema-rows .mapping--grid > .card { width:16.666%; } }\n @container (min-width:1200px) { .cinema-rows .mapping--grid > .card { width:14.285%; } }\n @container (min-width:1600px) { .cinema-rows .mapping--grid > .card { width:12.5%; } }\n}\n.cinema-rows .mapping--grid { padding:0 calc(var(--cp-pad) - .5em); }\n.cinema-rows .mapping--grid > .card { padding:0 .5em 1.4em; }\n@media(max-width:580px) {\n .cinema-rows { --cp-pad:1.2em; --cp-gap:.9em; }\n .cinema-rows .items-line { padding-bottom:1.6em; }\n}\n.cinema-rows .register { min-height:44px; padding:.9em 1.1em; background:#ffffff0d; border:1px solid #ffffff1c; border-radius:1em; }\n.cinema-rows .register__name { font-size:13px; font-size:max(13px,1em); color:#bdc8d8; }\n.cinema-rows .register__counter { color:#f4f5f7; }\n.cinema-rows .register__chart > div { background-color:#ffffffb0; }\n.cinema-rows .register__chart-bar--threshold { background-color:#de3041!important; }\n.cinema-rows .register.focus, .cinema-rows .register.hover { background:#ffffff1c; border-color:#ffffff40; }\n.cinema-rows .register.focus:after { border-color:#f2f4f6; border-radius:1.3em; }\n.cinema-rows .bookmarks-folder__layer { background:linear-gradient(160deg,#243041,#151b25); border:1px solid #ffffff1f; border-radius:.9em; overflow:hidden; }\n.cinema-rows .bookmarks-folder__body { background:#ffffff08; border-radius:.9em .9em 0 0; }\n.cinema-rows .bookmarks-folder__body .card__img { border-radius:.7em .7em 0 0; }\n.cinema-rows .bookmarks-folder__title { font-size:15px; font-size:max(15px,1.25em); font-weight:600; color:#f4f5f7; }\n.cinema-rows .bookmarks-folder__num { font-size:13px; font-size:max(13px,1em); font-weight:500; color:#bdc8d8; }\n.cinema-rows .card__marker, .cinema-home .card__marker { left:.45em; bottom:.45em; padding:.25em .55em .25em .35em; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.55em; }\n.cinema-rows .card__marker:before, .cinema-home .card__marker:before { width:.7em; height:.7em; }\n.cinema-rows .card__marker > span, .cinema-home .card__marker > span { font-size:11px; font-size:max(11px,.8em); max-width:6.5em; color:#eef1f5; }\n.cinema-rows .card__icons-inner, .cinema-home .card__icons-inner { background:#0d1015c0; border:1px solid #ffffff1f; }\n.cinema-rows .card--wide .card__marker, .cinema-home .card--wide .card__marker { top:.45em; right:.45em; bottom:auto; left:auto; }\n.cinema-rows .card__type, .cinema-home .card__type { left:.45em; top:.45em; border-radius:.45em; }\n.cinema-rows .time-line, .cinema-home .time-line, body.cinema-pilot-detail .time-line { background-color:#ffffff30; }\n.cinema-rows .time-line > div, .cinema-home .time-line > div, body.cinema-pilot-detail .time-line > div { background-color:#de3041; }\n.cinema-rows .card-watched, .cinema-home .card-watched { background-color:#0d1015e8; border:1px solid #ffffff1f; border-radius:.8em; }\nbody.cinema-pilot .empty { padding:2em var(--cp-pad,1.5em); }\nbody.cinema-pilot .empty__icon { opacity:.85; }\nbody.cinema-pilot .empty__title { font-size:20px; font-size:max(20px,2em); font-weight:600; letter-spacing:-.015em; color:#f4f5f7; }\nbody.cinema-pilot .empty__descr { max-width:34em; margin-left:auto; margin-right:auto; font-size:14px; font-size:max(14px,1.15em); color:#aab5c5; }\nbody.cinema-pilot .empty .simple-button { min-height:44px; height:auto; padding:.6em 1.4em; font-size:14px; font-size:max(14px,1.05em); color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.85em; }\nbody.cinema-pilot .empty .simple-button.focus, body.cinema-pilot .empty .simple-button.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n@media(max-width:580px) {\n body.cinema-pilot .empty__icon svg, body.cinema-pilot .empty__icon img { width:15em!important; height:9.5em!important; margin-bottom:1.6em; }\n}\nbody.cinema-pilot .cinema-rows .card .card__vote, body.cinema-pilot-home .cinema-home .card .card__vote,\nbody.cinema-pilot .cinema-rows .card .card__marker, body.cinema-pilot-home .cinema-home .card .card__marker { background-color:#0d1015c8; }\nbody.cinema-pilot .cinema-rows .card .card__icons-inner, body.cinema-pilot-home .cinema-home .card .card__icons-inner { background-color:#0d1015b0; }\nbody.cinema-pilot .cinema-rows .card .card__icons-inner:empty, body.cinema-pilot-home .cinema-home .card .card__icons-inner:empty { display:none; }\nbody.cinema-pilot .cinema-rows .card .card-watched, body.cinema-pilot-home .cinema-home .card .card-watched { background-color:#0d1015e0; }\nbody.cinema-pilot .cinema-rows .card-more .card-more__box { background-color:#ffffff0a; }\nbody.cinema-pilot .cinema-rows .bookmarks-folder .bookmarks-folder__layer { background:linear-gradient(160deg,#243041,#151b25); }\nbody.cinema-pilot .cinema-rows .register { background-color:#ffffff0d; }\nbody.cinema-pilot .cinema-rows .register.focus { background-color:#ffffff1c; }\nbody.cinema-pilot .cinema-rows .items-line__more, body.cinema-pilot-home .cinema-home .items-line__more { background-color:#ffffff0f; }\nbody.cinema-pilot .cinema-rows .items-line__more.focus, body.cinema-pilot .cinema-rows .items-line__more.hover,\nbody.cinema-pilot-home .cinema-home .items-line__more.focus, body.cinema-pilot-home .cinema-home .items-line__more.hover { background-color:#ffffff2e; }\nbody.cinema-pilot .menu { background:#171c25f0; border:1px solid #ffffff1c; border-radius:1.4em; }\n.cinema-rows .full-episode__img { border-radius:.9em; }\n.cinema-rows .full-episode:not(.full-episode--loaded) .full-episode__img { background-color:#ffffff0d; }\n.cinema-rows .full-episode__img img { border-radius:.9em; object-fit:cover; }\n.cinema-rows .full-episode__body { padding:.8em .9em; border-radius:.9em; background:linear-gradient(0deg,#0d1015f0,#0d101580 55%,#0d101510); }\n.cinema-rows .full-episode__num { margin-bottom:.25em; font-size:1.5em; font-weight:600; line-height:1; color:#f4f5f7; }\n.cinema-rows .full-episode__name { font-size:13px; font-size:max(13px,1.05em); font-weight:500; color:#eef1f5; }\n.cinema-rows .full-episode__date { margin-top:.3em; font-size:11px; font-size:max(11px,.8em); color:#a1aaba; }\n.cinema-rows .full-episode--next .full-episode__body { background:none; }\n.cinema-rows .card-more--first { display:flex; width:6.4em!important; align-self:center; }\n.cinema-rows .card-more--first .card-more__box { height:6.4em!important; border-radius:50%; }\n.cinema-rows .card-more--first .card-more__title { top:50%; left:0; right:0; margin:0; transform:translateY(-50%); font-size:1em; line-height:1.1; }\n.cinema-rows .card-more--first .card-more__title:after { content:'\\203A'; display:block; font-size:1.8em; line-height:.9; color:#f4f5f7; }\n.cinema-rows .card-more--first.focus .card-more__box:after { border-radius:50%; }\n.cinema-rows .full-episode--next .full-episode__img:after { border:.15em dashed #ffffff38; border-radius:.9em; }\n.cinema-rows .full-episode.focus:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-rows .items-line__body .full-person { padding:.45em 1.3em .45em .45em; font-size:1em; color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff17; border-radius:1em; }\n.cinema-rows .items-line__body .full-person + .full-person { margin-left:var(--cp-gap); }\n.cinema-rows .items-line__body .full-person__photo { width:4.8em; height:4.8em; margin-right:.9em; border-radius:.75em; background-color:#1e2630; }\n.cinema-rows .items-line__body .full-person__photo img[src$=\"actor.svg\"] { filter:invert(1); opacity:.55; }\n.cinema-rows .items-line__body .full-person__name { font-size:14px; font-size:max(14px,1.15em); font-weight:500; }\n.cinema-rows .items-line__body .full-person__role { margin-top:.3em; font-size:12px; font-size:max(12px,.9em); color:#aab5c5; }\n.cinema-rows .items-line__body .full-person.focus, .cinema-rows .items-line__body .full-person.hover { color:#fff; background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .full-review { color:#e6ebf2; background:#ffffff0a; border:1px solid #ffffff17; border-radius:1em; }\n.cinema-rows .full-review__user-email, .cinema-rows .full-review__like { color:#bdc8d8; }\n.cinema-rows .full-review.focus, .cinema-rows .full-review.hover { color:#fff; background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .full-review.focus .full-review__user-email, .cinema-rows .full-review.focus .full-review__like { color:#fff; }\n.cinema-rows .full-review-add { background:#ffffff05; border:.15em dashed #ffffff40; border-radius:1em; }\n.cinema-rows .full-review-add.focus:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-detail .tag-count { background:#ffffff0d; border:1px solid #ffffff1a; }\n.cinema-detail .tag-count__count { color:#f4f5f7; background:#ffffff24; }\n.cinema-detail .tag-count.focus, .cinema-detail .tag-count.hover { color:#fff; background:#ffffff26; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-detail .tag-count.focus .tag-count__count { color:#0d1015; background:#f2f4f6; }\n.cinema-detail .full-start-new__title.cinema-title--logo { font-size:1em; line-height:1; display:block; overflow:visible; -webkit-line-clamp:unset; margin:.35em 0 .8em; }\n.cinema-detail .full-start-new__title .cinema-logo { max-width:min(26em,100%); max-height:5.5em; object-position:left center; }\n@media(max-width:580px) { .cinema-detail .full-start-new__title .cinema-logo { max-height:4.6em; } }\n.cinema-rows .person-start { box-sizing:border-box; padding:1.6em; color:#f4f5f7; border:1px solid #ffffff20; border-radius:1.7em; background:linear-gradient(100deg,#101620ed,#101620b8 65%,#10162072); }\n@supports (container-type:inline-size) { .cinema-rows .person-start { width:calc(100cqw - var(--cp-pad,1.5em) * 2); } }\n.cinema-rows .person-start__img { border-radius:1em; object-fit:cover; box-shadow:0 1em 3em #0005; background:#1e2630; }\n.cinema-rows .person-start__left { min-width:0; }\n.cinema-rows .person-start__tags { margin-bottom:1em; }\n.cinema-rows .person-start__tag { padding:.3em .75em; color:#d3dbe5; background:#ffffff12; border:1px solid #ffffff25; border-radius:.6em; }\n.cinema-rows .person-start__tag > img { filter:invert(1); opacity:.8; }\n.cinema-rows .person-start__name { font-size:2.8em; font-weight:600; line-height:1.1; letter-spacing:-.025em; overflow-wrap:anywhere; }\n.cinema-rows .person-start__place { font-size:1.25em; font-weight:400; color:#bbc4d1; }\n.cinema-rows .person-start__descr, .cinema-rows .person-start__descr-mobile { color:#d3dbe5; font-weight:400; }\n.cinema-rows .person-start__bottom { flex-wrap:wrap; gap:.65em; }\n.cinema-rows .person-start .full-start__button { height:auto; min-height:44px; margin:0; padding:.75em 1em; font-size:1.05em; color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; }\n.cinema-rows .person-start .full-start__button.focus, .cinema-rows .person-start .full-start__button.hover { color:#fff; background:#525e70; outline:2px solid #fff; outline-offset:3px; }\n@media(max-width:580px) {\n .cinema-rows .person-start { padding:1.2em; border-radius:1.4em; }\n .cinema-rows .person-start__img { width:7.5em; height:10em; }\n .cinema-rows .person-start__left { padding-left:1.2em; }\n .cinema-rows .person-start__name { font-size:1.9em; }\n .cinema-rows .person-start__place { font-size:1.1em; }\n}\nbody.cinema-pilot .settings__content { background:linear-gradient(145deg,#1d2127,#121418); border-left:1px solid #ffffff24; box-shadow:0 1em 4em #0006; color:#f4f5f7; }\nbody.cinema-pilot .settings__head { padding-bottom:.6em; }\nbody.cinema-pilot .settings__title { font-weight:500; }\nbody.cinema-pilot .settings-folder, body.cinema-pilot .settings-param { margin:.35em .8em; padding:1em 1.1em; min-height:44px; background:#ffffff07; border:1px solid #ffffff13; border-radius:.85em; }\nbody.cinema-pilot .settings-folder__icon { opacity:.85; }\nbody.cinema-pilot .settings-folder__name { font-size:1.25em; }\nbody.cinema-pilot .settings-param__name { font-size:1.2em; color:#f4f5f7; }\nbody.cinema-pilot .settings-param__value { color:#bdc8d8; }\nbody.cinema-pilot .settings-param__descr { opacity:1; color:#aab5c5; }\nbody.cinema-pilot .settings-param-title { padding:1.2em 1.9em .4em; }\nbody.cinema-pilot .settings-param-title > span { font-size:.95em; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#8f9bad; }\nbody.cinema-pilot .settings-folder.focus, body.cinema-pilot .settings-param.focus, body.cinema-pilot .settings-folder.hover, body.cinema-pilot .settings-param.hover { color:#fff; background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .settings-folder.focus .settings-folder__icon, body.cinema-pilot .settings-param.focus .settings-folder__icon { opacity:1; }\nbody.cinema-pilot .feed-head { border-radius:1.2em; }\nbody.cinema-pilot .feed-head.focus, body.cinema-pilot .feed-head.hover { outline:2px solid #f2f4f6; outline-offset:.5em; }\nbody.cinema-pilot .feed-head__info { color:#bdc8d8; }\nbody.cinema-pilot .feed-item__label { border-radius:.45em; font-weight:500; }\nbody.cinema-pilot .feed-item__descr { color:#d3dbe5; }\nbody.cinema-pilot .feed-item__info { color:#a1aaba; }\nbody.cinema-pilot .feed-item__image-img, body.cinema-pilot .feed-item__poster-img { border-radius:1em; object-fit:cover; }\nbody.cinema-pilot .feed-item__minicard-poster { filter:drop-shadow(0 1em 2em #0009); }\nbody.cinema-pilot .feed-item__buttons { flex-wrap:wrap; gap:.65em; }\nbody.cinema-pilot .feed-item__buttons .simple-button { margin:0; height:auto; min-height:44px; padding:.6em 1.3em; font-size:1.05em; color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; }\nbody.cinema-pilot .feed-item__buttons .simple-button:first-child { background:#de3041; border-color:#ee4151; }\nbody.cinema-pilot .feed-item__buttons .simple-button.focus, body.cinema-pilot .feed-item__buttons .simple-button.hover { color:#fff; background:#525e70; outline:2px solid #fff; outline-offset:3px; }\nbody.cinema-pilot .feed-item__buttons .simple-button:first-child.focus, body.cinema-pilot .feed-item__buttons .simple-button:first-child.hover { background:#ef4051; }\nbody.cinema-pilot .explorer__card { padding:1em 1em 1.5em 1.5em; }\nbody.cinema-pilot .explorer-card { position:relative; padding:1.3em; overflow:hidden; border:1px solid #ffffff1f; border-radius:1.4em; background:linear-gradient(180deg,#0d101520 0,#0d101580 9em,#0d1015f2 17em,#0d1015f5 100%),var(--cinema-backdrop,none) center top/100% auto no-repeat,#151b25; }\nbody.cinema-pilot .explorer-card__head { margin-bottom:1.6em; }\nbody.cinema-pilot .explorer-card__head-img > img { border-radius:.7em; box-shadow:0 .8em 2em #0008; object-fit:cover; }\nbody.cinema-pilot .explorer-card__head-img.focus::after { border-color:#f2f4f6; border-width:.22em; border-radius:1em; }\nbody.cinema-pilot .explorer-card__head-create { color:#d3dbe5; }\nbody.cinema-pilot .explorer-card__head-rate > svg { color:#f1d59a; }\nbody.cinema-pilot .explorer-card__head-rate > span { color:#f1d59a; }\nbody.cinema-pilot .explorer-card__head-age { border-color:#ffffff40; border-radius:.45em; color:#d3dbe5; }\nbody.cinema-pilot .explorer-card__title { font-weight:600; letter-spacing:-.02em; }\nbody.cinema-pilot .explorer-card__title.cinema-title--logo { font-size:1em; line-height:1; margin-bottom:.8em; }\nbody.cinema-pilot .explorer-card__title .cinema-logo { max-width:100%; max-height:6em; object-position:left center; }\nbody.cinema-pilot .explorer-card__genres { color:#bdc8d8; margin-bottom:1.2em; }\nbody.cinema-pilot .explorer-card__descr { color:#c7cdd5; }\nbody.cinema-pilot .explorer__files .torrent-filter { gap:.6em; margin-bottom:.4em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button { margin:0; height:auto; min-height:44px; padding:.35em .5em .35em .9em; font-size:1em; color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.8em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > span { margin:0 .6em 0 0; font-size:.8em; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#8f9bad; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > div:not(.hide) { margin:0; padding:.35em .75em; font-size:.95em; color:#f4f5f7; background:#ffffff17; border-radius:.55em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > svg { margin-right:.5em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button.focus, body.cinema-pilot .explorer__files .torrent-filter .simple-button.hover { color:#fff; background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button.focus > span { color:#f4f5f7; }\nbody.cinema-pilot .explorer .watched-history { background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .explorer .watched-history.focus, body.cinema-pilot .explorer .watched-history.hover { background:#ffffff14; border-color:#f2f4f6; }\nbody.cinema-pilot .explorer .watched-history.focus:after { top:-.3em; left:-.3em; right:-.3em; bottom:-.3em; border:.2em solid #f2f4f6; border-radius:1.25em; }\nbody.cinema-pilot .explorer .torrent-item { padding:1.1em 1.2em; background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .explorer .torrent-item + .torrent-item { margin-top:.7em; }\nbody.cinema-pilot .explorer .torrent-item__title { font-size:1.15em; font-weight:500; line-height:1.35; color:#eef1f5; word-break:normal; overflow-wrap:anywhere; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div { background:#ffffff12; border:1px solid #ffffff1f; border-radius:.5em; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general { font-size:1em; outline:none; border-color:#ffffff30; border-radius:.6em; overflow:hidden; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general > div:nth-child(1) { padding:.45em .65em; font-size:1em; font-weight:700; background:#ffffff26; border-radius:0; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general > div:nth-child(2) { padding:.45em .7em; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-resolution { background:#ffffff1c; box-shadow:none; }\nbody.cinema-pilot .explorer .torrent-item__details { color:#a1aaba; font-weight:500; }\nbody.cinema-pilot .explorer .torrent-item__seeds > span { color:#7ee2a8; background:#1f7a4d4d; border-radius:.4em; }\nbody.cinema-pilot .explorer .torrent-item__grabs > span { color:#d3dbe5; background:#ffffff17; border-radius:.4em; }\nbody.cinema-pilot .explorer .torrent-item__size { color:#fff; background:#ffffff1f; border:1px solid #ffffff38; border-radius:.5em; }\nbody.cinema-pilot .explorer .torrent-item.focus, body.cinema-pilot .explorer .torrent-item.hover { background:#ffffff12; border-color:#f2f4f6; }\nbody.cinema-pilot .explorer .torrent-item.focus:after { top:-.3em; left:-.3em; right:-.3em; bottom:-.3em; border:.2em solid #f2f4f6; border-radius:1.25em; }\nbody.cinema-pilot .explorer .torrent-item__viewed { background:#de3041; color:#fff; }\nbody.cinema-pilot .modal__content { color:#f4f5f7; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1.4em; box-shadow:0 1em 4em #0008; }\nbody.cinema-pilot .modal__title { font-weight:500; letter-spacing:-.01em; }\nbody.cinema-pilot .torrent-files .torrent-serial, body.cinema-pilot .torrent-files .torrent-file { overflow:hidden; background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .torrent-files .torrent-serial + .torrent-serial, body.cinema-pilot .torrent-files .torrent-file + .torrent-file { margin-top:.7em; }\nbody.cinema-pilot .torrent-files .torrent-serial__img { border-radius:0; object-fit:cover; }\nbody.cinema-pilot .torrent-files .torrent-serial__episode { left:.45em; top:.45em; padding:.2em .55em; font-size:1.15em; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.5em; }\nbody.cinema-pilot .torrent-files .torrent-serial__title { font-size:1.4em; font-weight:500; color:#eef1f5; }\nbody.cinema-pilot .torrent-files .torrent-serial__line { color:#aab5c5; font-weight:400; }\nbody.cinema-pilot .torrent-files .torrent-serial__line b { color:#d3dbe5; }\nbody.cinema-pilot .torrent-files .torrent-serial__size, body.cinema-pilot .torrent-files .torrent-file__size { font-size:1.1em; color:#fff; background:#ffffff1c; border:1px solid #ffffff30; border-radius:.5em; }\nbody.cinema-pilot .torrent-files .torrent-serial__exe { font-size:1em; color:#8f9bad; }\nbody.cinema-pilot .torrent-files .time-line { background-color:#ffffff30; }\nbody.cinema-pilot .torrent-files .time-line > div { background-color:#de3041; }\nbody.cinema-pilot .torrent-files .torrent-serial.focus, body.cinema-pilot .torrent-files .torrent-serial.hover, body.cinema-pilot .torrent-files .torrent-file.focus, body.cinema-pilot .torrent-files .torrent-file.hover { background:#ffffff14; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .torrent-files .torrnet-folder-name { color:#bdc8d8; opacity:1; }\n@supports (aspect-ratio:16/9) {\n body.cinema-pilot .torrent-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(14em,1fr)); gap:1em; }\n body.cinema-pilot .torrent-files .torrnet-folder-name, body.cinema-pilot .torrent-files .torrent-file { grid-column:1/-1; padding:.4em 0 0; }\n body.cinema-pilot .torrent-files .tracks-metainfo, body.cinema-pilot .torrent-files .tracks-loading { grid-column:1/-1; }\n body.cinema-pilot .torrent-files .torrent-serial + .torrent-serial { margin-top:0; }\n body.cinema-pilot .torrent-files .torrent-serial { display:block; position:relative; padding-bottom:0; aspect-ratio:16/9; background:#1e2630; }\n body.cinema-pilot .torrent-files .torrent-serial__img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border-radius:0; }\n body.cinema-pilot .torrent-files .torrent-serial__content { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-end; padding:.7em .8em .65em; overflow:hidden; background:linear-gradient(0deg,#0d1015f0 0%,#0d1015a0 38%,#0d101500 70%); }\n body.cinema-pilot .torrent-files .torrent-serial__body { float:none; max-width:none; margin:0; }\n body.cinema-pilot .torrent-files .torrent-serial__title { font-size:1.1em; line-height:1.25; font-weight:600; color:#fff; white-space:normal; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; text-shadow:0 1px .6em #000a; }\n body.cinema-pilot .torrent-files .torrent-serial__line, body.cinema-pilot .torrent-files .torrent-serial__exe, body.cinema-pilot .torrent-files .torrent-serial__clear { display:none; }\n body.cinema-pilot .torrent-files .torrent-serial__detail { position:absolute; top:.5em; right:.5em; float:none; margin:0; }\n body.cinema-pilot .torrent-files .torrent-serial__size { font-size:.85em; padding:.15em .5em; background:#0d1015c8; border-color:#ffffff30; }\n body.cinema-pilot .torrent-files .torrent-serial__size:empty { display:none; }\n body.cinema-pilot .torrent-files .torrent-serial__episode { left:.5em; top:.5em; font-size:.95em; }\n body.cinema-pilot .torrent-files .torrent-serial .time-line { position:static; width:auto; top:auto; left:auto; margin-top:.5em; height:.25em; }\n body.cinema-pilot .torrent-files .torrent-serial .time-line > div { height:.25em; }\n}\nbody.cinema-pilot .modal:has(.torrent-files):not(.cinema-files-logo) .modal__head { display:none; }\nbody.cinema-pilot .modal.cinema-files-logo .modal__title.cinema-title--logo { font-size:1em; line-height:1; }\nbody.cinema-pilot .modal.cinema-files-logo .modal__title .cinema-logo { max-width:min(24em,70%); max-height:3.6em; object-position:left center; }\nbody.cinema-pilot .torrent-files .torrnet-folder-name { font-size:1em; line-height:1.35; padding:0 0 .2em; color:#8f9bad; }\n@media screen and (max-width:480px) {\n body.cinema-pilot .modal:has(.torrent-files) .modal__content { display:flex; flex-direction:column; box-sizing:border-box; max-height:calc(100vh - max(2.5em, env(safe-area-inset-top) + 1em)); max-height:calc(100dvh - max(2.5em, env(safe-area-inset-top) + 1em)); }\n body.cinema-pilot .modal:has(.torrent-files) .modal__head { flex:none; }\n body.cinema-pilot .modal:has(.torrent-files) .modal__body, body.cinema-pilot .modal:has(.torrent-files) .modal__body > .scroll { display:flex; flex-direction:column; flex:1 1 auto; min-height:0; }\n body.cinema-pilot .modal:has(.torrent-files) .modal__body .scroll__content { flex:1 1 auto; min-height:0; max-height:none !important; }\n}\nbody.cinema-pilot .tracks-metainfo__label { font-size:.85em; letter-spacing:.08em; text-transform:uppercase; color:#8f9bad; opacity:1; }\nbody.cinema-pilot .tracks-metainfo__info > div { color:#e6ebf2; background:#ffffff08; border:1px solid #ffffff14; border-radius:.8em; }\nbody.cinema-pilot .tracks-metainfo__info > div.focus, body.cinema-pilot .tracks-metainfo__info > div.hover { background:#ffffff14; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .tracks-metainfo__column--num, body.cinema-pilot .tracks-metainfo__column--rate, body.cinema-pilot .tracks-metainfo__column--channels, body.cinema-pilot .tracks-metainfo__column--codec { color:#aab5c5; }\nbody.cinema-pilot .tracks-metainfo__column--lang { font-weight:600; }\nbody.cinema-pilot .tracks-metainfo__item[data-cinema-track] > [class*=\"tracks-metainfo__column\"] { display:none; }\nbody.cinema-pilot .tracks-metainfo__line + .tracks-metainfo__line { margin-top:1.4em; }\nbody.cinema-pilot .tracks-metainfo__info { padding-top:.6em; }\nbody.cinema-pilot .tracks-metainfo__info > div + div { margin-top:.5em; }\nbody.cinema-pilot .tracks-metainfo__info > .tracks-metainfo__item[data-cinema-track] { display:flex; flex-wrap:nowrap; }\nbody.cinema-pilot .cinema-track { display:flex; align-items:center; gap:.7em; width:100%; min-width:0; padding:.8em 1em; }\nbody.cinema-pilot .cinema-track__name { flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:1.1em; font-weight:500; color:#fff; }\nbody.cinema-pilot .cinema-track__meta { flex-shrink:0; font-size:.9em; color:#8f9bad; white-space:nowrap; }\nbody.cinema-pilot .cinema-track__pick { display:none; flex-shrink:0; padding:.15em .55em; font-size:.75em; font-weight:700; letter-spacing:.04em; color:#fff; background:#de3041; border-radius:.4em; }\nbody.cinema-pilot .cinema-track--chosen .cinema-track__pick { display:inline-block; }\nbody.cinema-pilot .tracks-metainfo__info > .cinema-track--chosen { background:#de30411f; border-color:#de304199; }\nbody.cinema-pilot .cinema-track__hint { margin-left:.8em; font-weight:400; letter-spacing:0; text-transform:none; color:#8f9bad; opacity:.8; }\n@media(max-width:580px) {\n body.cinema-pilot .cinema-track { flex-wrap:wrap; row-gap:.25em; }\n body.cinema-pilot .cinema-track__meta { flex-basis:100%; padding-left:calc(3.6em * .75 / .9 + .7em); }\n}\nbody.cinema-pilot.cinema-nova:not(.nova-plus-fade) .nova-plus-root .nova-hero { border:1px solid #ffffff20; border-radius:1.4em; background:#151b25; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__season, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__hint { color:#bdc8d8; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__meta > div:not(.nova-badge) { color:#d3dbe5; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-badge { color:#d3dbe5; background:#ffffff1c!important; border-radius:.45em; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn { color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; box-shadow:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main { color:#fff!important; background:#de3041!important; border-color:#ee4151; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-btn.hover { color:#fff!important; background:#525e70!important; outline:2px solid #fff; outline-offset:3px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main.hover { background:#ef4051!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-toolbar__label, body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__label { font-weight:600; letter-spacing:.1em; color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__total { font-weight:400; color:#8f9bad; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group { color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.8em; box-shadow:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip__sub, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group__count { color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip__badge { color:#d3dbe5; background:#ffffff1c; border-radius:.45em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip--active, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group--open { color:#fff; background:#ffffff1c; border-color:#ffffff59; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-chip.focus, body.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-group.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-chip.hover, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group.hover { color:#fff!important; background:#ffffff18!important; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-chip.focus .nova-chip__badge { color:#d3dbe5!important; background:#ffffff1c!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__thumb { border-radius:1em; background:#1e2630; box-shadow:inset 0 0 0 1px #ffffff14; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__tag, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__strip > span, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__tags > span:not(.nova-card__voice), body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__num > span { color:#fff; background:#0d1015d0!important; border-radius:.5em; box-shadow:inset 0 0 0 1px #ffffff24!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__title { color:#eef1f5; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__meta, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__date, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__time { color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__rate { color:#f1d59a; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__line, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__progress { background:#ffffff30!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__line .time-line > div, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__progress .time-line > div, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card.focus .nova-card__line .time-line > div { background:#de3041!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.focus .nova-card__thumb, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.hover .nova-card__thumb, body.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova__list--grid .nova-card.focus .nova-card__thumb { box-shadow:0 0 0 2px #f2f4f6, inset 0 0 0 1px #ffffff14!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.focus .nova-card__title { color:#fff; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide) { background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide).focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide).hover { color:#fff!important; background:#ffffff14!important; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) { position:relative; padding-bottom:1.1em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__thumb:before { content:\"\"; position:absolute; inset:0; z-index:1; pointer-events:none; background:linear-gradient(0deg,#0d1015f0 0%,#0d1015b0 34%,#0d101500 66%); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__body { position:static; margin:0; padding:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__head { height:0; margin:0; padding:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__head > *, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__tags, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__meta { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__title { position:absolute; z-index:2; left:1.29em; right:1.29em; bottom:3.29em; margin:0; font-size:1.05em; font-weight:600; line-height:1.25; color:#fff; -webkit-line-clamp:2; text-shadow:0 1px .6em #000a; pointer-events:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.nova-card--file .nova-card__head > .nova-card__quality { display:block; position:absolute; z-index:3; top:.47em; left:1.18em; margin:0; padding:.12em .4em; font-size:.85em; font-weight:600; line-height:1.4; color:#fff; background:#0d1015d0!important; border-radius:.5em; box-shadow:inset 0 0 0 1px #ffffff24!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__row:has(> .nova-chip--stack) > .nova-chip { box-sizing:border-box; min-height:2.95em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__group--scroll { -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 2.5em),transparent); mask-image:linear-gradient(90deg,#000 calc(100% - 2.5em),transparent); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip > .cinema-voice { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold { position:relative; overflow:visible!important; -webkit-mask-image:none!important; mask-image:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row { height:auto!important; flex-direction:row!important; flex-wrap:wrap!important; transform:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold:not(.cinema-voice-open) .nova-plus__row > .nova-chip:not(.nova-chip--active) { display:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row > .nova-chip > :not(.cinema-voice) { display:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row > .nova-chip { min-height:0; margin:0 .45em .45em 0; padding:.45em .8em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-chip > .cinema-voice { display:flex; align-items:center; gap:.55em; white-space:nowrap; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type { flex-shrink:0; min-width:3.2em; padding:.15em .45em; text-align:center; font-size:.72em; font-weight:700; letter-spacing:.06em; color:#e6ebf2; background:#ffffff1c; border-radius:.4em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type--dub { color:#fff; background:#de3041; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type--orig { color:#0d1015; background:#f2f4f6; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__part, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__more { font-size:.8em; color:#8f9bad; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__more:empty, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-chip:not(.nova-chip--active) .cinema-voice__caret, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .cinema-voice__more { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__caret { width:.45em; height:.45em; margin:0 .15em 0 .1em; border-right:2px solid currentColor; border-bottom:2px solid currentColor; transform:translateY(-.15em) rotate(45deg); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .cinema-voice__caret { transform:translateY(.1em) rotate(225deg); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open { z-index:8; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .nova-plus__row { position:absolute; left:0; right:0; z-index:8; padding:.7em .6em .25em .7em; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1em; box-shadow:0 1em 3em #000a; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__panel--overlay { z-index:6; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__panel > .nova-drop, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-drop { padding:.7em .6em .2em .8em!important; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1em; box-shadow:0 1em 3em #000a; }\n@media screen and (max-width:640px) {\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar { flex-wrap:nowrap!important; overflow-x:auto; overflow-y:hidden; scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-top:1px; padding-bottom:1px; -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 2em),transparent); mask-image:linear-gradient(90deg,#000 calc(100% - 2em),transparent); }\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar::-webkit-scrollbar, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar::-webkit-scrollbar { display:none; }\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar > *, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar > * { flex-shrink:0; }\n}\nbody.cinema-pilot.cinema-nova .nova-plus-scope .explorer__files-body .scroll__body { padding-left:.95em; padding-right:.95em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero { margin-left:.55em; margin-right:.55em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus > .nova__rows { padding-left:.55em; padding-right:.55em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus > .nova-plus__strip:not(.nova-plus__strip--clip) { padding-left:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus .nova__list--grid:not(.nova__list--row) { margin-left:0; margin-right:0; }\n@media (orientation:landscape) and (min-width:700px) {\n .cinema-home .cinema-hero { min-height:15em; margin-bottom:1.3em; }\n .cinema-home .cinema-copy { padding:3.2em 2em 1.5em; }\n .cinema-home .cinema-kicker { margin-bottom:.6em; }\n .cinema-home .cinema-title { margin-bottom:.25em; }\n .cinema-home .cinema-title--logo { margin-bottom:.6em; }\n .cinema-home .cinema-logo { max-height:4em; }\n .cinema-home .cinema-desc { -webkit-line-clamp:2; margin:.7em 0 1em; }\n}\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item { display:flex; align-items:center; gap:.7em; margin:.3em .8em; padding:.7em .9em; min-height:44px; }\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item__title { display:flex; align-items:center; gap:.6em; flex:1; min-width:0; font-size:1.1em; font-weight:500; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type, body.cinema-pilot .cinema-track .cinema-audio__type { flex-shrink:0; min-width:3.6em; padding:.2em .5em; text-align:center; font-size:.75em; font-weight:700; letter-spacing:.06em; color:#e6ebf2; background:#ffffff1c; border-radius:.45em; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type--dub, body.cinema-pilot .cinema-track .cinema-audio__type--dub { color:#fff; background:#de3041; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type--orig, body.cinema-pilot .cinema-track .cinema-audio__type--orig { color:#0d1015; background:#f2f4f6; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__note, body.cinema-pilot .cinema-track .cinema-audio__note { flex-shrink:0; font-size:.75em; color:#8f9bad; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__last { flex-shrink:0; padding:.1em .45em; font-size:.72em; color:#d3dbe5; background:#ffffff14; border-radius:.4em; }\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item__subtitle { flex-shrink:0; margin:0; font-size:.85em; color:#8f9bad; white-space:nowrap; }\n@media(max-width:580px) {\n body.cinema-pilot .selectbox.cinema-audio .selectbox-item { flex-wrap:wrap; row-gap:.25em; }\n body.cinema-pilot .selectbox.cinema-audio .selectbox-item__subtitle { flex-basis:100%; padding-left:calc(3.6em * .75 / .85 + .6em); }\n}\nbody.cinema-pilot .head { background:linear-gradient(180deg,#101318fa,#101318bd 72%,#10131800); }\nbody.cinema-pilot .head__action.focus,\nbody.cinema-pilot .head__action.hover { color:#f4f5f7; background:#ffffff20; border-radius:.8em; }\nbody.cinema-pilot .menu { background:linear-gradient(145deg,#1d2127,#121418); border-color:#ffffff20; box-shadow:0 1em 3em #0005; }\n.cinema-hero, .cinema-detail .full-start-new { border-color:#ffffff24; box-shadow:0 1em 3em #0003; }\n.cinema-rows .card:not(.card--wide) .card__title { height:2.6em; }\nbody.cinema-pilot .card__quality { padding:.3em .5em; background:#15181ded; color:#eadbb8; border:1px solid #e6cf9a3d; border-radius:.45em; font-weight:600; line-height:1.2; letter-spacing:.04em; box-shadow:0 .1em .4em #0000004d; }\nbody.cinema-pilot .card__quality > div { padding:0; background:none; border:0; border-radius:0; box-shadow:none; color:inherit; font-weight:inherit; }\n.cinema-detail .full-start-new__tagline { font-size:1.2em; line-height:1.4; color:#bdc8d8; margin:0 0 1em; }\n.cinema-detail .full-start-new__rate-line { margin-bottom:.8em; }\n.cinema-detail .full-start-new__reactions { min-height:0; margin-bottom:.65em; }\n.cinema-detail .reaction { min-height:44px; background:#ffffff08; border:1px solid #ffffff12; border-radius:.8em; }\n.cinema-detail .reaction__icon { width:1.25em; height:1.25em; }\n.cinema-detail .reaction__count { font-size:.9em; color:#bdc8d8; }\n.cinema-detail .reaction--voted { background:#ffffff24; border-color:#ffffff50; }\n.cinema-detail .reaction.focus { outline:2px solid #f2f4f6; outline-offset:2px; }\n@media(min-width:700px) and (pointer:fine) {\n body.cinema-pilot .head__action { width:2.5em; height:2.5em; min-width:44px; min-height:44px; margin-left:.65em; }\n body.cinema-pilot .head__time { font-size:.8em; }\n body.cinema-pilot .head__title { font-size:1em; letter-spacing:.02em; }\n}\n@media(max-width:580px) {\n .cinema-detail .full-start-new__tagline { font-size:1em; margin:0; }\n}\nbody.cinema-pilot .cinema-card-overlay .card__view { border-radius:.9em; }\nbody.cinema-pilot .cinema-card-overlay > .card__title,\nbody.cinema-pilot .cinema-card-overlay > .card__age,\nbody.cinema-pilot .cinema-card-overlay .card__vote { display:none; }\nbody.cinema-pilot .cinema-card-info { position:absolute; bottom:0; left:0; right:0; box-sizing:border-box; padding:1.5em .6em .55em; border-radius:0 0 .9em .9em; background:linear-gradient(0deg,#0d1015f7,#0d1015eb 70%,#0d101500); pointer-events:none; color:#f4f5f7; }\nbody.cinema-pilot .cinema-card-genres { font-size:11px; font-size:max(11px,.7em); line-height:1.3; height:1.3em; color:#bdc8d8; margin-bottom:.2em; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-name { font-size:13px; font-size:max(13px,.95em); font-weight:600; line-height:1.2; height:2.4em; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow:hidden; overflow-wrap:break-word; }\nbody.cinema-pilot .cinema-card-meta { display:flex; flex-wrap:nowrap; align-items:baseline; gap:.4em; font-size:11px; font-size:max(11px,.72em); line-height:1.3; height:1.3em; margin-top:.3em; overflow:hidden; white-space:nowrap; font-variant-numeric:tabular-nums; color:#d3dbe5; }\nbody.cinema-pilot .cinema-card-rating { min-width:0; overflow:hidden; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-year { flex:none; margin-left:auto; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=high] { color:#9cd6b4; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=good] { color:#9cc8f2; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=medium] { color:#f1d59a; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=low] { color:#f2a9a9; }\nbody.cinema-pilot .cinema-card-overlay .card__marker { bottom:auto; top:2.8em; left:.5em; }\nbody.cinema-pilot .cinema-card-episode { position:absolute; top:2.8em; right:.5em; font-size:11px; font-size:max(11px,.75em); padding:.25em .5em; border-radius:.5em; background:#0d1015e6; color:#d3dbe5; pointer-events:none; }\nbody.cinema-pilot .cinema-card-overlay .card__type,\nbody.cinema-pilot .cinema-card-overlay .card__quality,\nbody.cinema-pilot .cinema-card-overlay .cinema-card-episode { position:absolute; box-sizing:border-box; font-size:11px; font-size:max(11px,.7em); font-weight:600; line-height:1.2; letter-spacing:.03em; padding:.25em .45em; background:#0d1015e0; color:#d3dbe5; border:1px solid #ffffff29; border-radius:.45em; box-shadow:0 .1em .4em #0000004d; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:calc(100% - .9em); }\nbody.cinema-pilot .cinema-card-overlay .card__quality { top:.45em; bottom:auto; left:.45em; right:auto; max-width:calc(100% - 4em); color:#eadbb8; border-color:#e6cf9a3d; }\nbody.cinema-pilot .cinema-card-overlay .card__type { top:.45em; bottom:auto; left:auto; right:.45em; }\nbody.cinema-pilot .cinema-card-overlay .cinema-card-episode { top:calc(2.45em + 2px); right:.45em; }\nbody.cinema-pilot .cinema-card-overlay .card__view:has(> .card__marker) > .cinema-card-episode { max-width:calc(50% - .7em); }\nbody.cinema-pilot .cinema-card-series { display:flex; flex-wrap:nowrap; align-items:baseline; gap:.35em; min-width:0; font-size:11px; font-size:max(11px,.7em); line-height:1.3; height:1.3em; overflow:hidden; white-space:nowrap; color:#d3dbe5; pointer-events:none; }\nbody.cinema-pilot .cinema-card-info .cinema-card-series { margin-bottom:.2em; }\nbody.cinema-pilot .cinema-card-info--series > .cinema-card-genres { display:none; }\nbody.cinema-pilot .card > .cinema-card-series { margin-top:.35em; font-size:max(11px,.8em); }\nbody.cinema-pilot .cinema-card-series-status { min-width:0; overflow:hidden; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-series-count { flex:none; font-variant-numeric:tabular-nums; }\nbody.cinema-pilot .cinema-card-series-status + .cinema-card-series-count:before { content:'·'; margin-right:.35em; opacity:.6; }\nbody.cinema-pilot .cinema-card-series[data-status=returning] .cinema-card-series-status { color:#9cd6b4; }\nbody.cinema-pilot .cinema-card-series[data-status=production] .cinema-card-series-status,\nbody.cinema-pilot .cinema-card-series[data-status=planned] .cinema-card-series-status,\nbody.cinema-pilot .cinema-card-series[data-status=pilot] .cinema-card-series-status { color:#9cc8f2; }\nbody.cinema-pilot .cinema-card-series[data-status=ended] .cinema-card-series-status { color:#d3dbe5; }\nbody.cinema-pilot .cinema-card-series[data-status=canceled] .cinema-card-series-status { color:#f2a9a9; }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-info { background:linear-gradient(0deg,#0d1015fa,#0d1015f0 80%,#0d101500); background:linear-gradient(0deg,#0d1015fa,#0d1015f0 calc(100% - 1.5em),#0d101500); } }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-info > * { text-shadow:0 1px 2px #000000b3; } }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-name { color:#fff; } body.cinema-pilot .cinema-card-info .cinema-card-series-status { font-weight:600; } }\nbody.cinema-pilot.cinema-card-noir .cinema-card .card__img { filter:grayscale(1); transition:filter .2s; }\nbody.cinema-pilot.cinema-card-noir .cinema-card.focus .card__img,\nbody.cinema-pilot.cinema-card-noir .cinema-card.hover .card__img { filter:none; }\n@media(prefers-reduced-motion:reduce) { body.cinema-pilot.cinema-card-noir .cinema-card .card__img { transition:none; } }\nbody.cinema-pilot .cinema-series-summary { margin:.1em 0 .9em; font-size:13px; font-size:max(13px,1em); line-height:1.45; color:#d3dbe5; overflow-wrap:anywhere; }\nbody.cinema-pilot .cinema-series-summary__line { display:flex; flex-wrap:wrap; align-items:baseline; gap:.1em .55em; min-width:0; }\nbody.cinema-pilot .cinema-series-summary__status { font-weight:600; }\nbody.cinema-pilot .cinema-series-summary__fact, body.cinema-pilot .cinema-series-summary__episode, body.cinema-pilot .cinema-series-summary__date { font-variant-numeric:tabular-nums; white-space:nowrap; }\nbody.cinema-pilot .cinema-series-summary__status + .cinema-series-summary__fact:before,\nbody.cinema-pilot .cinema-series-summary__fact + .cinema-series-summary__fact:before,\nbody.cinema-pilot .cinema-series-summary__episode + .cinema-series-summary__date:before { content:'·'; margin-right:.55em; opacity:.6; }\nbody.cinema-pilot .cinema-series-summary__label { color:#aab5c5; }\nbody.cinema-pilot .cinema-series-summary__episode { color:#f4f5f7; font-weight:600; }\nbody.cinema-pilot .cinema-series-summary__date { color:#bdc8d8; }\nbody.cinema-pilot .cinema-series-summary[data-status=returning] .cinema-series-summary__status { color:#9cd6b4; }\nbody.cinema-pilot .cinema-series-summary[data-status=production] .cinema-series-summary__status,\nbody.cinema-pilot .cinema-series-summary[data-status=planned] .cinema-series-summary__status,\nbody.cinema-pilot .cinema-series-summary[data-status=pilot] .cinema-series-summary__status { color:#9cc8f2; }\nbody.cinema-pilot .cinema-series-summary[data-status=canceled] .cinema-series-summary__status { color:#f2a9a9; }\n@media(max-width:580px) { body.cinema-pilot .cinema-series-summary { margin:0 0 .7em; } }\nbody.cinema-pilot .card--obsidian .card__marker { left:auto; right:.45em; top:.45em; bottom:auto; }\nbody.cinema-pilot .card--obsidian .card__view { border-radius:1em; }\n";
    var LEGACY = [ "20260925.11" ];
    var CARDS_STYLE = "body.cinema-pilot .card__quality { padding:.3em .5em; background:#15181ded; color:#eadbb8; border:1px solid #e6cf9a3d; border-radius:.45em; font-weight:600; line-height:1.2; letter-spacing:.04em; box-shadow:0 .1em .4em #0000004d; }\nbody.cinema-pilot .card__quality > div { padding:0; background:none; border:0; border-radius:0; box-shadow:none; color:inherit; font-weight:inherit; }\nbody.cinema-pilot .cinema-card-overlay .card__view { border-radius:.9em; }\nbody.cinema-pilot .cinema-card-overlay > .card__title,\nbody.cinema-pilot .cinema-card-overlay > .card__age,\nbody.cinema-pilot .cinema-card-overlay .card__vote { display:none; }\nbody.cinema-pilot .cinema-card-info { position:absolute; bottom:0; left:0; right:0; box-sizing:border-box; padding:1.5em .6em .55em; border-radius:0 0 .9em .9em; background:linear-gradient(0deg,#0d1015f7,#0d1015eb 70%,#0d101500); pointer-events:none; color:#f4f5f7; }\nbody.cinema-pilot .cinema-card-genres { font-size:11px; font-size:max(11px,.7em); line-height:1.3; height:1.3em; color:#bdc8d8; margin-bottom:.2em; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-name { font-size:13px; font-size:max(13px,.95em); font-weight:600; line-height:1.2; height:2.4em; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow:hidden; overflow-wrap:break-word; }\nbody.cinema-pilot .cinema-card-meta { display:flex; flex-wrap:nowrap; align-items:baseline; gap:.4em; font-size:11px; font-size:max(11px,.72em); line-height:1.3; height:1.3em; margin-top:.3em; overflow:hidden; white-space:nowrap; font-variant-numeric:tabular-nums; color:#d3dbe5; }\nbody.cinema-pilot .cinema-card-rating { min-width:0; overflow:hidden; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-year { flex:none; margin-left:auto; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=high] { color:#9cd6b4; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=good] { color:#9cc8f2; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=medium] { color:#f1d59a; }\nbody.cinema-pilot.cinema-card-colors .cinema-card-rating[data-band=low] { color:#f2a9a9; }\nbody.cinema-pilot .cinema-card-overlay .card__marker { bottom:auto; top:2.8em; left:.5em; }\nbody.cinema-pilot .cinema-card-episode { position:absolute; top:2.8em; right:.5em; font-size:11px; font-size:max(11px,.75em); padding:.25em .5em; border-radius:.5em; background:#0d1015e6; color:#d3dbe5; pointer-events:none; }\nbody.cinema-pilot .cinema-card-overlay .card__type,\nbody.cinema-pilot .cinema-card-overlay .card__quality,\nbody.cinema-pilot .cinema-card-overlay .cinema-card-episode { position:absolute; box-sizing:border-box; font-size:11px; font-size:max(11px,.7em); font-weight:600; line-height:1.2; letter-spacing:.03em; padding:.25em .45em; background:#0d1015e0; color:#d3dbe5; border:1px solid #ffffff29; border-radius:.45em; box-shadow:0 .1em .4em #0000004d; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:calc(100% - .9em); }\nbody.cinema-pilot .cinema-card-overlay .card__quality { top:.45em; bottom:auto; left:.45em; right:auto; max-width:calc(100% - 4em); color:#eadbb8; border-color:#e6cf9a3d; }\nbody.cinema-pilot .cinema-card-overlay .card__type { top:.45em; bottom:auto; left:auto; right:.45em; }\nbody.cinema-pilot .cinema-card-overlay .cinema-card-episode { top:calc(2.45em + 2px); right:.45em; }\nbody.cinema-pilot .cinema-card-overlay .card__view:has(> .card__marker) > .cinema-card-episode { max-width:calc(50% - .7em); }\nbody.cinema-pilot .cinema-card-series { display:flex; flex-wrap:nowrap; align-items:baseline; gap:.35em; min-width:0; font-size:11px; font-size:max(11px,.7em); line-height:1.3; height:1.3em; overflow:hidden; white-space:nowrap; color:#d3dbe5; pointer-events:none; }\nbody.cinema-pilot .cinema-card-info .cinema-card-series { margin-bottom:.2em; }\nbody.cinema-pilot .cinema-card-info--series > .cinema-card-genres { display:none; }\nbody.cinema-pilot .card > .cinema-card-series { margin-top:.35em; font-size:max(11px,.8em); }\nbody.cinema-pilot .cinema-card-series-status { min-width:0; overflow:hidden; text-overflow:ellipsis; }\nbody.cinema-pilot .cinema-card-series-count { flex:none; font-variant-numeric:tabular-nums; }\nbody.cinema-pilot .cinema-card-series-status + .cinema-card-series-count:before { content:'·'; margin-right:.35em; opacity:.6; }\nbody.cinema-pilot .cinema-card-series[data-status=returning] .cinema-card-series-status { color:#9cd6b4; }\nbody.cinema-pilot .cinema-card-series[data-status=production] .cinema-card-series-status,\nbody.cinema-pilot .cinema-card-series[data-status=planned] .cinema-card-series-status,\nbody.cinema-pilot .cinema-card-series[data-status=pilot] .cinema-card-series-status { color:#9cc8f2; }\nbody.cinema-pilot .cinema-card-series[data-status=ended] .cinema-card-series-status { color:#d3dbe5; }\nbody.cinema-pilot .cinema-card-series[data-status=canceled] .cinema-card-series-status { color:#f2a9a9; }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-info { background:linear-gradient(0deg,#0d1015fa,#0d1015f0 80%,#0d101500); background:linear-gradient(0deg,#0d1015fa,#0d1015f0 calc(100% - 1.5em),#0d101500); } }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-info > * { text-shadow:0 1px 2px #000000b3; } }\n@media(max-width:580px) { body.cinema-pilot .cinema-card-name { color:#fff; } body.cinema-pilot .cinema-card-info .cinema-card-series-status { font-weight:600; } }\nbody.cinema-pilot.cinema-card-noir .cinema-card .card__img { filter:grayscale(1); transition:filter .2s; }\nbody.cinema-pilot.cinema-card-noir .cinema-card.focus .card__img,\nbody.cinema-pilot.cinema-card-noir .cinema-card.hover .card__img { filter:none; }\n@media(prefers-reduced-motion:reduce) { body.cinema-pilot.cinema-card-noir .cinema-card .card__img { transition:none; } }\nbody.cinema-pilot .cinema-series-summary { margin:.1em 0 .9em; font-size:13px; font-size:max(13px,1em); line-height:1.45; color:#d3dbe5; overflow-wrap:anywhere; }\nbody.cinema-pilot .cinema-series-summary__line { display:flex; flex-wrap:wrap; align-items:baseline; gap:.1em .55em; min-width:0; }\nbody.cinema-pilot .cinema-series-summary__status { font-weight:600; }\nbody.cinema-pilot .cinema-series-summary__fact, body.cinema-pilot .cinema-series-summary__episode, body.cinema-pilot .cinema-series-summary__date { font-variant-numeric:tabular-nums; white-space:nowrap; }\nbody.cinema-pilot .cinema-series-summary__status + .cinema-series-summary__fact:before,\nbody.cinema-pilot .cinema-series-summary__fact + .cinema-series-summary__fact:before,\nbody.cinema-pilot .cinema-series-summary__episode + .cinema-series-summary__date:before { content:'·'; margin-right:.55em; opacity:.6; }\nbody.cinema-pilot .cinema-series-summary__label { color:#aab5c5; }\nbody.cinema-pilot .cinema-series-summary__episode { color:#f4f5f7; font-weight:600; }\nbody.cinema-pilot .cinema-series-summary__date { color:#bdc8d8; }\nbody.cinema-pilot .cinema-series-summary[data-status=returning] .cinema-series-summary__status { color:#9cd6b4; }\nbody.cinema-pilot .cinema-series-summary[data-status=production] .cinema-series-summary__status,\nbody.cinema-pilot .cinema-series-summary[data-status=planned] .cinema-series-summary__status,\nbody.cinema-pilot .cinema-series-summary[data-status=pilot] .cinema-series-summary__status { color:#9cc8f2; }\nbody.cinema-pilot .cinema-series-summary[data-status=canceled] .cinema-series-summary__status { color:#f2a9a9; }\n@media(max-width:580px) { body.cinema-pilot .cinema-series-summary { margin:0 0 .7em; } }\n";
    var Cards = function(Lampa, isEnabled) {
        "use strict";
        var cache = {}, pending = {}, queue = [], active = 0, saveTimer;
        var CACHE = "cinema_card_metadata_v1", MAX = 400;
        var options = [ [ "cinema_card_overlay", "Informace na plakátu", "Информация на постере", "Інформація на постері", "Information on posters" ], [ "cinema_card_colors", "Barevné hodnocení", "Цветной рейтинг", "Кольоровий рейтинг", "Rating colours" ], [ "cinema_card_noir", "Černobílé plakáty", "Чёрно-белые постеры", "Чорно-білі постери", "Noir posters" ], [ "cinema_card_series", "Stav seriálu a počet sezón (TMDB)", "Статус сериала и число сезонов (TMDB)", "Статус серіалу та кількість сезонів (TMDB)", "Series status and season count (TMDB)" ], [ "cinema_card_episode", "Poslední odvysílaná epizoda (TMDB)", "Последняя вышедшая серия (TMDB)", "Остання випущена серія (TMDB)", "Last aired episode (TMDB)" ], [ "cinema_card_poster", "Plakáty bez textu (TMDB)", "Постеры без текста (TMDB)", "Постери без тексту (TMDB)", "Textless posters (TMDB)" ], [ "cinema_card_quality", "Kvalita od externího poskytovatele", "Качество от внешнего провайдера", "Якість від зовнішнього провайдера", "Quality from an external provider" ] ];
        var defaults = {
            cinema_card_quality: true,
            cinema_card_overlay: true,
            cinema_card_series: true
        };
        var STATUSES = {
            "Returning Series": "returning",
            "In Production": "production",
            Planned: "planned",
            Pilot: "pilot",
            Ended: "ended",
            Canceled: "canceled",
            Cancelled: "canceled"
        };
        var STATUS_CODES = [ "returning", "production", "planned", "pilot", "ended", "canceled" ];
        var QUALITY_HOSTS = [ [ "https://api.apbugall.org", "8da1c9beda9545174264dc9f63a77d" ], [ "https://upn.stull.xyz", "d317441359e505c343c2063edc97e7" ] ];
        var FORMATS = [ "BluRay", "BDRip", "WEB-DL", "WEBRip", "WEB-DLRip", "HDTV", "HDRip", "HDTVRip", "DVDRip", "SATRip", "DVDScr", "TC", "TS", "CAMRip", "CAM" ];
        var CATEGORIES = {
            movie: [ 1, 3 ],
            tv: [ 2, 4 ]
        };
        function on(key) {
            return Lampa.Storage.value(key, defaults[key] ? "true" : "false") === "true";
        }
        function qualityOn() {
            return on("cinema_card_quality") && !(typeof Lampa.Storage.field === "function" && Lampa.Storage.field("card_quality") === false);
        }
        function allowed(kind) {
            return kind === "quality" ? qualityOn() : kind === "poster" ? on("cinema_card_poster") : on("cinema_card_episode") || on("cinema_card_series");
        }
        function owns() {
            return isEnabled() && !window.obsidian_plugin;
        }
        function validPath(path) {
            return typeof path === "string" && /^\/[a-zA-Z0-9_-]+\.[a-zA-Z0-9]{2,5}$/.test(path);
        }
        function validQuality(q) {
            return q && (q.label === "4K" || FORMATS.indexOf(q.label) >= 0) && typeof q.title === "string" && /^[A-Za-z0-9 ,-]{0,120}$/.test(q.title);
        }
        function validEpisode(ep) {
            return !!ep && Number.isInteger(ep.season) && ep.season >= 0 && Number.isInteger(ep.episode) && ep.episode > 0;
        }
        function validCount(n, max) {
            return Number.isInteger(n) && n > 0 && n <= max;
        }
        function validDetails(v) {
            return !!v && typeof v === "object" && (v.episode === null || validEpisode(v.episode)) && (v.status === null || STATUS_CODES.indexOf(v.status) >= 0) && (v.seasons === null || validCount(v.seasons, 500)) && (v.episodes === null || validCount(v.episodes, 5e4)) && !!(v.episode || v.status || v.seasons);
        }
        function validValue(key, value) {
            if (value === null) return true;
            if (key.indexOf("poster:") === 0) return validPath(value);
            if (key.indexOf("quality:") === 0) return validQuality(value);
            return validDetails(value);
        }
        try {
            var saved = JSON.parse(localStorage.getItem(CACHE) || "{}");
            Object.keys(saved).slice(0, MAX).forEach(function(key) {
                var item = saved[key];
                if (/^((poster|quality):(movie|tv)|details:tv):\d+$/.test(key) && item && item.until > Date.now() && item.until < Date.now() + 8 * 864e5 && validValue(key, item.value)) cache[key] = item;
            });
        } catch (e) {}
        function persist() {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(function() {
                var keep = {};
                Object.keys(cache).filter(function(k) {
                    return cache[k].until > Date.now();
                }).sort(function(a, b) {
                    return cache[b].until - cache[a].until;
                }).slice(0, MAX).forEach(function(k) {
                    keep[k] = cache[k];
                });
                cache = keep;
                try {
                    localStorage.setItem(CACHE, JSON.stringify(keep));
                } catch (e) {}
            }, 500);
        }
        function pump() {
            while (active < 3 && queue.length) {
                var task = queue.shift();
                active++;
                task.run();
            }
        }
        function wanted(key) {
            return (pending[key] || []).some(function(w) {
                try {
                    return w.alive();
                } catch (e) {
                    return false;
                }
            });
        }
        function release(key, value) {
            var waiters = pending[key] || [];
            delete pending[key];
            waiters.forEach(function(w) {
                try {
                    w.done(value);
                } catch (e) {}
            });
        }
        function parseQuality(json, media, id, year) {
            var d = json && json.status === "success" && json.data;
            if (!d || typeof d !== "object" || Number(d.id_tmdb) !== Number(id)) return null;
            if (CATEGORIES[media].indexOf(Number(d.category)) < 0) return null;
            if (year && /^[12]\d{3}$/.test(String(d.year)) && Math.abs(Number(d.year) - year) > 1) return null;
            if (typeof d.quality !== "string" || d.quality.length > 120) return null;
            var found = [];
            d.quality.split(",").forEach(function(part) {
                var name = part.trim().toLowerCase();
                FORMATS.forEach(function(f) {
                    if (f.toLowerCase() === name && found.indexOf(f) < 0) found.push(f);
                });
            });
            if (!found.length) return null;
            found.sort(function(a, b) {
                return FORMATS.indexOf(a) - FORMATS.indexOf(b);
            });
            var label = d.uhd === true && FORMATS.indexOf(found[0]) < FORMATS.indexOf("DVDScr") ? "4K" : found[0];
            return {
                label: label,
                title: found.join(", ")
            };
        }
        function parseDetails(json, id) {
            if (!json || typeof json !== "object" || Array.isArray(json)) return null;
            if (json.id !== undefined && Number(json.id) !== Number(id)) return null;
            if (json.media_type === "movie" || json.title && !json.name || json.release_date && !json.first_air_date) return null;
            var value = {
                episode: null,
                status: null,
                seasons: null,
                episodes: null
            }, ep = json.last_episode_to_air;
            if (ep && Number.isInteger(ep.season_number) && ep.season_number >= 0 && Number.isInteger(ep.episode_number) && ep.episode_number > 0) value.episode = {
                season: ep.season_number,
                episode: ep.episode_number
            };
            if (Number(json.id) === Number(id)) {
                if (typeof json.status === "string" && Object.prototype.hasOwnProperty.call(STATUSES, json.status)) value.status = STATUSES[json.status];
                if (validCount(json.number_of_seasons, 500)) value.seasons = json.number_of_seasons;
                if (validCount(json.number_of_episodes, 5e4)) value.episodes = json.number_of_episodes;
            }
            return validDetails(value) ? value : null;
        }
        function getJSON(url, done) {
            var fired = false;
            function end(value) {
                if (!fired) {
                    fired = true;
                    done(value);
                }
            }
            if (typeof XMLHttpRequest !== "function") return end();
            try {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, true);
                xhr.timeout = 5e3;
                xhr.withCredentials = false;
                xhr.onload = function() {
                    if (xhr.status !== 200 || typeof xhr.responseText !== "string" || xhr.responseText.length > 2e5) return end();
                    try {
                        end(JSON.parse(xhr.responseText));
                    } catch (e) {
                        end();
                    }
                };
                xhr.onerror = xhr.ontimeout = xhr.onabort = function() {
                    end();
                };
                xhr.send();
            } catch (e) {
                end();
            }
        }
        function fetchQuality(media, id, year, finish) {
            (function attempt(i) {
                var host = QUALITY_HOSTS[i];
                getJSON(host[0] + "/?token=" + host[1] + "&tmdb=" + id, function(json) {
                    if (json === undefined) return i + 1 < QUALITY_HOSTS.length ? attempt(i + 1) : finish(null, 5 * 6e4);
                    var value = parseQuality(json, media, id, year);
                    finish(value, value ? 864e5 : 6 * 36e5);
                });
            })(0);
        }
        function request(kind, media, id, done, alive, year) {
            var key = kind + ":" + media + ":" + id;
            if (!/^\d+$/.test(String(id))) return done(null);
            if (cache[key] && cache[key].until > Date.now()) return done(cache[key].value);
            var waiter = {
                done: done,
                alive: alive || function() {
                    return true;
                }
            };
            if (pending[key]) {
                pending[key].push(waiter);
                return;
            }
            var api = Lampa.Api.sources && Lampa.Api.sources.tmdb;
            if (queue.length >= 60) queue = queue.filter(function(t) {
                if (wanted(t.key)) return true;
                release(t.key, null);
                return false;
            });
            if (kind !== "quality" && (!api || typeof api.get !== "function") || queue.length >= 60) return done(null);
            pending[key] = [ waiter ];
            queue.push({
                key: key,
                run: function() {
                    var finished = false, timer;
                    function finish(value, ttl) {
                        if (finished) return;
                        finished = true;
                        clearTimeout(timer);
                        cache[key] = {
                            value: value,
                            until: Date.now() + ttl
                        };
                        persist();
                        active--;
                        release(key, value);
                        pump();
                    }
                    if (!owns() || !allowed(kind) || !wanted(key)) {
                        active--;
                        release(key, null);
                        pump();
                        return;
                    }
                    timer = setTimeout(function() {
                        finish(null, 6e4);
                    }, 12e3);
                    if (kind === "quality") {
                        try {
                            fetchQuality(media, id, year, finish);
                        } catch (e) {
                            finish(null, 5 * 6e4);
                        }
                        return;
                    }
                    var path = media + "/" + id + (kind === "poster" ? "/images?include_image_language=null" : "");
                    try {
                        api.get(path, {}, function(json) {
                            var value = null;
                            if (kind === "poster") {
                                var posters = (json && Array.isArray(json.posters) ? json.posters : []).filter(function(p) {
                                    return p && !p.iso_639_1 && validPath(p.file_path);
                                });
                                posters.sort(function(a, b) {
                                    return (b.vote_count || 0) - (a.vote_count || 0);
                                });
                                value = posters.length ? posters[0].file_path : null;
                            } else value = parseDetails(json, id);
                            finish(value, kind === "poster" ? (value ? 7 : 1) * 864e5 : 6 * 36e5);
                        }, function() {
                            finish(null, 6e4);
                        });
                    } catch (e) {
                        finish(null, 6e4);
                    }
                }
            });
            pump();
        }
        function mediaOf(d) {
            if (d.media_type === "movie" || d.media_type === "tv") return d.media_type;
            if (d.media_type) return null;
            var tv = !!(d.name || d.original_name || d.first_air_date);
            var movie = [ [ "title", "name" ], [ "original_title", "original_name" ], [ "release_date", "first_air_date" ] ].some(function(p) {
                return d[p[0]] && d[p[0]] !== d[p[1]];
            });
            return tv !== movie ? tv ? "tv" : "movie" : null;
        }
        function guessMedia(d) {
            return mediaOf(d) || (d.first_air_date ? "tv" : "movie");
        }
        function eligible(card) {
            var d = card.data || {}, root = card.html;
            return owns() && root && root.querySelector && !root.classList.contains("card--obsidian") && (d.source === "tmdb" || d.source === "cub") && /^\d+$/.test(String(d.id)) && d.media_type !== "person" && !("gender" in d || "known_for" in d || "known_for_department" in d) && !!(d.title || d.name || d.original_title || d.original_name) && !(card.params && card.params.style && /^(wide|collection)$/.test(card.params.style.name));
        }
        function element(cls, value) {
            var e = document.createElement("div");
            e.className = cls;
            if (value !== undefined) e.textContent = String(value);
            return e;
        }
        function count(n, noun) {
            var lang = String(Lampa.Storage.value("language", "ru")), form;
            if (lang === "cs") form = n === 1 ? "one" : n >= 2 && n <= 4 ? "few" : "many"; else if (/^(ru|uk|be)$/.test(lang)) form = n % 10 === 1 && n % 100 !== 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? "few" : "many"; else form = n === 1 ? "one" : "many";
            return Lampa.Lang.translate("cinema_card_" + noun + "_" + form).replace("%d", n);
        }
        function series(root, info) {
            if (!info || !(info.status || info.seasons) || root.querySelector(".cinema-card-series")) return;
            var box = root.querySelector(".cinema-card-info");
            if (!box && on("cinema_card_overlay")) return;
            var line = element("cinema-card-series"), tip = [];
            if (info.status) {
                var status = Lampa.Lang.translate("cinema_card_status_" + info.status);
                line.setAttribute("data-status", info.status);
                line.appendChild(element("cinema-card-series-status", status));
                tip.push(status);
            }
            if (info.seasons) {
                var seasons = count(info.seasons, "seasons");
                line.appendChild(element("cinema-card-series-count", seasons));
                tip.push(seasons);
            }
            if (info.episodes) tip.push(count(info.episodes, "episodes"));
            line.title = "TMDB: " + tip.join(" · ");
            if (box) {
                box.insertBefore(line, box.querySelector(".cinema-card-name"));
                box.classList.add("cinema-card-info--series");
            } else root.appendChild(line);
        }
        function decorate(card) {
            if (!eligible(card)) return;
            var root = card.html, data = card.data, view = root.querySelector(".card__view");
            if (!view) return;
            root.classList.add("cinema-card");
            if (!on("cinema_card_overlay") || root.querySelector(".cinema-card-info")) return;
            var box = element("cinema-card-info"), genres = [];
            var api = Lampa.Api.sources && Lampa.Api.sources.tmdb;
            if (api && typeof api.getGenresNameFromIds === "function") {
                try {
                    genres = api.getGenresNameFromIds(guessMedia(data), Array.isArray(data.genre_ids) ? data.genre_ids : []);
                } catch (e) {}
                genres = Array.isArray(genres) ? genres.slice(0, 2) : [];
            }
            box.appendChild(element("cinema-card-genres", genres.join(" · ")));
            box.appendChild(element("cinema-card-name", data.title || data.name || data.original_title || data.original_name));
            var meta = element("cinema-card-meta"), rating, source;
            [ [ "imdb_rating", "IMDb" ], [ "kp_rating", "KP" ], [ "vote_average", "TMDB" ] ].some(function(pair) {
                var n = Number(data[pair[0]]);
                if (!isFinite(n) || n <= 0 || n > 10) return false;
                rating = n;
                source = pair[1];
                return true;
            });
            if (rating) {
                var vote = element("cinema-card-rating", source + " " + rating.toFixed(1));
                vote.setAttribute("data-band", rating >= 8 ? "high" : rating >= 6.5 ? "good" : rating >= 5 ? "medium" : "low");
                meta.appendChild(vote);
            }
            var year = String(data.release_date || data.first_air_date || "").slice(0, 4);
            if (/^[12]\d{3}$/.test(year)) meta.appendChild(element("cinema-card-year", year));
            box.appendChild(meta);
            view.appendChild(box);
            root.classList.add("cinema-card-overlay");
        }
        function visible(card) {
            if (!eligible(card) || !document.documentElement.contains(card.html)) return;
            decorate(card);
            var root = card.html, d = card.data, strict = mediaOf(d), media = guessMedia(d);
            function alive() {
                return !card.cinemaCardDead && eligible(card) && document.documentElement.contains(root);
            }
            function poster(url) {
                var img = card.img;
                if (!img) return;
                if (!img.classList.contains("cinema-card-textless")) img.cinemaNativeSrc = img.src;
                img.classList.add("cinema-card-textless");
                img.src = url;
            }
            function wantEpisode() {
                return on("cinema_card_episode") && media === "tv";
            }
            function wantSeries() {
                return on("cinema_card_series") && strict === "tv";
            }
            if (wantEpisode() || wantSeries()) request("details", "tv", d.id, function(info) {
                if (!alive() || !info) return;
                var ep = info.episode;
                if (wantEpisode() && ep && !root.querySelector(".cinema-card-episode")) {
                    var badge = element("cinema-card-episode", "S" + ep.season + " · E" + ep.episode);
                    badge.title = Lampa.Lang.translate("cinema_card_episode");
                    root.querySelector(".card__view").appendChild(badge);
                }
                if (wantSeries()) series(root, info);
            }, function() {
                return alive() && (wantEpisode() || wantSeries());
            });
            if (on("cinema_card_poster") && card.cinemaPosterPath) poster(card.cinemaPosterPath);
            if (on("cinema_card_poster") && !card.cinemaPosterPath) request("poster", media, d.id, function(path) {
                if (!alive() || !on("cinema_card_poster") || !path) return;
                var url = Lampa.Api.img(path, "w500");
                if (!/^(https?:\/\/|\/)/.test(url)) return;
                var probe = new Image, timer = setTimeout(clean, 4e3);
                function clean() {
                    clearTimeout(timer);
                    probe.onload = null;
                    probe.onerror = null;
                }
                probe.onerror = clean;
                probe.onload = function() {
                    clean();
                    if (alive() && on("cinema_card_poster") && card.img) {
                        card.cinemaPosterPath = url;
                        poster(url);
                    }
                };
                probe.src = url;
            }, alive);
            var year = Number(String((strict === "tv" ? d.first_air_date || d.release_date : d.release_date || d.first_air_date) || "").slice(0, 4)) || 0;
            if (qualityOn() && strict && !root.querySelector(".card__quality")) request("quality", strict, d.id, function(q) {
                if (!alive() || !qualityOn() || !validQuality(q) || root.querySelector(".card__quality")) return;
                var badge = element("card__quality cinema-card-quality");
                badge.appendChild(element("", q.label));
                badge.title = q.title;
                root.querySelector(".card__view").appendChild(badge);
            }, alive, year);
        }
        function cleanup() {
            var all = !owns();
            if (all || !on("cinema_card_overlay")) {
                document.querySelectorAll(".cinema-card-info").forEach(function(e) {
                    e.remove();
                });
                document.querySelectorAll(".cinema-card-overlay").forEach(function(e) {
                    e.classList.remove("cinema-card-overlay");
                });
            }
            if (all || !on("cinema_card_episode")) document.querySelectorAll(".cinema-card-episode").forEach(function(e) {
                e.remove();
            });
            if (all || !on("cinema_card_series")) {
                document.querySelectorAll(".cinema-card-series").forEach(function(e) {
                    e.remove();
                });
                document.querySelectorAll(".cinema-card-info--series").forEach(function(e) {
                    e.classList.remove("cinema-card-info--series");
                });
            }
            if (all || !qualityOn()) document.querySelectorAll(".cinema-card-quality").forEach(function(e) {
                e.remove();
            });
            if (all || !on("cinema_card_poster")) document.querySelectorAll(".cinema-card-textless").forEach(function(img) {
                img.classList.remove("cinema-card-textless");
                if (img.cinemaNativeSrc) img.src = img.cinemaNativeSrc;
            });
            if (all) document.querySelectorAll(".cinema-card").forEach(function(e) {
                e.classList.remove("cinema-card");
            });
        }
        function sync() {
            document.body.classList.toggle("cinema-card-noir", owns() && on("cinema_card_noir"));
            document.body.classList.toggle("cinema-card-colors", owns() && on("cinema_card_colors"));
            cleanup();
        }
        var map = Lampa.Maker && typeof Lampa.Maker.map === "function" && Lampa.Maker.map("Card");
        if (map && map.Card && typeof map.Card.onCreate === "function") {
            var create = map.Card.onCreate;
            map.Card.onCreate = function() {
                var result = create.apply(this, arguments), card = this;
                try {
                    decorate(card);
                } catch (e) {}
                if (typeof card.use === "function") card.use({
                    onVisible: function() {
                        try {
                            visible(this);
                        } catch (e) {}
                    },
                    onDestroy: function() {
                        this.cinemaCardDead = true;
                    }
                });
                return result;
            };
        }
        var translations = {};
        options.forEach(function(p) {
            translations[p[0]] = {
                cs: p[1],
                ru: p[2],
                uk: p[3],
                en: p[4]
            };
        });
        translations.cinema_card_quality_descr = {
            cs: "Štítky WEB-DL, BDRip, 4K… z veřejné služby apbugall.org podle TMDB ID. Nepopisují vaše zdroje.",
            ru: "Метки WEB-DL, BDRip, 4K… из публичного сервиса apbugall.org по TMDB ID. Не описывают ваши источники.",
            uk: "Мітки WEB-DL, BDRip, 4K… з публічного сервісу apbugall.org за TMDB ID. Не описують ваші джерела.",
            en: "WEB-DL, BDRip, 4K… labels from the public apbugall.org service by TMDB ID. They do not describe your sources."
        };
        translations.cinema_card_series_descr = {
            cs: "Ukončen, zrušen, pokračuje… a počet sezón podle TMDB. Počet neznamená, že jsou všechny sezóny venku nebo dostupné.",
            ru: "Завершён, отменён, выходит… и число сезонов по TMDB. Число не означает, что все сезоны вышли или доступны.",
            uk: "Завершено, скасовано, виходить… і кількість сезонів за TMDB. Кількість не означає, що всі сезони вийшли чи доступні.",
            en: "Ended, canceled, ongoing… and the season count from TMDB. The count does not mean every season is out or available."
        };
        [ [ "returning", "Pokračuje", "Выходит", "Виходить", "Ongoing" ], [ "production", "Ve výrobě", "Снимается", "Знімається", "In production" ], [ "planned", "Plánován", "Запланирован", "Заплановано", "Planned" ], [ "pilot", "Pilot", "Пилот", "Пілот", "Pilot" ], [ "ended", "Ukončen", "Завершён", "Завершено", "Ended" ], [ "canceled", "Zrušen", "Отменён", "Скасовано", "Canceled" ], [ "seasons_one", "%d sezóna", "%d сезон", "%d сезон", "%d season" ], [ "seasons_few", "%d sezóny", "%d сезона", "%d сезони", "%d seasons" ], [ "seasons_many", "%d sezón", "%d сезонов", "%d сезонів", "%d seasons" ], [ "episodes_one", "%d epizoda", "%d серия", "%d серія", "%d episode" ], [ "episodes_few", "%d epizody", "%d серии", "%d серії", "%d episodes" ], [ "episodes_many", "%d epizod", "%d серий", "%d серій", "%d episodes" ] ].forEach(function(p) {
            translations["cinema_card_" + (/^(seasons|episodes)_/.test(p[0]) ? "" : "status_") + p[0]] = {
                cs: p[1],
                ru: p[2],
                uk: p[3],
                en: p[4]
            };
        });
        Lampa.Lang.add(translations);
        options.forEach(function(p) {
            var field = {
                name: Lampa.Lang.translate(p[0])
            };
            if (translations[p[0] + "_descr"]) field.description = Lampa.Lang.translate(p[0] + "_descr");
            Lampa.SettingsApi.addParam({
                component: "cinema_pilot",
                param: {
                    name: p[0],
                    type: "trigger",
                    default: !!defaults[p[0]]
                },
                field: field,
                onChange: function() {
                    sync();
                    if (Lampa.Activity.active()) Lampa.Activity.replace();
                }
            });
        });
        try {
            Lampa.Storage.listener.follow("change", function(e) {
                if (e && e.name === "card_quality") sync();
            });
        } catch (e) {}
        var external = !!window.obsidian_plugin;
        new MutationObserver(function() {
            if (external !== !!window.obsidian_plugin) {
                external = !!window.obsidian_plugin;
                sync();
            }
        }).observe(document.body, {
            childList: true,
            subtree: true
        });
        sync();
        return {
            sync: sync
        };
    };
    var Detail = function(Lampa, isEnabled) {
        "use strict";
        if (!Lampa.Listener || typeof Lampa.Listener.follow !== "function" || !Lampa.SettingsApi) return null;
        var KEY = "cinema_detail_series";
        var STATUSES = {
            "Returning Series": "returning",
            "In Production": "production",
            Planned: "planned",
            Pilot: "pilot",
            Ended: "ended",
            Canceled: "canceled",
            Cancelled: "canceled"
        };
        var MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        var fetched = {}, FETCHED_MAX = 50, last = null;
        function has(o, k) {
            return Object.prototype.hasOwnProperty.call(o, k);
        }
        function isInt(n) {
            return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
        }
        function on() {
            return Lampa.Storage.value(KEY, "true") !== "false";
        }
        function owns() {
            return isEnabled() && on();
        }
        function language() {
            return String(Lampa.Storage.value("language", "ru"));
        }
        function pad(n) {
            return (n < 10 ? "0" : "") + n;
        }
        function today() {
            var d = new Date;
            return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
        }
        function validDate(s) {
            if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
            var p = s.split("-").map(Number), d = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
            return p[0] >= 1900 && p[0] <= 2200 && d.getUTCMonth() === p[1] - 1 && d.getUTCDate() === p[2];
        }
        function episode(e) {
            if (!e || typeof e !== "object" || !isInt(e.season_number) || e.season_number < 0 || e.season_number > 500 || !isInt(e.episode_number) || e.episode_number < 1 || e.episode_number > 5e4) return null;
            return {
                season: e.season_number,
                episode: e.episode_number,
                date: validDate(e.air_date) ? e.air_date : ""
            };
        }
        function count(n, max) {
            return isInt(n) && n > 0 && n <= max;
        }
        function facts(movie, now) {
            if (!movie || typeof movie !== "object" || Array.isArray(movie)) return null;
            var f = {
                status: null,
                seasons: null,
                aired: false,
                episodes: null,
                last: null,
                next: null
            };
            if (typeof movie.status === "string" && has(STATUSES, movie.status)) f.status = STATUSES[movie.status];
            var finished = f.status === "ended" || f.status === "canceled";
            if (finished && count(movie.number_of_seasons, 500)) f.seasons = movie.number_of_seasons; else if (Array.isArray(movie.seasons)) {
                var aired = movie.seasons.filter(function(s) {
                    return s && isInt(s.season_number) && s.season_number > 0 && validDate(s.air_date) && s.air_date <= now;
                }).length;
                if (aired) {
                    f.seasons = aired;
                    f.aired = true;
                }
            }
            if (finished && count(movie.number_of_episodes, 5e4)) f.episodes = movie.number_of_episodes;
            var ep = episode(movie.last_episode_to_air);
            if (ep && !(ep.date && ep.date > now)) f.last = ep;
            if (f.seasons && f.last && f.last.season > f.seasons) {
                f.seasons = null;
                f.aired = false;
            }
            var next = finished ? null : episode(movie.next_episode_to_air);
            if (next && next.date && next.date >= now && (!f.last || next.season > f.last.season || next.season === f.last.season && next.episode > f.last.episode)) f.next = next;
            return f.status || f.seasons || f.episodes || f.last || f.next ? f : null;
        }
        function nativeShown(body) {
            var n = {
                status: false,
                seasons: null,
                episodes: null,
                next: false
            };
            var badge = body.querySelector(".full-start__status");
            if (badge && !badge.classList.contains("hide") && String(badge.textContent || "").trim()) n.status = true;
            var details = body.querySelector(".full-start-new__details");
            if (!details) return n;
            var seasons = Lampa.Lang.translate("title_seasons"), episodes = Lampa.Lang.translate("title_episodes"), next = Lampa.Lang.translate("full_next_episode") + ":";
            Array.prototype.forEach.call(details.children || [], function(e) {
                var text = String(e.textContent || "").trim(), m = /^(.*?):\s*(\d+)$/.exec(text);
                if (m && m[1].trim() === seasons) n.seasons = Number(m[2]); else if (m && m[1].trim() === episodes) n.episodes = Number(m[2]); else if (text.indexOf(next) === 0) n.next = true;
            });
            return n;
        }
        function missing(f, n) {
            var next = f.next && n.next ? {
                season: f.next.season,
                episode: f.next.episode,
                date: ""
            } : f.next;
            var g = {
                status: n.status ? null : f.status,
                seasons: f.seasons,
                aired: f.aired,
                episodes: n.episodes === f.episodes ? null : f.episodes,
                last: f.last,
                next: next
            };
            if (n.seasons === f.seasons) {
                g.seasons = null;
                g.aired = false;
            }
            return g.status || g.seasons || g.episodes || g.last || g.next ? g : null;
        }
        function sparse(movie) {
            return ![ "status", "number_of_seasons", "seasons", "last_episode_to_air", "next_episode_to_air" ].some(function(k) {
                return movie[k] !== undefined && movie[k] !== null;
            });
        }
        function series(object, movie) {
            if (!movie || typeof movie !== "object" || movie.media_type === "movie" || movie.media_type === "person" || "gender" in movie || "known_for" in movie) return false;
            if (object.id !== undefined && movie.id !== undefined && String(object.id) !== String(movie.id)) return false;
            if (object.method) return object.method === "tv";
            return !movie.release_date && !!(movie.name || movie.original_name) && !!(movie.first_air_date || movie.number_of_seasons || movie.last_episode_to_air);
        }
        function plural(n, noun) {
            var lang = language(), form;
            if (lang === "cs") form = n === 1 ? "one" : n >= 2 && n <= 4 ? "few" : "many"; else if (/^(ru|uk|be)$/.test(lang)) form = n % 10 === 1 && n % 100 !== 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? "few" : "many"; else form = n === 1 ? "one" : "many";
            return Lampa.Lang.translate("cinema_detail_" + noun + "_" + form).replace("%d", n);
        }
        function formatDate(s) {
            var p = s.split("-"), day = Number(p[2]), month = Number(p[1]), lang = language();
            if (lang === "en") return MONTHS[month - 1] + " " + day + ", " + p[0];
            if (lang === "cs") return day + ". " + month + ". " + p[0];
            return p[2] + "." + p[1] + "." + p[0];
        }
        function element(tag, cls, value) {
            var e = document.createElement(tag);
            e.className = cls;
            if (value !== undefined) e.textContent = String(value);
            return e;
        }
        function build(f) {
            var box = element("div", "cinema-series-summary"), head = element("div", "cinema-series-summary__line"), used = false;
            if (f.status) {
                box.setAttribute("data-status", f.status);
                head.appendChild(element("span", "cinema-series-summary__status", Lampa.Lang.translate("cinema_detail_status_" + f.status)));
                used = true;
            }
            if (f.seasons) {
                head.appendChild(element("span", "cinema-series-summary__fact", plural(f.seasons, f.aired ? "aired" : "seasons")));
                used = true;
            }
            if (f.episodes) {
                head.appendChild(element("span", "cinema-series-summary__fact", plural(f.episodes, "episodes")));
                used = true;
            }
            if (used) box.appendChild(head);
            [ [ "last", f.last ], [ "next", f.next ] ].forEach(function(p) {
                if (!p[1]) return;
                var line = element("div", "cinema-series-summary__line cinema-series-summary__line--" + p[0]);
                line.appendChild(element("span", "cinema-series-summary__label", Lampa.Lang.translate("cinema_detail_" + p[0])));
                line.appendChild(element("span", "cinema-series-summary__episode", "S" + p[1].season + " · E" + p[1].episode));
                if (p[1].date) line.appendChild(element("span", "cinema-series-summary__date", formatDate(p[1].date)));
                box.appendChild(line);
            });
            return box;
        }
        function removeIn(root) {
            Array.prototype.forEach.call(root.querySelectorAll(".cinema-series-summary"), function(e) {
                if (e.parentNode) e.parentNode.removeChild(e);
            });
        }
        function place(body, f) {
            var anchor = body.querySelector(".full-start-new__details");
            if (!anchor || !anchor.parentNode) return;
            removeIn(body);
            var g = missing(f, nativeShown(body));
            if (g) anchor.parentNode.insertBefore(build(g), anchor.nextSibling);
        }
        function remember(key, entry) {
            fetched[key] = entry;
            var keys = Object.keys(fetched);
            for (var i = 0; keys.length - i > FETCHED_MAX; i++) if (!fetched[keys[i]].waiting) delete fetched[keys[i]];
        }
        function fetchDetail(id, source, done) {
            var api = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb, key = String(id);
            if (!/^\d+$/.test(key) || source && source !== "tmdb" && source !== "cub" || !api || typeof api.get !== "function") return;
            if (has(fetched, key)) {
                if (fetched[key].waiting) fetched[key].waiting.push(done); else done(fetched[key].json);
                return;
            }
            var entry = {
                waiting: [ done ]
            }, over = false, timer;
            remember(key, entry);
            function finish(json, failed) {
                if (over) return;
                over = true;
                clearTimeout(timer);
                var list = entry.waiting;
                entry.waiting = null;
                entry.json = json && typeof json === "object" && Number(json.id) === Number(id) && !(json.title && !json.name) && json.media_type !== "movie" && json.media_type !== "person" && !("gender" in json) ? json : null;
                if (failed && fetched[key] === entry) delete fetched[key];
                list.forEach(function(fn) {
                    try {
                        fn(entry.json);
                    } catch (e) {}
                });
            }
            timer = setTimeout(function() {
                finish(null, true);
            }, 1e4);
            try {
                api.get("tv/" + key, {}, function(json) {
                    finish(json, false);
                }, function() {
                    finish(null, true);
                });
            } catch (e) {
                finish(null, true);
            }
        }
        function show(body, object, movie) {
            var token = {};
            body.cinemaSeriesToken = token;
            removeIn(body);
            last = series(object, movie) ? {
                body: body,
                object: object,
                movie: movie
            } : null;
            if (!last || !owns()) return;
            var f = facts(movie, today());
            if (f) return place(body, f);
            if (!sparse(movie)) return;
            fetchDetail(movie.id, object.source || movie.source, function(json) {
                if (body.cinemaSeriesToken !== token || !owns() || !document.documentElement.contains(body)) return;
                var g = facts(json, today());
                if (g) place(body, g);
            });
        }
        Lampa.Listener.follow("full", function(e) {
            if (!e || e.type !== "complite") return;
            try {
                var body = e.body && (e.body.jquery ? e.body[0] : e.body), data = e.data || {};
                if (body && body.querySelector) show(body, e.object || {}, data.movie);
            } catch (err) {}
        });
        function sync() {
            if (!owns()) {
                if (last && last.body) last.body.cinemaSeriesToken = null;
                removeIn(document);
                return;
            }
            if (last && document.documentElement.contains(last.body) && !last.body.querySelector(".cinema-series-summary")) show(last.body, last.object, last.movie);
        }
        var translations = {
            cinema_detail_series: {
                cs: "Přehled seriálu v detailu",
                ru: "Сводка сериала на странице",
                uk: "Зведення серіалу на сторінці",
                en: "Series summary on the detail page"
            },
            cinema_detail_series_descr: {
                cs: "Stav, odvysílané sezóny, poslední a ohlášený další díl (TMDB).",
                ru: "Статус, вышедшие сезоны, последняя и объявленная следующая серия (TMDB).",
                uk: "Статус, сезони, що вийшли, остання й анонсована наступна серія (TMDB).",
                en: "Status, aired seasons, the last and the announced next episode (TMDB)."
            },
            cinema_detail_last: {
                cs: "Poslední díl",
                ru: "Последняя серия",
                uk: "Остання серія",
                en: "Last episode"
            },
            cinema_detail_next: {
                cs: "Další díl",
                ru: "Следующая серия",
                uk: "Наступна серія",
                en: "Next episode"
            }
        };
        [ [ "returning", "Pokračuje", "Выходит", "Виходить", "Ongoing" ], [ "production", "Ve výrobě", "Снимается", "Знімається", "In production" ], [ "planned", "Plánován", "Запланирован", "Заплановано", "Planned" ], [ "pilot", "Pilot", "Пилот", "Пілот", "Pilot" ], [ "ended", "Ukončen", "Завершён", "Завершено", "Ended" ], [ "canceled", "Zrušen", "Отменён", "Скасовано", "Canceled" ], [ "aired_one", "%d odvysílaná sezóna", "вышел %d сезон", "вийшов %d сезон", "%d aired season" ], [ "aired_few", "%d odvysílané sezóny", "вышло %d сезона", "вийшло %d сезони", "%d aired seasons" ], [ "aired_many", "%d odvysílaných sezón", "вышло %d сезонов", "вийшло %d сезонів", "%d aired seasons" ], [ "seasons_one", "%d sezóna", "%d сезон", "%d сезон", "%d season" ], [ "seasons_few", "%d sezóny", "%d сезона", "%d сезони", "%d seasons" ], [ "seasons_many", "%d sezón", "%d сезонов", "%d сезонів", "%d seasons" ], [ "episodes_one", "%d epizoda", "%d серия", "%d серія", "%d episode" ], [ "episodes_few", "%d epizody", "%d серии", "%d серії", "%d episodes" ], [ "episodes_many", "%d epizod", "%d серий", "%d серій", "%d episodes" ] ].forEach(function(p) {
            translations["cinema_detail_" + (/^(aired|seasons|episodes)_/.test(p[0]) ? "" : "status_") + p[0]] = {
                cs: p[1],
                ru: p[2],
                uk: p[3],
                en: p[4]
            };
        });
        if (Lampa.Lang && Lampa.Lang.add) Lampa.Lang.add(translations);
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: KEY,
                type: "trigger",
                default: true
            },
            field: {
                name: Lampa.Lang.translate(KEY),
                description: Lampa.Lang.translate(KEY + "_descr")
            },
            onChange: sync
        });
        return {
            sync: sync,
            facts: facts
        };
    };
    var Migrate = function(Lampa, opts) {
        "use strict";
        var LEGACY_VERSION = "20260925.11", LEGACY_PATH = "/lampa-cinema-skin/cinema.js", BACKUP = "cinema_legacy_plugin_backup", LIST = "plugins";
        if (!opts || typeof opts.authorized !== "function" || !Lampa.SettingsApi) return null;
        var reload = opts.reload || function() {
            window.location.reload();
        };
        function pathOf(url) {
            if (typeof url !== "string") return "";
            return url.split(/[?#]/)[0].replace(/^[a-z][a-z0-9+.\-]*:\/\/[^\/]*/i, "").replace(/^\/\/[^\/]*/, "");
        }
        function legacy(url) {
            return pathOf(url) === LEGACY_PATH;
        }
        function api() {
            var p = Lampa.Plugins;
            return p && typeof p.get === "function" && typeof p.save === "function" ? p : null;
        }
        function list() {
            var l = api() && api().get();
            return Array.isArray(l) ? l : null;
        }
        function raw() {
            try {
                return window.localStorage.getItem(LIST);
            } catch (e) {
                return undefined;
            }
        }
        function json(v) {
            try {
                return JSON.stringify(v);
            } catch (e) {
                return undefined;
            }
        }
        function snapshot(all) {
            var text = raw(), current = json(all);
            return typeof text === "string" && current !== undefined && text === current ? text : null;
        }
        function readBackup() {
            try {
                var b = JSON.parse(window.localStorage.getItem(BACKUP) || "null");
                return b && b.v === 1 && b.entry && typeof b.entry === "object" && legacy(b.entry.url) ? b : null;
            } catch (e) {
                return null;
            }
        }
        function dropBackup() {
            try {
                window.localStorage.removeItem(BACKUP);
            } catch (e) {}
        }
        function say(key) {
            if (Lampa.Noty && Lampa.Noty.show) Lampa.Noty.show(Lampa.Lang.translate(key));
        }
        function playing() {
            try {
                return !!(Lampa.Player && typeof Lampa.Player.opened === "function" && Lampa.Player.opened());
            } catch (e) {
                return false;
            }
        }
        function finish(key) {
            if (playing()) return say("cinema_unify_restart");
            say(key);
            setTimeout(function() {
                if (playing()) say("cinema_unify_restart"); else reload();
            }, 1200);
        }
        function commit(all, entry, status, before) {
            var old = entry.status, expected;
            entry.status = status;
            expected = json(all);
            try {
                api().save();
            } catch (e) {}
            var now = raw();
            if (expected !== undefined && now === expected) return "done";
            entry.status = old;
            if (now === null || now === before || now === expected) {
                try {
                    window.localStorage.setItem(LIST, before);
                } catch (e) {}
            }
            return raw() === before && json(all) === before ? "failed" : "unverified";
        }
        function bridged() {
            var base = window.lampaCinemaPilot, cards = window.lampaCinemaCards;
            return !!(opts.authorized() && base && base.version === LEGACY_VERSION && cards && cards.bridge === true && cards.version === opts.version && cards.base === LEGACY_VERSION);
        }
        function unify() {
            if (!bridged() || !api()) {
                say("cinema_unify_state");
                return "state";
            }
            var all = list();
            if (!all) {
                say("cinema_unify_state");
                return "state";
            }
            if (all.some(function(p) {
                return typeof p === "string" && legacy(p);
            })) {
                say("cinema_unify_format");
                return "format";
            }
            var mine = all.filter(function(p) {
                return p && typeof p === "object" && legacy(p.url);
            });
            var active = mine.filter(function(p) {
                return p.status == 1;
            });
            if (active.length > 1) {
                say("cinema_unify_many");
                return "many";
            }
            if (!active.length) {
                if (mine.length && readBackup()) {
                    say("cinema_unify_pending");
                    return "pending";
                }
                say("cinema_unify_missing");
                return "missing";
            }
            var before = snapshot(all);
            if (!before) {
                say("cinema_unify_format");
                return "format";
            }
            var entry = active[0], text = json(entry);
            try {
                window.localStorage.setItem(BACKUP, JSON.stringify({
                    v: 1,
                    entry: JSON.parse(text),
                    at: Date.now()
                }));
                var check = readBackup();
                if (!check || json(check.entry) !== text) throw new Error("backup");
            } catch (e) {
                dropBackup();
                say("cinema_unify_failed");
                return "failed";
            }
            var result = commit(all, entry, 0, before);
            if (result === "done") {
                finish("cinema_unify_done");
                return "done";
            }
            if (result === "failed") dropBackup();
            say(result === "failed" ? "cinema_unify_failed" : "cinema_unify_unverified");
            return result;
        }
        function restore() {
            var backup = readBackup();
            if (!opts.authorized() || !backup || !api()) {
                say("cinema_unify_state");
                return "state";
            }
            var all = list(), url = backup.entry.url;
            if (!all) {
                say("cinema_unify_state");
                return "state";
            }
            if (all.some(function(p) {
                return p === url;
            })) {
                say("cinema_unify_format");
                return "format";
            }
            var same = all.filter(function(p) {
                return p && typeof p === "object" && p.url === url;
            });
            var others = all.filter(function(p) {
                return p && typeof p === "object" && p.url !== url && legacy(p.url) && p.status == 1;
            });
            if (same.length !== 1 || others.length) {
                say("cinema_restore_conflict");
                return "conflict";
            }
            var before = snapshot(all);
            if (!before) {
                say("cinema_unify_format");
                return "format";
            }
            if (same[0].status !== backup.entry.status) {
                var result = commit(all, same[0], backup.entry.status, before);
                if (result !== "done") {
                    say(result === "failed" ? "cinema_unify_failed" : "cinema_unify_unverified");
                    return result;
                }
            }
            dropBackup();
            finish("cinema_restore_done");
            return "done";
        }
        var t = {
            cinema_unify: {
                cs: "Sjednotit Cinema a znovu načíst",
                ru: "Объединить Cinema и перезагрузить",
                uk: "Об’єднати Cinema й перезавантажити",
                en: "Unify Cinema and reload"
            },
            cinema_unify_descr: {
                cs: "Vypne starý plugin Cinema v rozšířeních tohoto zařízení, pak poběží jen aktuální verze. Lze vrátit.",
                ru: "Отключит старый плагин Cinema в расширениях этого устройства, останется только текущая версия. Можно вернуть.",
                uk: "Вимкне старий плагін Cinema у розширеннях цього пристрою, залишиться лише поточна версія. Можна повернути.",
                en: "Switches off the old Cinema plugin in this device’s extensions so only the current version runs. Reversible."
            },
            cinema_restore: {
                cs: "Vrátit starý plugin Cinema a znovu načíst",
                ru: "Вернуть старый плагин Cinema и перезагрузить",
                uk: "Повернути старий плагін Cinema й перезавантажити",
                en: "Restore the old Cinema plugin and reload"
            },
            cinema_restore_descr: {
                cs: "Znovu zapne plugin vypnutý sjednocením.",
                ru: "Снова включит плагин, отключённый объединением.",
                uk: "Знову ввімкне плагін, вимкнений об’єднанням.",
                en: "Switches the plugin turned off by unifying back on."
            },
            cinema_unify_done: {
                cs: "Starý plugin vypnut, načítám znovu…",
                ru: "Старый плагин отключён, перезагрузка…",
                uk: "Старий плагін вимкнено, перезавантаження…",
                en: "Old plugin switched off, reloading…"
            },
            cinema_restore_done: {
                cs: "Starý plugin zapnut, načítám znovu…",
                ru: "Старый плагин включён, перезагрузка…",
                uk: "Старий плагін увімкнено, перезавантаження…",
                en: "Old plugin switched on, reloading…"
            },
            cinema_unify_restart: {
                cs: "Hotovo. Po skončení přehrávání Lampu znovu otevřete.",
                ru: "Готово. После просмотра перезапустите Lampa.",
                uk: "Готово. Після перегляду перезапустіть Lampa.",
                en: "Done. Restart Lampa after playback."
            },
            cinema_unify_missing: {
                cs: "Starý plugin není v rozšířeních tohoto zařízení (může být v účtu CUB). Karty fungují dál.",
                ru: "Старого плагина нет в расширениях этого устройства (возможно, он в аккаунте CUB). Карточки работают как прежде.",
                uk: "Старого плагіна немає в розширеннях цього пристрою (можливо, він в акаунті CUB). Картки працюють як раніше.",
                en: "The old plugin is not in this device’s extensions (it may be in the CUB account). Cards keep working."
            },
            cinema_unify_pending: {
                cs: "Starý plugin je už vypnutý. Otevřete Lampu znovu.",
                ru: "Старый плагин уже отключён. Перезапустите Lampa.",
                uk: "Старий плагін уже вимкнено. Перезапустіть Lampa.",
                en: "The old plugin is already off. Restart Lampa."
            },
            cinema_unify_many: {
                cs: "Starý plugin je v rozšířeních vícekrát. Nic se nezměnilo, upravte je ručně.",
                ru: "Старый плагин добавлен несколько раз. Ничего не изменено, отредактируйте вручную.",
                uk: "Старий плагін додано кілька разів. Нічого не змінено, відредагуйте вручну.",
                en: "The old plugin is listed more than once. Nothing changed; edit the extensions by hand."
            },
            cinema_unify_format: {
                cs: "Seznam rozšíření nelze bezpečně přečíst. Nic se nezměnilo; otevřete Lampu znovu a zkuste to pak.",
                ru: "Список расширений не удаётся надёжно прочитать. Ничего не изменено; перезапустите Lampa и повторите.",
                uk: "Список розширень не вдається надійно прочитати. Нічого не змінено; перезапустіть Lampa й повторіть.",
                en: "The extensions list cannot be read safely. Nothing changed; restart Lampa and try again."
            },
            cinema_unify_state: {
                cs: "Stav Cinema se změnil. Nic se neupravilo.",
                ru: "Состояние Cinema изменилось. Ничего не изменено.",
                uk: "Стан Cinema змінився. Нічого не змінено.",
                en: "Cinema’s state has changed. Nothing was modified."
            },
            cinema_unify_failed: {
                cs: "Uložení se nepodařilo. Nic se nezměnilo.",
                ru: "Не удалось сохранить. Ничего не изменено.",
                uk: "Не вдалося зберегти. Нічого не змінено.",
                en: "Saving failed. Nothing changed."
            },
            cinema_unify_unverified: {
                cs: "Uložení nelze ověřit. Zkontrolujte Rozšíření; záloha zůstala pro obnovení.",
                ru: "Не удалось проверить сохранение. Проверьте расширения; резервная копия сохранена.",
                uk: "Не вдалося перевірити збереження. Перевірте розширення; резервну копію збережено.",
                en: "Saving could not be verified. Check the extensions; the backup is kept for restoring."
            },
            cinema_restore_conflict: {
                cs: "Plugin byl mezitím změněn nebo odebrán. Nic se neupravilo.",
                ru: "Плагин был изменён или удалён. Ничего не изменено.",
                uk: "Плагін було змінено або видалено. Нічого не змінено.",
                en: "The plugin entry was changed or removed meanwhile. Nothing was modified."
            }
        };
        if (Lampa.Lang && Lampa.Lang.add) Lampa.Lang.add(t);
        function button(name, action) {
            Lampa.SettingsApi.addParam({
                component: "cinema_pilot",
                param: {
                    name: name,
                    type: "button"
                },
                field: {
                    name: Lampa.Lang.translate(name),
                    description: Lampa.Lang.translate(name + "_descr")
                },
                onChange: action
            });
        }
        if (opts.mode === "bridge") button("cinema_unify", unify);
        if (readBackup()) button("cinema_restore", restore);
        return {
            unify: unify,
            restore: restore,
            pathOf: pathOf
        };
    };
    var authorizedCheck = null;
    function enabled() {
        return Lampa.Storage.value(KEY, "true") !== "false";
    }
    function authorized(done) {
        if (!window.Lampa) return;
        if (/(?:\?|&)cinema=off(?:&|$)/.test(window.location.search)) Lampa.Storage.set("cinema_pilot_enabled", false);
        done();
    }
    function boot() {
        if (window.lampaCinemaPilot) return;
        var Original = Lampa.Component.get("main");
        var OriginalFull = Lampa.Component.get("full");
        var Catalogs = [ "category", "category_full", "bookmarks", "favorite", "myperson", "actor", "relise", "subscribes", "mytorrents", "timetable" ].map(function(name) {
            return {
                name: name,
                original: Lampa.Component.get(name)
            };
        }).filter(function(c) {
            return c.original;
        });
        Catalogs.forEach(function(c) {
            c.cinema = CinemaCatalog(c.original, c.name === "category");
        });
        if (!Original) return;
        var style = document.createElement("style");
        style.id = "cinema-pilot-style";
        document.head.appendChild(style);
        function option(key) {
            return Lampa.Storage.value(key, "true") !== "false";
        }
        var ACCENTS = {
            red: [ "#de3041", "#ee4151" ],
            blue: [ "#2f7de1", "#4a90ee" ],
            green: [ "#1f9d55", "#2bb566" ],
            orange: [ "#e8711c", "#f28a3a" ],
            purple: [ "#8b5cf6", "#9d74f8" ],
            teal: [ "#0f9e9e", "#1cb5b5" ]
        };
        function paint() {
            var a = ACCENTS[Lampa.Storage.value("cinema_accent", "red")] || ACCENTS.red;
            style.textContent = STYLE.split("#de3041").join(a[0]).split("#ee4151").join(a[1]).split("#ef4051").join(a[1]);
        }
        paint();
        if (Lampa.Lang.add) Lampa.Lang.add({
            cinema_look: {
                ru: "Оформление Cinema",
                uk: "Оформлення Cinema",
                en: "Cinema look"
            },
            cinema_look_descr: {
                ru: "Новый вид главной, каталогов, карточек и окон на этом устройстве.",
                uk: "Новий вигляд головної, каталогів, карток і вікон на цьому пристрої.",
                en: "New home, catalogs, cards and windows on this device."
            },
            cinema_accent: {
                ru: "Цвет акцента",
                uk: "Колір акценту",
                en: "Accent colour"
            },
            cinema_accent_descr: {
                ru: "Главные кнопки, прогресс просмотра и метки дубляжа.",
                uk: "Головні кнопки, прогрес перегляду та мітки дубляжу.",
                en: "Main buttons, watch progress and dubbing chips."
            },
            cinema_accent_red: {
                ru: "Красный",
                uk: "Червоний",
                en: "Red"
            },
            cinema_accent_blue: {
                ru: "Синий",
                uk: "Синій",
                en: "Blue"
            },
            cinema_accent_green: {
                ru: "Зелёный",
                uk: "Зелений",
                en: "Green"
            },
            cinema_accent_orange: {
                ru: "Оранжевый",
                uk: "Помаранчевий",
                en: "Orange"
            },
            cinema_accent_purple: {
                ru: "Фиолетовый",
                uk: "Фіолетовий",
                en: "Purple"
            },
            cinema_accent_teal: {
                ru: "Бирюзовый",
                uk: "Бірюзовий",
                en: "Teal"
            },
            cinema_banner: {
                ru: "Баннер на главной",
                uk: "Банер на головній",
                en: "Home banner"
            },
            cinema_banner_descr: {
                ru: "Крупный баннер с трендами дня над рядами главной.",
                uk: "Великий банер із трендами дня над рядами головної.",
                en: "Large banner with today's trends above the home rows."
            },
            cinema_nova: {
                ru: "Оформление Nova",
                uk: "Оформлення Nova",
                en: "Nova look"
            },
            cinema_nova_descr: {
                ru: "Экран «Онлайн» плагина nova_plus в цветах Cinema (если плагин установлен).",
                uk: "Екран «Онлайн» плагіна nova_plus у кольорах Cinema (якщо плагін встановлено).",
                en: "The nova_plus plugin's Online screen in Cinema colours (when installed)."
            },
            cinema_voice_fold: {
                ru: "Переводы в Nova окном",
                uk: "Переклади в Nova вікном",
                en: "Nova translations as a picker"
            },
            cinema_voice_fold_descr: {
                ru: "Вместо ряда всех переводов — выбранный и окно со списком.",
                uk: "Замість ряду всіх перекладів — вибраний і вікно зі списком.",
                en: "The chosen translation and a window with the list instead of a row of all."
            },
            cinema_tracks: {
                ru: "Аудиодорожки Cinema",
                uk: "Аудіодоріжки Cinema",
                en: "Cinema audio tracks"
            },
            cinema_tracks_descr: {
                ru: "Метки DUB/MVO, выбор дорожки в окне файлов и память дубляжа (Lampac GStreamer).",
                uk: "Мітки DUB/MVO, вибір доріжки у вікні файлів і пам'ять дубляжу (Lampac GStreamer).",
                en: "DUB/MVO chips, track choice in the files window and remembered dubbing (Lampac GStreamer)."
            },
            cinema_pick: {
                ru: "Выбор фильма",
                uk: "Вибір фільму",
                en: "Choose a title"
            },
            cinema_pick_tv: {
                ru: "Выбор фильма, стрелки влево и вправо",
                uk: "Вибір фільму, стрілки ліворуч і праворуч",
                en: "Choose a title with the left and right arrows"
            },
            cinema_prev: {
                ru: "Предыдущий фильм",
                uk: "Попередній фільм",
                en: "Previous title"
            },
            cinema_next: {
                ru: "Следующий фильм",
                uk: "Наступний фільм",
                en: "Next title"
            }
        });
        function text(key, fallback) {
            var s = Lampa.Lang.translate(key);
            return s && s !== key ? s : fallback;
        }
        function icon(name) {
            var paths = {
                home: '<path d="M3 11l9-8 9 8v10h-6v-7H9v7H3z"/>',
                play: '<path d="M8 4l12 8-12 8z"/>',
                plus: '<path d="M12 4v16M4 12h16"/>'
            };
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + "</svg>";
        }
        function activate() {
            document.body.classList.toggle("cinema-pilot", enabled());
            if (cardFeatures) cardFeatures.sync();
            if (detailFeatures) detailFeatures.sync();
            document.body.classList.toggle("cinema-nova", enabled() && option("cinema_nova"));
            Lampa.Component.add("main", enabled() ? option("cinema_banner") ? Cinema : CinemaRows : Original);
            if (OriginalFull) Lampa.Component.add("full", enabled() ? CinemaFull : OriginalFull);
            Catalogs.forEach(function(c) {
                Lampa.Component.add(c.name, enabled() ? c.cinema : c.original);
            });
            if (!enabled()) document.body.classList.remove("cinema-pilot-catalog");
            var current = Lampa.Activity.active();
            if (current && (current.component === "main" || current.component === "full" || Catalogs.some(function(c) {
                return c.name === current.component;
            }))) Lampa.Activity.replace();
        }
        function openHome() {
            Lampa.Activity.push({
                component: "main",
                title: "Lampa Cinema",
                source: Lampa.Storage.field("source") || "tmdb",
                url: "",
                page: 1
            });
        }
        function classic() {
            Lampa.Storage.set(KEY, false);
            activate();
        }
        function button(label, css, symbol, action) {
            var b = $('<button type="button" class="selector cinema-button"></button>').addClass(css || "").attr("aria-label", label);
            if (symbol) b.append(icon(symbol));
            b.append($("<span></span>").text(label));
            b.on("hover:enter", action);
            return b;
        }
        var LOGO_KEY = "cinema_logo_cache", LOGO_TTL = 7 * 864e5, NONE_TTL = 864e5, LOGO_MAX = 300;
        var logos = {}, failed = {}, waiting = {};
        try {
            var stored = JSON.parse(window.localStorage.getItem(LOGO_KEY) || "{}") || {};
            Object.keys(stored).forEach(function(k) {
                var e = stored[k];
                if (e && typeof e.p === "string" && (e.p === "" || /^\/[\w.\-\/]+$/.test(e.p)) && Date.now() - e.t < (e.p ? LOGO_TTL : NONE_TTL)) logos[k] = e;
            });
        } catch (e) {}
        function saveLogos() {
            try {
                var keep = {};
                Object.keys(logos).sort(function(a, b) {
                    return logos[b].t - logos[a].t;
                }).slice(0, LOGO_MAX).forEach(function(k) {
                    keep[k] = logos[k];
                });
                logos = keep;
                window.localStorage.setItem(LOGO_KEY, JSON.stringify(keep));
            } catch (e) {}
        }
        function logoSrc(path) {
            var src = path ? Lampa.Api.img(path, "w500") : "";
            return /^(https?:\/\/|\/)/i.test(src) ? src : "";
        }
        function logoFor(data, done) {
            var api = Lampa.Api.sources && Lampa.Api.sources.tmdb;
            var lang = String(Lampa.Storage.field("tmdb_lang") || Lampa.Storage.get("language", "ru") || "ru").split("-")[0];
            var kind = data.name ? "tv" : "movie", key = kind + ":" + data.id + ":" + lang;
            if (Object.prototype.hasOwnProperty.call(logos, key)) return done(logoSrc(logos[key].p));
            if (failed[key] || !api || !api.get || !/^\d+$/.test(String(data.id))) return done("");
            if (waiting[key]) return waiting[key].push(done);
            waiting[key] = [ done ];
            function finish(src) {
                var list = waiting[key] || [];
                delete waiting[key];
                list.forEach(function(fn) {
                    fn(src);
                });
            }
            api.get(kind + "/" + data.id + "/images?include_image_language=" + lang + ",en,null", {}, function(json) {
                var list = json && json.logos || [], pick = null;
                [ lang, "en", null ].some(function(l) {
                    pick = list.filter(function(x) {
                        return x && x.file_path && (x.iso_639_1 || null) === l;
                    })[0];
                    return !!pick;
                });
                var path = pick && /^\/[\w.\-\/]+$/.test(pick.file_path) ? pick.file_path : "";
                logos[key] = {
                    p: path,
                    t: Date.now()
                };
                saveLogos();
                finish(logoSrc(path));
            }, function() {
                failed[key] = true;
                finish("");
            });
        }
        function applyLogo(title, name, src) {
            var img = $('<img class="cinema-logo">').attr("alt", name).on("error", function() {
                title.removeClass("cinema-title--logo").empty().text(name);
            });
            title.addClass("cinema-title--logo").empty().append(img.attr("src", src));
        }
        function CinemaFull(object) {
            var comp = new OriginalFull(object);
            if (!comp.use) return comp;
            comp.cinemaDetail = true;
            function release() {
                var active = Lampa.Activity.active();
                var current = active && active.activity && active.activity.component;
                if (!current || current === comp || !current.cinemaDetail) document.body.classList.remove("cinema-pilot-detail");
            }
            comp.use({
                onCreate: function() {
                    $(this.render(true)).addClass("cinema-detail cinema-rows");
                },
                onStart: function() {
                    $(this.render(true)).toggleClass("cinema-detail cinema-rows", enabled());
                    document.body.classList.toggle("cinema-pilot-detail", enabled());
                },
                onBuild: function() {
                    var movie = this.props && this.props.get && this.props.get("movie");
                    var title = $(this.render(true)).find(".full-start-new__title").first();
                    if (!enabled() || !movie || !title.length) return;
                    var name = movie.title || movie.name;
                    logoFor(movie, function(src) {
                        if (src && document.body.contains(title[0])) applyLogo(title, name, src);
                    });
                },
                onPause: function() {
                    document.body.classList.remove("cinema-pilot-detail");
                },
                onDestroy: release
            });
            return comp;
        }
        function CinemaCatalog(OriginalCatalog, rows) {
            return function(object) {
                var comp = new OriginalCatalog(object);
                if (!comp.use) return comp;
                comp.cinemaCatalog = true;
                if (rows) autofill.attach(comp);
                function release() {
                    var active = Lampa.Activity.active();
                    var current = active && active.activity && active.activity.component;
                    if (!current || current === comp || !current.cinemaCatalog) document.body.classList.remove("cinema-pilot-catalog");
                }
                function mark() {
                    $(comp.render(true)).toggleClass("cinema-catalog cinema-rows", enabled());
                    document.body.classList.toggle("cinema-pilot-catalog", enabled());
                }
                comp.use({
                    onCreate: function() {
                        $(this.render(true)).addClass("cinema-catalog cinema-rows");
                    },
                    onStart: mark,
                    onEmpty: function() {
                        var start = this.start;
                        if (typeof start === "function") this.start = function() {
                            mark();
                            return start.apply(this, arguments);
                        };
                    },
                    onPause: function() {
                        document.body.classList.remove("cinema-pilot-catalog");
                    },
                    onDestroy: release
                });
                return comp;
            };
        }
        function CinemaRows(object) {
            var comp = new Original(object);
            autofill.attach(comp);
            return comp;
        }
        function Cinema(object) {
            var comp = new Original(object);
            if (!comp.use || !comp.scroll || !Array.isArray(comp.items)) return comp;
            comp.cinemaPilot = true;
            autofill.attach(comp);
            var hero, picked, last, inserted = false, alive = true;
            var trendsLoading = false, trendsLoadedAt = 0;
            function described(d) {
                return !!(d && String(d.overview || "").trim());
            }
            function refreshTrends() {
                var api = Lampa.Api.sources && Lampa.Api.sources.tmdb;
                if (!api || !api.get || Lampa.Account && Lampa.Account.Permit && Lampa.Account.Permit.child || trendsLoading || Date.now() - trendsLoadedAt < 18e5) return;
                trendsLoading = true;
                var pending = 2, groups = {};
                function complete(kind, json) {
                    if (!alive) return;
                    groups[kind] = (json && json.results || []).filter(function(d) {
                        return d && d.id && !d.adult && d.backdrop_path && (d.title || d.name) && described(d);
                    }).slice(0, 5).map(function(d) {
                        var card = $.extend({}, d, {
                            source: "tmdb",
                            media_type: kind
                        });
                        if (kind === "tv") card.original_name = card.original_name || card.name;
                        return card;
                    });
                    if (--pending) return;
                    trendsLoading = false;
                    trendsLoadedAt = Date.now();
                    var next = [], movies = groups.movie || [], series = groups.tv || [];
                    for (var i = 0; i < 5; i++) {
                        if (movies[i]) next.push(movies[i]);
                        if (series[i]) next.push(series[i]);
                    }
                    if (!next.length) return;
                    var previous = picked, index = -1;
                    slides = next;
                    slides.forEach(function(d) {
                        logoFor(d, function() {});
                    });
                    if (previous) index = slides.findIndex(function(d) {
                        return d.id === previous.id && !!d.name === !!previous.name;
                    });
                    slideIndex = Math.max(0, index);
                    choose(slides[slideIndex]);
                    hero.find(".cinema-pager").prop("hidden", slides.length < 2);
                    if (!inserted) {
                        comp.items.unshift(section);
                        inserted = true;
                        comp.active++;
                    }
                    nextAt = Date.now() + 8e3;
                }
                [ "movie", "tv" ].forEach(function(kind) {
                    api.get("trending/" + kind + "/day", {}, function(json) {
                        complete(kind, json);
                    }, function() {
                        complete(kind, null);
                    });
                });
            }
            var slides = [], slideIndex = 0, rotationTimer = 0, paused = false, nextAt = 0, touchStart;
            function stopRotation() {
                window.clearTimeout(rotationTimer);
                rotationTimer = 0;
            }
            function startRotation() {
                stopRotation();
                if (!alive || paused) return;
                rotationTimer = window.setTimeout(function tick() {
                    if (!alive || paused) return;
                    var rect = hero[0].getBoundingClientRect();
                    if (!document.hidden && Lampa.Activity.own(comp) && slides.length > 1 && Date.now() >= nextAt && rect.bottom > 160 && rect.top < window.innerHeight && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        moveSlide(1, false);
                    }
                    rotationTimer = window.setTimeout(tick, 1e3);
                }, 1e3);
            }
            function holdRotation() {
                nextAt = Date.now() + 12e3;
            }
            function moveSlide(direction, manual) {
                if (slides.length < 2) return;
                slideIndex = (slideIndex + direction + slides.length) % slides.length;
                choose(slides[slideIndex]);
                nextAt = Date.now() + (manual ? 12e3 : 8e3);
            }
            function showTitle(data) {
                var name = data.title || data.name, title = hero.find(".cinema-title");
                title.removeClass("cinema-title--logo").empty().text(name);
                logoFor(data, function(src) {
                    if (alive && picked === data && src) applyLogo(title, name, src);
                });
            }
            function full() {
                if (!picked) return;
                if (Lampa.Router && Lampa.Router.call) return Lampa.Router.call("full", picked);
                Lampa.Activity.push({
                    component: "full",
                    id: picked.id,
                    method: picked.name ? "tv" : "movie",
                    card: picked,
                    source: picked.source || object.source || "tmdb",
                    url: picked.url || ""
                });
            }
            function updateBookmark() {
                if (!picked || !hero) return;
                var marked = Lampa.Favorite.check(picked).wath;
                hero.find(".cinema-save").attr("aria-pressed", marked ? "true" : "false").find("span").text(marked ? text("title_book", "В моём списке") + " ✓" : text("title_wath", "Хочу посмотреть"));
            }
            function choose(data) {
                if (!alive || !hero || !data || !data.id || !(data.title || data.name) || typeof data.gender !== "undefined") return;
                picked = data;
                showTitle(data);
                hero.find(".cinema-kicker").text(text(data.name ? "menu_tv" : "menu_movies", data.name ? "Сериалы" : "Фильмы"));
                hero.find(".cinema-year").text(String(data.release_date || data.first_air_date || "").slice(0, 4));
                hero.find(".cinema-rating").text(Number(data.vote_average) > 0 ? "★ " + Number(data.vote_average).toFixed(1) : "");
                hero.find(".cinema-desc").text(data.overview || text("full_notext", "Подробности на странице фильма."));
                var image = data.backdrop_path ? Lampa.Api.img(data.backdrop_path, "w1280") : data.background_image || (data.poster_path ? Lampa.Api.img(data.poster_path, "w780") : data.poster || data.img || "");
                var art = hero.find(".cinema-art");
                if (image && /^(https?:\/\/|\/|data:image\/)/i.test(image)) art.attr("src", image).prop("hidden", false); else art.removeAttr("src").prop("hidden", true);
                hero.find(".cinema-open,.cinema-save").prop("disabled", false);
                updateBookmark();
            }
            var section = {
                render: function(js) {
                    return js ? hero[0] : hero;
                },
                destroy: function() {},
                toggle: function() {
                    comp.active = 0;
                    comp.scroll.update(hero[0]);
                    Lampa.Controller.add("cinema_hero", {
                        link: section,
                        toggle: function() {
                            Lampa.Controller.collectionSet(hero);
                            Lampa.Controller.collectionFocus(last || (Lampa.Platform.screen("tv") ? hero.find(".cinema-title")[0] : false), hero);
                        },
                        up: function() {
                            if (Lampa.Platform.screen("tv") && !hero.find(".cinema-title").hasClass("focus")) Lampa.Controller.collectionFocus(hero.find(".cinema-title")[0], hero); else Lampa.Controller.toggle("head");
                        },
                        down: function() {
                            if (Lampa.Platform.screen("tv") && hero.find(".cinema-title").hasClass("focus")) Lampa.Controller.collectionFocus(hero.find(".cinema-open")[0], hero); else if (comp.items[1]) comp.items[1].toggle();
                        },
                        left: function() {
                            if (Lampa.Platform.screen("tv") && hero.find(".cinema-title").hasClass("focus")) moveSlide(-1, true); else if (Navigator.canmove("left")) Navigator.move("left"); else Lampa.Controller.toggle("menu");
                        },
                        right: function() {
                            if (Lampa.Platform.screen("tv") && hero.find(".cinema-title").hasClass("focus")) moveSlide(1, true); else Navigator.move("right");
                        },
                        back: function() {
                            Lampa.Activity.backward();
                        }
                    });
                    Lampa.Controller.toggle("cinema_hero");
                }
            };
            comp.use({
                onCreate: function() {
                    $(this.html).addClass("cinema-home cinema-rows");
                    hero = $('<section class="cinema-hero"><img class="cinema-art" alt="" hidden><div class="cinema-shade"></div><div class="cinema-hero-label">LAMPA CINEMA</div><div class="cinema-copy"><div class="cinema-kicker"></div><h1 class="cinema-title">Lampa Cinema</h1><div class="cinema-meta"><span class="cinema-year"></span><span class="cinema-rating"></span></div><p class="cinema-desc"></p><div class="cinema-actions"></div></div></section>');
                    hero.find(".cinema-art").on("error", function() {
                        this.hidden = true;
                    });
                    hero.find(".cinema-actions").append(button(text("title_watch", "Смотреть"), "cinema-button-primary cinema-open", "play", full).prop("disabled", true));
                    hero.find(".cinema-actions").append(button(text("title_wath", "Хочу посмотреть"), "cinema-save", "plus", function() {
                        if (picked) {
                            Lampa.Favorite.toggle("wath", picked);
                            updateBookmark();
                        }
                    }).prop("disabled", true));
                    hero.on("hover:focus", ".selector", function() {
                        last = this;
                        holdRotation();
                    });
                    hero.on("touchstart", function(e) {
                        var t = e.originalEvent.touches[0];
                        touchStart = {
                            x: t.clientX,
                            y: t.clientY
                        };
                        holdRotation();
                    });
                    hero.on("touchend", function(e) {
                        var t = e.originalEvent.changedTouches[0];
                        if (touchStart && Math.abs(t.clientX - touchStart.x) > 60 && Math.abs(t.clientX - touchStart.x) > Math.abs(t.clientY - touchStart.y) * 1.5) moveSlide(t.clientX < touchStart.x ? 1 : -1, true);
                        touchStart = null;
                    });
                    hero.on("touchcancel", function() {
                        touchStart = null;
                    });
                    hero.on("pointerdown mousemove keydown", holdRotation);
                    var pager = $('<div class="cinema-pager" hidden aria-label="' + text("cinema_pick", "Выбор фильма") + '"></div>');
                    pager.append(button("‹", "cinema-prev", null, function() {
                        moveSlide(-1, true);
                    }).attr("aria-label", text("cinema_prev", "Предыдущий фильм")));
                    pager.append(button("›", "cinema-next", null, function() {
                        moveSlide(1, true);
                    }).attr("aria-label", text("cinema_next", "Следующий фильм")));
                    hero.append(pager);
                    if (Lampa.Platform.screen("tv")) {
                        hero.addClass("cinema-tv");
                        hero.find(".cinema-title").addClass("selector").attr("aria-label", text("cinema_pick_tv", "Выбор фильма, стрелки влево и вправо")).on("hover:enter", function(e) {
                            if (e.target === this) full();
                        });
                    }
                    $(this.scroll.body(true)).prepend(hero);
                }
            }, 0);
            comp.use({
                onInstance: function(row, data) {
                    if (!row.use) return;
                    var cards = (data.results || []).filter(function(d) {
                        return d && d.id && typeof d.gender === "undefined" && (d.title || d.name);
                    });
                    if (cards.some(described)) cards = cards.filter(described);
                    if (cards.length && !slides.length) {
                        var seen = {};
                        slides = cards.filter(function(d) {
                            var key = (d.name ? "tv:" : "movie:") + d.id;
                            if (seen[key]) return false;
                            seen[key] = true;
                            return true;
                        }).slice(0, 6);
                        choose(slides[0]);
                        hero.find(".cinema-pager").prop("hidden", slides.length < 2);
                        nextAt = Date.now() + 8e3;
                    }
                },
                onBuild: function() {
                    if (!inserted && picked) {
                        this.items.unshift(section);
                        inserted = true;
                        this.active = 0;
                    }
                    Lampa.Layer.visible(this.scroll.render(true));
                    refreshTrends();
                },
                onStart: function() {
                    document.body.classList.add("cinema-pilot-home");
                    updateBookmark();
                    nextAt = Date.now() + 8e3;
                    paused = false;
                    startRotation();
                    refreshTrends();
                },
                onPause: function() {
                    paused = true;
                    stopRotation();
                    document.body.classList.remove("cinema-pilot-home");
                },
                onDestroy: function() {
                    alive = false;
                    stopRotation();
                    hero.remove();
                    var active = Lampa.Activity.active();
                    var current = active && active.activity && active.activity.component;
                    if (!current || current === comp || !current.cinemaPilot) document.body.classList.remove("cinema-pilot-home");
                }
            });
            return comp;
        }
        Lampa.Listener.follow("activity", function(e) {
            if (!e || e.type !== "start" || e.component !== "torrents" || !enabled()) return;
            var movie = e.object && e.object.movie, act = e.object && e.object.activity;
            if (!movie || !act || !act.render) return;
            var tries = 0;
            (function dress() {
                var root = act.render(true), card = root && root.querySelector && root.querySelector(".explorer-card");
                if (!card) {
                    if (++tries < 20) setTimeout(dress, 150);
                    return;
                }
                var art = movie.backdrop_path ? Lampa.Api.img(movie.backdrop_path, "w780") : "";
                if (/^(https?:\/\/|\/)/i.test(art)) card.style.setProperty("--cinema-backdrop", 'url("' + art.replace(/["\\]/g, "") + '")');
                var title = $(card).find(".explorer-card__title").first(), name = movie.title || movie.name;
                if (title.length && name) logoFor(movie, function(src) {
                    if (src && document.body.contains(title[0])) applyLogo(title, name, src);
                });
            })();
        });
        Lampa.Listener.follow("torrent_file", function(e) {
            if (!e || e.type !== "list_open" || !enabled() || !e.params || !e.params.movie) return;
            var movie = e.params.movie, name = movie.title || movie.name, tries = 0;
            if (!name) return;
            logoFor(movie, function(src) {
                if (!src) return;
                (function place() {
                    var files = document.querySelector(".modal .torrent-files");
                    if (!files) {
                        if (++tries < 30) setTimeout(place, 100);
                        return;
                    }
                    var modal = $(files).closest(".modal"), title = modal.find(".modal__title").first();
                    if (!title.length) return;
                    modal.addClass("cinema-files-logo");
                    applyLogo(title, name, src);
                })();
            });
        });
        var VOICE_TYPES = [ [ "DUB", /дубляж|дублирован|\bdub\b|\bdubbing\b/i ], [ "MVO", /многоголос|\bmvo\b|\bpmvo\b/i ], [ "DVO", /двухголос|\bdvo\b/i ], [ "AVO", /авторск|одноголос|\bavo\b|\bvo\b/i ], [ "ORIG", /оригинал|original|\beng\b|\bua\b|\bukr\b/i ], [ "SUB", /субтитр|sub(title)?s?\b/i ] ];
        var VOICE_STUDIO = [ [ "MVO", /lostfilm|лостфильм|tvshows|dniprofilm|невафильм|newstudio|newcomers|baibako|байбако|alexfilm|jaskier|coldfilm|колдфильм|hdrezka|rezkastudio|red head sound|sunshine|amedia|zakadry|закадры|linefilm|le-production|1win|kerob|profix|selena|октопус/i ], [ "DVO", /кубик в кубе|kubik|viruseproject|вирус|green ?tea|paradox/i ], [ "AVO", /яроцк|гаврилов|володарск|сербин|горчаков|михал[её]в|живов|пучков|гоблин|кураж|дольск|есарев|карповск|визгунов/i ] ];
        function voiceType(name) {
            var hit = VOICE_TYPES.filter(function(t) {
                return t[1].test(name);
            })[0] || VOICE_STUDIO.filter(function(t) {
                return t[1].test(name);
            })[0];
            return hit ? hit[0] : "";
        }
        var voiceOpen = null;
        function voiceClose(focusChosen) {
            if (!voiceOpen) return;
            var group = voiceOpen, chosen = group.querySelector(".nova-plus__row > .nova-chip--active");
            group.classList.remove("cinema-voice-open");
            group.style.height = "";
            voiceOpen = null;
            try {
                var name = Lampa.Controller.enabled().name;
                if (name) Lampa.Controller.toggle(name);
                if (focusChosen && chosen && document.body.contains(chosen)) Lampa.Controller.collectionFocus(chosen, $(chosen).closest(".nova-plus-root")[0] || chosen);
            } catch (e) {}
        }
        function voiceToggle(group) {
            if (voiceOpen === group) return voiceClose(true);
            voiceClose(false);
            group.style.height = group.getBoundingClientRect().height + "px";
            group.classList.add("cinema-voice-open");
            voiceOpen = group;
            var row = group.querySelector(".nova-plus__row"), chosen = row.querySelector(".nova-chip--active");
            try {
                Lampa.Controller.collectionSet(row);
                if (chosen) Lampa.Controller.collectionFocus(chosen, row);
            } catch (e) {}
        }
        var voiceKeyAt = 0;
        function voiceEnter(chip, fromKey) {
            if (!fromKey && Date.now() - voiceKeyAt < 400) return false;
            var g = $(chip).closest('[data-nova-group="voice"]')[0];
            if (!g || !g.classList.contains("cinema-voice-fold")) return false;
            if (voiceOpen === g) {
                voiceClose(true);
                return true;
            }
            if (chip.classList.contains("nova-chip--active")) {
                voiceToggle(g);
                return true;
            }
            return false;
        }
        function dressVoices() {
            if (!enabled() || !option("cinema_nova") || !option("cinema_voice_fold")) return;
            document.querySelectorAll('.nova-plus-root.nova-plus [data-nova-group="voice"]').forEach(function(group) {
                var chips = Array.prototype.slice.call(group.querySelectorAll(".nova-plus__row > .nova-chip"));
                if (chips.length < 2) return;
                group.classList.add("cinema-voice-fold");
                var counts = chips.map(function(c) {
                    var sub = c.querySelector(".nova-chip__sub");
                    return parseInt(sub && sub.textContent, 10) || 0;
                });
                var full = Math.max.apply(null, counts);
                chips.forEach(function(c, i) {
                    var label = c.querySelector(".nova-chip__label");
                    var name = String(label && label.textContent || "").trim();
                    var sign = name + "|" + counts[i] + "|" + full;
                    if (c.getAttribute("data-cinema-voice") === sign) return;
                    c.setAttribute("data-cinema-voice", sign);
                    $(c).children(".cinema-voice").remove();
                    var type = voiceType(name), box = $('<span class="cinema-voice"></span>');
                    if (type) box.append($('<span class="cinema-voice__type"></span>').text(type).addClass(type === "DUB" ? "cinema-voice__type--dub" : type === "ORIG" ? "cinema-voice__type--orig" : ""));
                    box.append($('<span class="cinema-voice__name"></span>').text(type === "DUB" ? name.replace(/^дубляж\s*/i, "") || name : name));
                    if (counts[i] && full && counts[i] < full) box.append($('<span class="cinema-voice__part"></span>').text(counts[i] + " / " + full));
                    box.append($('<span class="cinema-voice__more"></span>')).append($('<span class="cinema-voice__caret" aria-hidden="true"></span>'));
                    $(c).append(box);
                    if (!c.cinemaVoiceBound) {
                        c.cinemaVoiceBound = true;
                        c.addEventListener("hover:enter", function() {
                            voiceEnter(this);
                        });
                    }
                });
                group.querySelectorAll(".cinema-voice__more").forEach(function(m) {
                    m.textContent = "";
                });
                var active = group.querySelector(".nova-plus__row > .nova-chip--active .cinema-voice__more");
                if (active) active.textContent = "ещё " + (chips.length - 1);
            });
        }
        var voiceQueued = false;
        new MutationObserver(function() {
            if (voiceQueued || !document.body.classList.contains("cinema-pilot")) return;
            voiceQueued = true;
            setTimeout(function() {
                voiceQueued = false;
                try {
                    dressVoices();
                } catch (e) {}
                try {
                    dressTracks();
                } catch (e) {}
                if (voiceOpen && !document.body.contains(voiceOpen)) voiceOpen = null;
            }, 40);
        }).observe(document.body, {
            childList: true,
            subtree: true
        });
        $(document).on("hover:focus", ".selector", function() {
            if (voiceOpen && !voiceOpen.contains(this)) voiceClose(false);
        });
        document.addEventListener("click", function(e) {
            if (!voiceOpen || voiceOpen.contains(e.target)) return;
            e.preventDefault();
            e.stopPropagation();
            voiceClose(false);
        }, true);
        window.addEventListener("keydown", function(e) {
            if (e.keyCode === 13) {
                var focused = document.querySelector(".cinema-voice-fold .nova-plus__row > .nova-chip.focus");
                if (!focused) return;
                if (voiceOpen && !focused.classList.contains("nova-chip--active")) {
                    voiceKeyAt = Date.now();
                    voicePick = true;
                    return;
                }
                if (voiceEnter(focused, true)) {
                    voiceKeyAt = Date.now();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
                return;
            }
            if (!voiceOpen || [ 8, 27, 461, 10009, 166 ].indexOf(e.keyCode) === -1) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            voiceClose(true);
        }, true);
        var voicePick = false;
        window.addEventListener("keyup", function(e) {
            if (e.keyCode !== 13 || !voicePick) return;
            voicePick = false;
            setTimeout(function() {
                voiceClose(true);
            }, 60);
        }, true);
        var AUDIO_CODE = /^(DUB|MVO|DVO|AVO|VO|SUB|ORIGINAL|ОРИГИНАЛ|ДУБЛЯЖ)(?=$|[\s|:\-–—\[(])\s*[|:\-–—]?\s*(.*)$/i;
        var AUDIO_DESC = /^(профессиональный|любительский|авторский)?\s*\(([^)]*)\)\s*[|:\-–—]?\s*(.*)$/i;
        function audioParts(text) {
            var m = text.match(AUDIO_CODE), type, d;
            if (m) return {
                type: m[1].toUpperCase().replace(/^(ORIGINAL|ОРИГИНАЛ)$/, "ORIG").replace(/^ДУБЛЯЖ$/, "DUB"),
                name: m[2],
                amateur: false
            };
            m = text.match(AUDIO_DESC);
            if (!m) return null;
            d = m[2].toLowerCase();
            type = /дублир|дубляж/.test(d) ? "DUB" : /многоголос/.test(d) ? "MVO" : /двухголос/.test(d) ? "DVO" : /одноголос/.test(d) ? /^авторск/i.test(m[1] || "") ? "AVO" : "VO" : /оригинал/.test(d) ? "ORIG" : "";
            return type ? {
                type: type,
                name: m[3],
                amateur: /^любительск/i.test(m[1] || "")
            } : null;
        }
        var TRACK_TECH = /\b(?:A_)?(?:E-?AC-?3|AC-?3|AAC|DTS(?:-HD)?|TRUEHD|PCM|FLAC|OPUS|MP3|MPEG)\b|к[бb][иі]т|kbps|\b[1-7]\.[01]\b/i;
        var TRACK_LANG = {
            uk: "Украинский",
            ukr: "Украинский",
            ua: "Украинский",
            ru: "Русский",
            rus: "Русский",
            en: "Английский",
            eng: "Английский",
            cs: "Чешский",
            cze: "Чешский",
            ces: "Чешский",
            de: "Немецкий",
            ger: "Немецкий",
            deu: "Немецкий",
            fr: "Французский",
            fre: "Французский",
            fra: "Французский",
            es: "Испанский",
            spa: "Испанский",
            it: "Итальянский",
            ita: "Итальянский",
            pl: "Польский",
            pol: "Польский",
            ja: "Японский",
            jpn: "Японский",
            ko: "Корейский",
            kor: "Корейский",
            zh: "Китайский",
            chi: "Китайский",
            zho: "Китайский",
            tr: "Турецкий",
            tur: "Турецкий"
        };
        function trackTech(text) {
            return String(text || "").replace(/\bA_/gi, "").replace(/\bEAC-?3\b/gi, "E-AC-3").replace(/\bAC3\b/gi, "AC-3").replace(/\s*к[бb][иі]т\/?(?:сек|с)?/gi, " kbps").replace(/\s*,\s*/g, " · ").replace(/\s+/g, " ").replace(/([1-7]\.[01]) (\d+ kbps)/, "$1 · $2").trim();
        }
        function trackLabel(title, lang) {
            var raw = String(title || "").trim(), p = audioParts(raw) || {
                type: "",
                name: raw,
                amateur: false
            };
            var name = String(p.name || "").replace(/[\[\]]/g, "").trim(), code = String(lang || "").toLowerCase();
            var language = TRACK_LANG[code] || (code ? code.toUpperCase() : "");
            if (name && TRACK_TECH.test(name)) return {
                type: p.type,
                label: language || (p.type === "ORIG" ? "Оригинал" : trackTech(name)),
                amateur: p.amateur,
                tech: trackTech(name)
            };
            return {
                type: p.type,
                label: name || language || (p.type === "ORIG" ? "Оригинал" : p.type),
                amateur: p.amateur,
                tech: ""
            };
        }
        function trackChip(type) {
            return $('<span class="cinema-audio__type"></span>').text(type).addClass(type === "DUB" ? "cinema-audio__type--dub" : type === "ORIG" ? "cinema-audio__type--orig" : "");
        }
        function dressAudio(title) {
            var box = document.querySelector(".selectbox");
            if (!box) return;
            var audio = enabled() && option("cinema_tracks") && /аудиодорожк/i.test(String(title || ""));
            box.classList.toggle("cinema-audio", audio);
            if (!audio) return;
            box.querySelectorAll(".selectbox-item").forEach(function(item) {
                var t = item.querySelector(".selectbox-item__title");
                if (!t || t.querySelector(".cinema-audio__type")) return;
                var sub = item.querySelector(".selectbox-item__subtitle"), bits = sub ? String(sub.textContent || "").split(/\s*•\s*/) : [];
                if (sub) sub.textContent = bits.join(" · ");
                var lang = bits[0] && /^[a-z]{2,3}$/i.test(bits[0]) ? bits[0] : "";
                var raw = String(t.textContent || "").trim(), l = trackLabel(raw, lang);
                if (!l.type && !l.tech) return;
                t.textContent = "";
                if (l.type) t.appendChild(trackChip(l.type)[0]);
                t.appendChild($('<span class="cinema-audio__name"></span>').text(l.label)[0]);
                if (l.amateur) t.appendChild($('<span class="cinema-audio__note"></span>').text("любительский")[0]);
                if (sub && l.tech) sub.textContent = [ l.tech ].concat(bits.filter(function(b) {
                    return /khz|hz$/i.test(b);
                })).join(" · ");
            });
        }
        function trackVideo(codec) {
            var c = String(codec || "").toLowerCase(), name = /h\.?265|hevc/.test(c) ? "HEVC" : /h\.?264|avc/.test(c) ? "H.264" : /av1/.test(c) ? "AV1" : /vp9/.test(c) ? "VP9" : /mpeg-?2/.test(c) ? "MPEG-2" : "";
            var profile = (c.match(/profile=\(string\)([\w-]+)/) || [])[1], level = (c.match(/level=\(string\)([\d.]+)/) || [])[1];
            if (!name) return String(codec || "").split(",")[0].replace(/^video\//i, "").replace(/^x-/i, "").toUpperCase();
            return [ name, profile && profile.charAt(0).toUpperCase() + profile.slice(1), level ].filter(Boolean).join(" · ");
        }
        var trackPick = null, trackFile = null, VOICE_KEY = "cinema_voice_pick";
        function trackChoose(item) {
            var meta = $(item).closest(".tracks-metainfo")[0];
            if (!meta) return;
            var again = item.classList.contains("cinema-track--chosen");
            meta.querySelectorAll(".cinema-track--chosen").forEach(function(r) {
                r.classList.remove("cinema-track--chosen");
            });
            if (again) {
                trackPick = null;
                return;
            }
            item.classList.add("cinema-track--chosen");
            trackPick = {
                file: meta.previousElementSibling,
                index: (parseInt(item.getAttribute("data-cinema-num"), 10) || 1) - 1,
                title: item.getAttribute("data-cinema-name") || "",
                at: Date.now()
            };
        }
        function voiceKey() {
            var act = Lampa.Activity.active(), card = act && (act.movie || act.card);
            return card && card.id ? (card.name || card.original_name ? "tv:" : "movie:") + card.id : "";
        }
        function voiceStore(value) {
            try {
                var all = JSON.parse(window.localStorage.getItem(VOICE_KEY) || "{}") || {};
                if (value) {
                    var key = voiceKey();
                    if (!key) return all;
                    all[key] = value;
                }
                var keep = {};
                Object.keys(all).sort(function(a, b) {
                    return (all[b].t || 0) - (all[a].t || 0);
                }).slice(0, 200).forEach(function(k) {
                    keep[k] = all[k];
                });
                window.localStorage.setItem(VOICE_KEY, JSON.stringify(keep));
                return keep;
            } catch (e) {
                return {};
            }
        }
        function voiceRecall() {
            try {
                return (JSON.parse(window.localStorage.getItem(VOICE_KEY) || "{}") || {})[voiceKey()] || null;
            } catch (e) {
                return null;
            }
        }
        function audioPickerPrepare(params) {
            if (!params || typeof params.onSelect !== "function" || params.onSelect.cinemaWrapped) return;
            var original = params.onSelect;
            params.onSelect = function(item) {
                try {
                    var sub = String(item.subtitle || "").split(/\s*•\s*/)[0];
                    voiceStore({
                        title: String(item.title || ""),
                        label: trackLabel(item.title, /^[a-z]{2,3}$/i.test(sub) ? sub : "").label,
                        t: Date.now()
                    });
                } catch (e) {}
                return original.apply(this, arguments);
            };
            params.onSelect.cinemaWrapped = true;
        }
        function audioPickerAnswer(params) {
            var items = params && params.items || [], box = document.querySelector(".selectbox");
            if (trackPick) {
                var chosen = trackPick;
                trackPick = null;
                if (chosen.file === trackFile && Date.now() - chosen.at < 9e5) {
                    var pick = items[chosen.index];
                    if (pick && chosen.title && String(pick.title || "") !== chosen.title) pick = items.filter(function(i) {
                        return String(i.title || "") === chosen.title;
                    })[0];
                    if (pick) {
                        params.onSelect(pick);
                        return;
                    }
                }
            }
            var last = voiceRecall();
            if (!last || !box) return;
            var at = items.findIndex(function(i) {
                return String(i.title || "") === last.title;
            });
            if (at < 0) at = items.findIndex(function(i) {
                var sub = String(i.subtitle || "").split(/\s*•\s*/)[0];
                return trackLabel(i.title, /^[a-z]{2,3}$/i.test(sub) ? sub : "").label === last.label;
            });
            var el = box.querySelectorAll(".selectbox-item")[at];
            if (!el) return;
            var t = el.querySelector(".selectbox-item__title");
            if (t && !t.querySelector(".cinema-audio__last")) t.appendChild($('<span class="cinema-audio__last"></span>').text("✓ ранее")[0]);
            try {
                Lampa.Controller.collectionFocus(el, box.querySelector(".selectbox__body") || box);
            } catch (e) {}
        }
        function dressTracks() {
            if (!enabled() || !option("cinema_tracks")) return;
            document.querySelectorAll(".tracks-metainfo__item:not([data-cinema-track])").forEach(function(item) {
                var col = function(n) {
                    var e = item.querySelector(".tracks-metainfo__column--" + n);
                    return e ? String(e.textContent || "").trim() : "";
                };
                var box = $('<div class="cinema-track"></div>'), meta = [];
                item.setAttribute("data-cinema-track", "1");
                if (item.classList.contains("tracks-metainfo__item--video")) {
                    var size = col("video"), w = parseInt(size, 10) || 0, h = parseInt(size.split("x")[1], 10) || 0;
                    var cls = w >= 3800 || h >= 2e3 ? "4K" : w >= 1900 || h >= 1e3 ? "1080p" : w >= 1260 || h >= 700 ? "720p" : w ? "SD" : "";
                    if (cls) box.append(trackChip(cls));
                    box.append($('<span class="cinema-track__name"></span>').text(size.replace("x", " × ")));
                    meta.push(trackVideo(col("codec")));
                } else {
                    var l = trackLabel(col("name"), col("lang"));
                    if (item.classList.contains("tracks-metainfo__item--audio")) {
                        item.setAttribute("data-cinema-num", col("num"));
                        item.setAttribute("data-cinema-name", col("name"));
                        item.addEventListener("hover:enter", function() {
                            trackChoose(this);
                        });
                    }
                    if (l.type) box.append(trackChip(l.type)); else if (item.classList.contains("tracks-metainfo__item--subs")) box.append(trackChip("SUB"));
                    box.append($('<span class="cinema-track__name"></span>').text(l.label || TRACK_LANG[col("lang").toLowerCase()] || col("lang") || "#" + col("num")));
                    if (l.amateur) box.append($('<span class="cinema-audio__note"></span>').text("любительский"));
                    if (!l.tech && col("lang") && l.label !== TRACK_LANG[col("lang").toLowerCase()]) meta.push(col("lang"));
                    meta.push(l.tech || [ col("codec"), col("channels") ].filter(Boolean).join(" "), col("rate"));
                }
                box.append($('<span class="cinema-track__meta"></span>').text(meta.filter(Boolean).join(" · ")));
                box.append($('<span class="cinema-track__pick"></span>').text("выбрано"));
                $(item).append(box);
            });
            document.querySelectorAll(".tracks-metainfo__item--audio[data-cinema-track]").forEach(function(item) {
                var label = $(item).closest(".tracks-metainfo__line").find(".tracks-metainfo__label")[0];
                if (label && !label.querySelector(".cinema-track__hint")) $(label).append($('<span class="cinema-track__hint"></span>').text("выберите, затем запустите файл"));
            });
            document.querySelectorAll(".torrent-files .torrent-serial, .torrent-files .torrent-file").forEach(function(file) {
                if (file.cinemaFileBound) return;
                file.cinemaFileBound = true;
                file.addEventListener("hover:enter", function() {
                    trackFile = this;
                });
            });
        }
        if (Lampa.Select && typeof Lampa.Select.show === "function" && !Lampa.Select.show.cinemaWrapped) {
            var nativeSelectShow = Lampa.Select.show;
            Lampa.Select.show = function(params) {
                var audio = enabled() && option("cinema_tracks") && params && /аудиодорожк/i.test(String(params.title || ""));
                if (audio) try {
                    audioPickerPrepare(params);
                } catch (e) {}
                var result = nativeSelectShow.apply(this, arguments);
                try {
                    dressAudio(params && params.title);
                } catch (e) {}
                if (audio) try {
                    audioPickerAnswer(params);
                } catch (e) {}
                return result;
            };
            Lampa.Select.show.cinemaWrapped = true;
        }
        Lampa.SettingsApi.addComponent({
            component: "cinema_pilot",
            name: "Lampa Cinema · " + VERSION,
            icon: icon("home")
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: KEY,
                type: "trigger",
                default: true
            },
            field: {
                name: text("cinema_look", "Оформление Cinema"),
                description: text("cinema_look_descr", "Тестовое оформление, только на этом устройстве.")
            },
            onChange: activate
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: "cinema_accent",
                type: "select",
                values: {
                    red: text("cinema_accent_red", "Красный"),
                    blue: text("cinema_accent_blue", "Синий"),
                    green: text("cinema_accent_green", "Зелёный"),
                    orange: text("cinema_accent_orange", "Оранжевый"),
                    purple: text("cinema_accent_purple", "Фиолетовый"),
                    teal: text("cinema_accent_teal", "Бирюзовый")
                },
                default: "red"
            },
            field: {
                name: text("cinema_accent", "Цвет акцента"),
                description: text("cinema_accent_descr", "")
            },
            onChange: paint
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: "cinema_banner",
                type: "trigger",
                default: true
            },
            field: {
                name: text("cinema_banner", "Баннер на главной"),
                description: text("cinema_banner_descr", "")
            },
            onChange: activate
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: "cinema_nova",
                type: "trigger",
                default: true
            },
            field: {
                name: text("cinema_nova", "Оформление Nova"),
                description: text("cinema_nova_descr", "")
            },
            onChange: activate
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: "cinema_voice_fold",
                type: "trigger",
                default: true
            },
            field: {
                name: text("cinema_voice_fold", "Переводы в Nova окном"),
                description: text("cinema_voice_fold_descr", "")
            },
            onChange: function() {
                if (!option("cinema_voice_fold")) {
                    voiceClose(false);
                    document.querySelectorAll(".cinema-voice-fold").forEach(function(g) {
                        g.classList.remove("cinema-voice-fold", "cinema-voice-open");
                        g.style.height = "";
                    });
                } else dressVoices();
            }
        });
        Lampa.SettingsApi.addParam({
            component: "cinema_pilot",
            param: {
                name: "cinema_tracks",
                type: "trigger",
                default: true
            },
            field: {
                name: text("cinema_tracks", "Аудиодорожки Cinema"),
                description: text("cinema_tracks_descr", "")
            }
        });
        var cardFeatures = Cards(Lampa, enabled);
        var detailFeatures = Detail(Lampa, enabled);
        window.lampaCinemaCards = {
            version: VERSION
        };
        if (detailFeatures) window.lampaCinemaCards.detail = VERSION;
        if (authorizedCheck) Migrate(Lampa, {
            mode: "full",
            version: VERSION,
            authorized: authorizedCheck
        });
        var autofill = function(Lampa, isEnabled) {
            "use strict";
            var KEY = "cinema_autofill";
            var MAX_ASKS = 4;
            var MAX_STEPS = 80;
            var latest = null;
            function mobile() {
                try {
                    return !!Lampa.Platform.screen("mobile");
                } catch (e) {
                    return false;
                }
            }
            function on() {
                return Lampa.Storage.value(KEY, "true") !== "false";
            }
            function fits(comp) {
                return comp && typeof comp.use === "function" && typeof comp.emit === "function" && Array.isArray(comp.items) && Array.isArray(comp.loaded) && "builded_time" in comp && comp.scroll && typeof comp.scroll.isFilled === "function";
            }
            function attach(comp) {
                if (!mobile() || !fits(comp)) return false;
                var timer = 0, dead = false, ended = false, asks = 0, steps = 0, awaiting = null;
                function size() {
                    var n = comp.items.length;
                    (comp.loaded || []).forEach(function(part) {
                        n += part && part.length || 0;
                    });
                    return n;
                }
                function kick(delay) {
                    if (dead || ended || timer) return;
                    timer = setTimeout(step, delay || 60);
                }
                function stop() {
                    clearTimeout(timer);
                    timer = 0;
                }
                function step() {
                    timer = 0;
                    if (dead || ended || comp.destroyed || !isEnabled() || !on()) return;
                    if (document.hidden || !Lampa.Activity.own(comp)) return;
                    if (!Array.isArray(comp.items) || !comp.items.length) return;
                    if (awaiting === null && comp.scroll.isFilled()) return;
                    if (++steps > MAX_STEPS) {
                        ended = true;
                        return;
                    }
                    if (comp.loaded.length) {
                        comp.emit("pushLoaded");
                        return kick(60);
                    }
                    if (comp.next_wait) return kick(250);
                    if (awaiting !== null) {
                        var grew = size() > awaiting;
                        awaiting = null;
                        if (!grew) {
                            ended = true;
                            return;
                        }
                        if (comp.scroll.isFilled()) return;
                    }
                    if (asks >= MAX_ASKS) {
                        ended = true;
                        return;
                    }
                    var wait = 1050 - (Date.now() - comp.builded_time);
                    if (wait > 0) return kick(wait);
                    var before = size();
                    asks++;
                    comp.emit("loadNext");
                    if (comp.next_wait) {
                        awaiting = before;
                        return kick(250);
                    }
                    if (size() > before) kick(); else ended = true;
                }
                comp.use({
                    onBuild: function() {
                        kick();
                    },
                    onPushLoaded: function() {
                        kick();
                    },
                    onResize: function() {
                        kick();
                    },
                    onStart: function() {
                        latest = kick;
                        kick();
                    },
                    onPause: stop,
                    onDestroy: function() {
                        dead = true;
                        stop();
                        if (latest === kick) latest = null;
                    }
                });
                return true;
            }
            Lampa.Lang.add({
                cinema_autofill: {
                    cs: "Zaplnit obrazovku řadami",
                    ru: "Заполнять экран рядами",
                    uk: "Заповнювати екран рядами",
                    en: "Fill the screen with rows"
                },
                cinema_autofill_descr: {
                    cs: "Telefon a tablet: když první řady na hlavní stránce nebo v katalogu nezaplní obrazovku, načtou se další, dokud nejde posouvat. Nejvýš 4 dávky, pak běžné posouvání.",
                    ru: "Телефон и планшет: если первые ряды на главной или в каталоге не заполняют экран, догружаются следующие, пока его нельзя прокрутить. Не больше 4 порций, дальше обычная прокрутка.",
                    uk: "Телефон і планшет: якщо перші ряди на головній чи в каталозі не заповнюють екран, довантажуються наступні, доки його не можна прокрутити. Не більше 4 порцій, далі звичайна прокрутка.",
                    en: "Phone and tablet: when the first rows of home or a catalog do not fill the screen, more are loaded until it can scroll. At most 4 batches, then ordinary scrolling."
                }
            });
            if (mobile()) {
                Lampa.SettingsApi.addParam({
                    component: "cinema_pilot",
                    param: {
                        name: KEY,
                        type: "trigger",
                        default: true
                    },
                    field: {
                        name: Lampa.Lang.translate(KEY),
                        description: Lampa.Lang.translate(KEY + "_descr")
                    },
                    onChange: function() {
                        if (latest && on()) latest();
                    }
                });
                document.addEventListener("visibilitychange", function() {
                    if (!document.hidden && latest) latest();
                });
            }
            return {
                attach: attach
            };
        }(Lampa, enabled);
        function menu() {
            var list = $(".menu .menu__list").first();
            if (!list.length || list.find('[data-action="cinema_pilot"]').length) return;
            $('<li class="menu__item selector" data-action="cinema_pilot"><div class="menu__ico">' + icon("home") + '</div><div class="menu__text">Lampa Cinema</div></li>').on("hover:enter", function() {
                if (!enabled()) {
                    Lampa.Storage.set(KEY, true);
                    activate();
                }
                openHome();
            }).appendTo(list);
        }
        menu();
        Lampa.Listener.follow("menu", function(e) {
            if (e.type === "start") menu();
        });
        window.lampaCinemaPilot = {
            version: VERSION,
            disable: classic,
            refresh: function() {
                paint();
                activate();
            }
        };
        activate();
    }
    function bridge(base) {
        if (window.lampaCinemaCards || !Lampa.Maker || typeof Lampa.Maker.map !== "function") return;
        window.lampaCinemaCards = {
            version: VERSION,
            base: base.version,
            bridge: true
        };
        var style = document.createElement("style");
        style.id = "cinema-cards-style";
        style.textContent = CARDS_STYLE;
        document.head.appendChild(style);
        var cards = Cards(Lampa, enabled);
        var detail = Detail(Lampa, enabled);
        if (detail) window.lampaCinemaCards.detail = VERSION;
        if (authorizedCheck) Migrate(Lampa, {
            mode: "bridge",
            version: VERSION,
            authorized: authorizedCheck
        });
        try {
            Lampa.Storage.listener.follow("change", function(e) {
                if (e && e.name === KEY) {
                    cards.sync();
                    if (detail) detail.sync();
                }
            });
        } catch (e) {}
        try {
            var act = Lampa.Activity.active(), control = Lampa.Controller.enabled();
            var name = control && control.name;
            if (!enabled() || !act || [ "main", "category", "category_full" ].indexOf(act.component) === -1) return;
            if (typeof name !== "string" || /settings|player|modal|select|keyboard|keybord/i.test(name)) return;
            if (Lampa.Player && typeof Lampa.Player.opened === "function" && Lampa.Player.opened()) return;
            Lampa.Activity.replace();
        } catch (e) {}
    }
    function start() {
        var running = window.lampaCinemaPilot;
        if (!running) boot(); else if (LEGACY.indexOf(running.version) !== -1) bridge(running);
    }
    if (window.appready) authorized(start); else if (window.Lampa) Lampa.Listener.follow("app", function(e) {
        if (e.type === "ready") authorized(start);
    });
})();