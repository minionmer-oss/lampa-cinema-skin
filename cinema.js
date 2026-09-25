(function() {
    "use strict";
    var VERSION = "20260925.11";
    var KEY = "cinema_pilot_enabled";
    var STYLE = 'body.cinema-pilot { background:#0d1015!important; }\nbody.cinema-pilot .background { opacity:.17!important; }\nbody.cinema-pilot .head { background:linear-gradient(180deg,#11151cf5,#11151c00); }\nbody.cinema-pilot-home { background: #0d1015 !important; }\nbody.cinema-pilot-home .background { opacity: .17 !important; }\nbody.cinema-pilot-home .head { background: linear-gradient(180deg,#11151cf5,#11151c00); }\nbody.cinema-pilot-home .head__logo-icon { color: #eb3948; }\nbody.cinema-pilot-home .head__title { letter-spacing: .12em; font-size: 1.05em; }\nbody.cinema-pilot-home .head__action.focus, body.cinema-pilot-home .head__action.hover { background: #ffffff24; color: #fff; border-radius: .8em; }\n.cinema-home { position: relative; color: #f4f5f7; }\n.cinema-home > .scroll > .scroll__content { padding-top:1em; }\n.cinema-home .cinema-hero { margin:0 var(--cp-pad,1.5em) 2em; }\n.cinema-button svg { width:1.15em; height:1.15em; flex-shrink:0; }\n.cinema-hero { position:relative; min-height:25em; margin:0 0 2em; border:1px solid #ffffff25; border-radius:1.7em; overflow:hidden; background:radial-gradient(ellipse at 85% 30%,#435250,#14191f 75%); isolation:isolate; }\n.cinema-art { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:75% 32%; z-index:-2; }\n.cinema-art[hidden] { display:none; }\n.cinema-shade { position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,#0b1118f5,#0b111898 40%,#0b111810 85%),linear-gradient(0deg,#0b1118ed,transparent 85%); }\n.cinema-hero-label { position:absolute; left:2em; top:1.65em; letter-spacing:.17em; font-size:.65em; font-weight:600; color:#d4d9df; }\n.cinema-hero-label:before { content:\'\'; display:inline-block; width:.5em; height:.5em; background:#e83443; border-radius:50%; margin-right:.7em; vertical-align:middle; }\n.cinema-copy { padding:6.2em 2em 2em; max-width:40em; }\n.cinema-kicker { text-transform:uppercase; letter-spacing:.25em; color:#c5cbd3; font-size:.72em; margin-bottom:1em; }\n.cinema-title { font-weight:600; font-size:3.25em; letter-spacing:-.025em; line-height:1.08; margin:0 0 .4em; overflow-wrap:anywhere; text-shadow:0 2px 22px #0006; }\n.cinema-title--logo { font-size:1em; line-height:1; text-shadow:none; margin-bottom:.9em; }\n.cinema-logo { display:block; width:auto; height:auto; max-width:min(26em,80%); max-height:5.4em; object-fit:contain; object-position:left bottom; filter:drop-shadow(0 .15em .9em #000a); }\n.cinema-meta { display:flex; gap:.85em; flex-wrap:wrap; font-size:.8em; color:#d5d9df; }\n.cinema-rating { color:#f1d59a; }\n.cinema-desc { font-size:.85em; line-height:1.6; color:#c7cdd5; max-width:32em; margin:1.2em 0 1.6em; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }\n.cinema-actions { display:flex; flex-wrap:wrap; gap:.7em; }\n.cinema-button { display:inline-flex; align-items:center; justify-content:center; gap:.7em; padding:.95em 1.35em; min-height:44px; border:1px solid #ffffff30; border-radius:.85em; background:#363e49e0; color:#fff; font-family:inherit; font-size:.85em; cursor:pointer; }\n.cinema-button-primary { background:#de3041; border-color:#ee4151; }\n.cinema-button.focus, .cinema-button.hover, .cinema-button:focus-visible { outline:2px solid #fff; outline-offset:3px; filter:brightness(1.12); }\n.cinema-button[disabled] { opacity:.5; }\n@supports(backdrop-filter:blur(20px)) { .cinema-button:not(.cinema-button-primary) { background:#ffffff13; backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); } }\n@media(max-width:800px) { .cinema-copy { max-width:34em; } .cinema-title { font-size:2.5em; } .cinema-hero { min-height:25em; } }\n@media(max-width:480px) { .cinema-logo { max-height:4.4em; max-width:85%; } .cinema-copy { padding:5.5em 1.3em 1.6em; } .cinema-hero { min-height:26em; } .cinema-title { font-size:2.3em; } .cinema-hero-label { left:1.8em; } .cinema-shade { background:linear-gradient(90deg,#0b1118ce,#0b11185a),linear-gradient(0deg,#0b1118f5,transparent); } }\n@media(prefers-reduced-motion:reduce) { .cinema-home *,body.cinema-pilot-home .head { transition:none!important; animation:none!important; } }\n.cinema-home .cinema-pager { display:flex; justify-content:flex-end; align-items:center; gap:.8em; padding:0 1.5em 1.2em; }\n.cinema-home .cinema-pager[hidden] { display:none; }\n.cinema-home .cinema-pager .cinema-button { min-width:44px; padding:.25em .7em; font-size:1.2em; }\n.cinema-home .cinema-hero { touch-action:pan-y; }\n@media (pointer:coarse) { .cinema-home .cinema-pager { display:none; } }\n.cinema-home .cinema-tv .cinema-pager { display:none; }\n.cinema-home .cinema-tv .cinema-title { display:inline-block; max-width:100%; vertical-align:top; }\n.cinema-home .cinema-tv .cinema-title.focus { outline:2px solid #ffffff80; outline-offset:.15em; border-radius:.15em; }\nbody.cinema-pilot-detail { background:#0d1015!important; }\nbody.cinema-pilot-detail .background { opacity:.12!important; }\nbody.cinema-pilot-detail .head { background:linear-gradient(180deg,#0d1015f5,#0d101500); }\n.cinema-detail { position:relative; isolation:isolate; color:#f4f5f7; background:#0d1015; }\n.cinema-detail > .full-start__background { left:0; top:0; width:100%; height:70vh; object-fit:cover; object-position:70% 20%; opacity:.55; z-index:-1; -webkit-mask-image:linear-gradient(180deg,#000,transparent); mask-image:linear-gradient(180deg,#000,transparent); }\n.cinema-detail > .full-start__background.dim { opacity:.16; }\n.cinema-detail .full-start-new, .cinema-detail .full-start { margin:1em 1.5em 2em; padding:2em; border:1px solid #ffffff20; border-radius:1.7em; background:linear-gradient(100deg,#101620ed,#101620b8 65%,#10162072); }\n.cinema-detail .full-start-new__body { align-items:center; }\n.cinema-detail .full-start-new__left { width:14em; margin-right:2.5em; }\n.cinema-detail .full-start-new__right { min-width:0; }\n.cinema-detail .full-start-new__poster { border-radius:1em; box-shadow:0 1em 3em #0005; }\n.cinema-detail .full-start-new__title, .cinema-detail .full-start__title { font-size:3.2em; font-weight:600; line-height:1.12; letter-spacing:-.025em; margin:.2em 0 .5em; max-width:100%; overflow-wrap:anywhere; -webkit-line-clamp:3; }\n.cinema-detail .full-start-new__head { color:#bbc4d1; font-size:1em; }\n.cinema-detail .full-start-new__rate-line { flex-wrap:wrap; gap:.6em 0; margin-bottom:1.2em; }\n.cinema-detail .full-start-new__details { color:#d3dbe5; font-size:1em; line-height:1.5; }\n.cinema-detail .full-start__rate, .cinema-detail .full-start__pg, .cinema-detail .full-start__status { background:#ffffff12; border:1px solid #ffffff25; border-radius:.5em; }\n.cinema-detail .full-start-new__buttons { flex-wrap:wrap; gap:.65em; overflow:visible; }\n.cinema-detail .full-start__button { background:#ffffff13; color:#f4f5f7; border:1px solid #ffffff30; border-radius:.8em; min-height:44px; margin:0; font-size:1.05em; padding:.75em 1em; height:auto; }\n.cinema-detail .full-start__button.button--play { background:#de3041; border-color:#ee4151; }\n.cinema-detail .full-start__button.button--play span { display:inline!important; }\n.cinema-detail .full-start__button.focus, .cinema-detail .full-start__button.hover { outline:2px solid #fff; outline-offset:3px; background:#525e70; color:#fff; }\n.cinema-detail .full-start__button.button--play.focus { background:#ef4051; }\n.cinema-detail .full-descr { margin:0 1.5em 2em; padding:1.8em 2em; border:1px solid #ffffff14; border-radius:1.3em; background:#171e29e8; }\n.cinema-detail .full-descr__text { color:#d3dbe5; font-size:1.1em; line-height:1.65; }\n.cinema-detail .full-descr__line-name { color:#aab5c5; }\n.cinema-detail .full-descr__tag { background:#ffffff12; border-radius:.6em; }\n@media(max-width:900px) {\n .cinema-detail .full-start-new__left { width:11em; margin-right:1.6em; }\n .cinema-detail .full-start-new__title { font-size:2.6em; }\n .cinema-detail .full-start-new, .cinema-detail .full-start, .cinema-detail .full-descr { margin-left:1em; margin-right:1em; padding:1.5em; }\n}\n@media(max-width:580px) {\n .cinema-detail .full-start-new__body { display:block; }\n .cinema-detail .full-start-new__left { width:8em; margin:0 0 1.5em; }\n .cinema-detail .full-start-new__right { margin:0; padding:0; background:none; overflow:visible; }\n .cinema-detail .full-start-new__title { font-size:2.2em; }\n .cinema-detail .full-start-new__buttons { gap:.65em; }\n .cinema-detail .full-descr { display:block; }\n}\n@media(max-width:580px) { .cinema-detail .full-start-new__poster { padding-bottom:150%; } }\n.cinema-detail .full-descr__text { color:#e0e5ed; font-weight:400; max-height:none; overflow:visible; -webkit-mask-image:none; mask-image:none; }\n@media(max-width:580px) {\n .cinema-detail .full-start-new { padding:1.2em; margin-top:.5em; margin-bottom:1.3em; }\n .cinema-detail .full-start-new__body { display:grid; grid-template-columns:6.6em minmax(0,1fr); column-gap:1.2em; row-gap:.45em; align-items:start; }\n .cinema-detail .full-start-new__left { grid-column:1; grid-row:1 / 4; width:100%; margin:0; }\n .cinema-detail .full-start-new__right { display:contents; }\n .cinema-detail .full-start-new__right > * { grid-column:1 / -1; min-width:0; }\n .cinema-detail .full-start-new__head { grid-column:2; grid-row:1; font-size:.85em; margin:0; }\n .cinema-detail .full-start-new__title { grid-column:2; grid-row:2; font-size:1.9em; line-height:1.15; margin:0; -webkit-line-clamp:unset; display:block; overflow:visible; }\n .cinema-detail .full-start-new__tagline { grid-column:2; grid-row:3; font-size:1em; line-height:1.4; margin:0; color:#c5cedb; }\n .cinema-detail .full-start-new__rate-line { margin:.9em 0 .4em; padding:0; }\n .cinema-detail .full-start-new__details { margin:0 -.45em .3em; }\n .cinema-detail .full-start-new__reactions { margin:0 -.5em .3em; min-height:0; }\n .cinema-detail .full-start-new__buttons { margin-top:.3em; gap:.5em; }\n .cinema-detail .full-start__button { padding:.65em .8em; }\n .cinema-detail .full-start-new__img { border-radius:.75em; -webkit-mask-image:none!important; mask-image:none!important; }\n .cinema-detail .full-start-new__poster .card__type { left:.4em; top:.4em; font-size:.75em; }\n .cinema-detail .full-descr { padding:1.3em; }\n}\nbody.cinema-pilot .selectbox__content { background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; box-shadow:0 1em 4em #0006; color:#f4f5f7; }\nbody.cinema-pilot .selectbox__head { padding:1.5em 1.5em .8em; }\nbody.cinema-pilot .selectbox__title { font-size:1.6em; font-weight:500; }\nbody.cinema-pilot .selectbox-item { margin:.4em .8em; padding:1em; min-height:44px; background:#ffffff07; border:1px solid #ffffff13; border-radius:.85em; }\nbody.cinema-pilot .selectbox-item__title { font-size:1.15em; color:#f4f5f7; }\nbody.cinema-pilot .selectbox-item__subtitle { color:#bdc8d8; opacity:1; font-size:.95em; }\nbody.cinema-pilot .selectbox-item.focus { background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .selectbox-item--checkbox { padding-right:4em; }\n@media(max-width:480px) {\n body.cinema-pilot .selectbox__content { border-radius:1.5em 1.5em 0 0; padding-bottom:env(safe-area-inset-bottom,0px); }\n}\nbody.cinema-pilot .search__body { color:#f4f5f7; background:#0d1015; }\nbody.cinema-pilot .search__input { margin:1em 1.5em .9em; padding:.85em 1.1em; min-height:44px; font-size:1.3em; color:#f4f5f7; background:#171e29e8; border:1px solid #ffffff22; border-radius:1em; }\nbody.cinema-pilot .search__input.focus, body.cinema-pilot .search-box--focus .search__input { border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .search-box { background:#0d1015f2; }\nbody.cinema-pilot .search__keypad { margin:0 1.5em 1.4em; }\nbody.cinema-pilot .search__keypad .simple-keyboard, body.cinema-pilot .search-box__keypad .simple-keyboard { background:#141a24e8; border:1px solid #ffffff14; border-radius:1.2em; padding:.7em; }\nbody.cinema-pilot .search__keypad .hg-button, body.cinema-pilot .search-box__keypad .hg-button { min-height:44px; color:#e6ebf2; background:#ffffff0f; border:1px solid #ffffff1a; border-radius:.65em; }\nbody.cinema-pilot .search__keypad .hg-button.focus, body.cinema-pilot .search__keypad .hg-button.hover, body.cinema-pilot .search-box__keypad .hg-button.focus, body.cinema-pilot .search-box__keypad .hg-button.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\nbody.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin:0 1.5em 1.4em; }\nbody.cinema-pilot .search-history-key { display:inline-flex; align-items:center; margin:.35em .45em .35em 0; padding:.55em 1em; min-height:44px; color:#d3dbe5; background:#ffffff0d; border:1px solid #ffffff1a; border-radius:2em; }\nbody.cinema-pilot .search-history-key.focus, body.cinema-pilot .search-history-key.hover { background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .search-source { display:inline-flex; align-items:center; gap:.6em; margin:.35em .5em .35em 0; padding:.55em 1em; min-height:44px; color:#d3dbe5; background:#ffffff0d; border:1px solid #ffffff1a; border-radius:.9em; }\nbody.cinema-pilot .search-source__tab { font-size:1.05em; }\nbody.cinema-pilot .search-source__count { min-width:2em; padding:.1em .5em; text-align:center; font-size:.9em; color:#0d1015; background:#8f9bad; border-radius:1em; }\nbody.cinema-pilot .search-source.focus, body.cinema-pilot .search-source.hover { background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; color:#fff; }\nbody.cinema-pilot .search-source.focus .search-source__count { background:#f2f4f6; color:#0d1015; }\nbody.cinema-pilot .search-source--loading .search-source__count { opacity:.5; }\nbody.cinema-pilot .search-looking { padding:3em 1.5em; }\nbody.cinema-pilot .search-looking__text { color:#aab5c5; font-size:1.2em; line-height:1.6; }\nbody.cinema-pilot .search__results .items-line__head { margin-bottom:.6em; }\nbody.cinema-pilot .search__results .items-line__title { font-size:1.5em; font-weight:500; color:#f4f5f7; letter-spacing:-.015em; }\nbody.cinema-pilot .search__results .items-line__more { color:#bdc8d8; background:#ffffff0f; border:1px solid #ffffff1c; border-radius:.7em; padding:.4em .9em; min-height:44px; display:inline-flex; align-items:center; }\nbody.cinema-pilot .search__results .items-line__more.focus, body.cinema-pilot .search__results .items-line__more.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n@media(max-width:900px) {\n body.cinema-pilot .search__input { margin-left:1em; margin-right:1em; font-size:1.2em; }\n body.cinema-pilot .search__keypad, body.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin-left:1em; margin-right:1em; }\n body.cinema-pilot .search__results .items-line__title { font-size:1.3em; }\n}\n@media(max-width:580px) {\n body.cinema-pilot .search__input { margin:.7em .8em; padding:.7em .9em; font-size:1.15em; border-radius:.9em; }\n body.cinema-pilot .search__keypad { margin:0 .8em 1em; }\n body.cinema-pilot .search__keypad .simple-keyboard, body.cinema-pilot .search-box__keypad .simple-keyboard { padding:.45em; border-radius:1em; }\n body.cinema-pilot .search__history, body.cinema-pilot .search__sources, body.cinema-pilot .search__results { margin:0 .8em 1em; }\n body.cinema-pilot .search-history-key, body.cinema-pilot .search-source { padding:.5em .85em; }\n body.cinema-pilot .search__results { padding-bottom:env(safe-area-inset-bottom,0px); }\n}\n@media(prefers-reduced-motion:reduce) { body.cinema-pilot .search__body * { transition:none!important; animation:none!important; } }\nbody.cinema-pilot-catalog { background:#0d1015!important; }\nbody.cinema-pilot-catalog .background { opacity:.17!important; }\nbody.cinema-pilot-catalog .head { background:linear-gradient(180deg,#11151cf5,#11151c00); }\n.cinema-rows { color:#f4f5f7; --cp-gap:1em; --cp-pad:1.5em; }\n.cinema-rows .items-line { padding-bottom:2.2em; }\n.cinema-rows .items-line__head, .cinema-home .items-line__head { padding-left:var(--cp-pad,1.5em); padding-right:var(--cp-pad,1.5em); margin-bottom:.9em; gap:1em; }\n.cinema-rows .items-line__title, .cinema-home .items-line__title { font-size:1.35em; font-weight:600; letter-spacing:-.01em; font-size:max(17px,1.35em); line-height:1.25; color:#f4f5f7; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\n.cinema-rows .items-line__title .full-person, .cinema-home .items-line__title .full-person { background:none; padding:0; }\n.cinema-rows .items-line__title .full-person__photo, .cinema-home .items-line__title .full-person__photo { width:1.7em; height:1.7em; border-radius:50%; }\n.cinema-rows .items-line__more, .cinema-home .items-line__more { flex-shrink:0; margin-left:0; display:inline-flex; align-items:center; min-height:44px; padding:.35em 1.3em; font-size:13px; font-size:max(13px,.9em); color:#d3dbe5; background:#ffffff0f; border:1px solid #ffffff1f; border-radius:.8em; }\n.cinema-rows .items-line__more.focus, .cinema-rows .items-line__more.hover, .cinema-home .items-line__more.focus, .cinema-home .items-line__more.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .card__view, .cinema-home .card__view { margin-bottom:.7em; }\n.cinema-rows .card__img { border-radius:.9em; object-fit:cover; background-color:#1e2630; }\n.cinema-rows .card__title, .cinema-home .card__title { font-size:13px; font-size:max(13px,1em); line-height:1.3; font-weight:500; color:#eef1f5; max-height:2.6em; -webkit-line-clamp:2; line-clamp:2; }\n.cinema-rows .card__age, .cinema-home .card__age { margin-top:.3em; font-size:11px; font-size:max(11px,.8em); color:#a1aaba; }\n.cinema-rows .card__vote, .cinema-home .card__vote { right:.45em; bottom:.45em; padding:.2em .5em; font-size:12px; font-size:max(12px,.85em); font-weight:600; color:#f1d59a; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.55em; }\n.cinema-rows .card__type, .cinema-rows .card__quality > div { border-radius:.45em; }\n.cinema-rows .card--wide .card__promo-title { font-size:1.35em; font-weight:600; }\n.cinema-rows .card--wide .card__promo-text { color:#c7cdd5; }\n.cinema-rows .card.focus .card__view:after, .cinema-rows .card.hover .card__view:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-rows .card.hover .card__view:after { border-color:#f2f4f680; }\n.cinema-rows .card.focus .card__title { color:#fff; }\n.cinema-rows .card-more__box { background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.9em; }\n.cinema-rows .card-more__title { font-size:1.2em; font-weight:500; color:#d3dbe5; }\n.cinema-rows .card-more.focus .card-more__box:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-radius:1.2em; }\n.cinema-rows .items-line .card + .card, .cinema-rows .items-line .card + .card-more { margin-left:var(--cp-gap); }\n@supports (container-type:inline-size) {\n .cinema-rows .items-line__body { container-type:inline-size; --cp-cols:2.55; --cp-gaps:2; }\n .cinema-rows .items-line .card:not(.card--wide):not(.card--collection):not(.card--category):not(.card--explorer), .cinema-rows .items-line .card-more:not(.card-more--first) { width:calc((100cqw - var(--cp-pad) - var(--cp-gap) * var(--cp-gaps)) / var(--cp-cols)); }\n .cinema-rows .items-line .card--wide { width:calc((100cqw - var(--cp-pad) - var(--cp-gap) * var(--cp-gaps)) / var(--cp-cols) * 2 + var(--cp-gap)); }\n @container (min-width:480px) { .cinema-rows .items-line__body > * { --cp-cols:3.45; --cp-gaps:3; } }\n @container (min-width:680px) { .cinema-rows .items-line__body > * { --cp-cols:4.4; --cp-gaps:4; } }\n @container (min-width:900px) { .cinema-rows .items-line__body > * { --cp-cols:5.35; --cp-gaps:5; } }\n @container (min-width:1200px) { .cinema-rows .items-line__body > * { --cp-cols:6.3; --cp-gaps:6; } }\n @container (min-width:1600px) { .cinema-rows .items-line__body > * { --cp-cols:7.3; --cp-gaps:7; } }\n .cinema-rows .mapping--grid { container-type:inline-size; }\n .cinema-rows .mapping--grid > .card { width:33.333%; }\n @container (min-width:480px) { .cinema-rows .mapping--grid > .card { width:25%; } }\n @container (min-width:680px) { .cinema-rows .mapping--grid > .card { width:20%; } }\n @container (min-width:900px) { .cinema-rows .mapping--grid > .card { width:16.666%; } }\n @container (min-width:1200px) { .cinema-rows .mapping--grid > .card { width:14.285%; } }\n @container (min-width:1600px) { .cinema-rows .mapping--grid > .card { width:12.5%; } }\n}\n.cinema-rows .mapping--grid { padding:0 calc(var(--cp-pad) - .5em); }\n.cinema-rows .mapping--grid > .card { padding:0 .5em 1.4em; }\n@media(max-width:580px) {\n .cinema-rows { --cp-pad:1.2em; --cp-gap:.9em; }\n .cinema-rows .items-line { padding-bottom:1.6em; }\n}\n.cinema-rows .register { min-height:44px; padding:.9em 1.1em; background:#ffffff0d; border:1px solid #ffffff1c; border-radius:1em; }\n.cinema-rows .register__name { font-size:13px; font-size:max(13px,1em); color:#bdc8d8; }\n.cinema-rows .register__counter { color:#f4f5f7; }\n.cinema-rows .register__chart > div { background-color:#ffffffb0; }\n.cinema-rows .register__chart-bar--threshold { background-color:#de3041!important; }\n.cinema-rows .register.focus, .cinema-rows .register.hover { background:#ffffff1c; border-color:#ffffff40; }\n.cinema-rows .register.focus:after { border-color:#f2f4f6; border-radius:1.3em; }\n.cinema-rows .bookmarks-folder__layer { background:linear-gradient(160deg,#243041,#151b25); border:1px solid #ffffff1f; border-radius:.9em; overflow:hidden; }\n.cinema-rows .bookmarks-folder__body { background:#ffffff08; border-radius:.9em .9em 0 0; }\n.cinema-rows .bookmarks-folder__body .card__img { border-radius:.7em .7em 0 0; }\n.cinema-rows .bookmarks-folder__title { font-size:15px; font-size:max(15px,1.25em); font-weight:600; color:#f4f5f7; }\n.cinema-rows .bookmarks-folder__num { font-size:13px; font-size:max(13px,1em); font-weight:500; color:#bdc8d8; }\n.cinema-rows .card__marker, .cinema-home .card__marker { left:.45em; bottom:.45em; padding:.25em .55em .25em .35em; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.55em; }\n.cinema-rows .card__marker:before, .cinema-home .card__marker:before { width:.7em; height:.7em; }\n.cinema-rows .card__marker > span, .cinema-home .card__marker > span { font-size:11px; font-size:max(11px,.8em); max-width:6.5em; color:#eef1f5; }\n.cinema-rows .card__icons-inner, .cinema-home .card__icons-inner { background:#0d1015c0; border:1px solid #ffffff1f; }\n.cinema-rows .card--wide .card__marker, .cinema-home .card--wide .card__marker { top:.45em; right:.45em; bottom:auto; left:auto; }\n.cinema-rows .card__type, .cinema-home .card__type { left:.45em; top:.45em; border-radius:.45em; }\n.cinema-rows .time-line, .cinema-home .time-line, body.cinema-pilot-detail .time-line { background-color:#ffffff30; }\n.cinema-rows .time-line > div, .cinema-home .time-line > div, body.cinema-pilot-detail .time-line > div { background-color:#de3041; }\n.cinema-rows .card-watched, .cinema-home .card-watched { background-color:#0d1015e8; border:1px solid #ffffff1f; border-radius:.8em; }\nbody.cinema-pilot .empty { padding:2em var(--cp-pad,1.5em); }\nbody.cinema-pilot .empty__icon { opacity:.85; }\nbody.cinema-pilot .empty__title { font-size:20px; font-size:max(20px,2em); font-weight:600; letter-spacing:-.015em; color:#f4f5f7; }\nbody.cinema-pilot .empty__descr { max-width:34em; margin-left:auto; margin-right:auto; font-size:14px; font-size:max(14px,1.15em); color:#aab5c5; }\nbody.cinema-pilot .empty .simple-button { min-height:44px; height:auto; padding:.6em 1.4em; font-size:14px; font-size:max(14px,1.05em); color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.85em; }\nbody.cinema-pilot .empty .simple-button.focus, body.cinema-pilot .empty .simple-button.hover { background:#ffffff2e; border-color:#f2f4f6; color:#fff; outline:2px solid #f2f4f6; outline-offset:2px; }\n@media(max-width:580px) {\n body.cinema-pilot .empty__icon svg, body.cinema-pilot .empty__icon img { width:15em!important; height:9.5em!important; margin-bottom:1.6em; }\n}\nbody.cinema-pilot .cinema-rows .card .card__vote, body.cinema-pilot-home .cinema-home .card .card__vote,\nbody.cinema-pilot .cinema-rows .card .card__marker, body.cinema-pilot-home .cinema-home .card .card__marker { background-color:#0d1015c8; }\nbody.cinema-pilot .cinema-rows .card .card__icons-inner, body.cinema-pilot-home .cinema-home .card .card__icons-inner { background-color:#0d1015b0; }\nbody.cinema-pilot .cinema-rows .card .card-watched, body.cinema-pilot-home .cinema-home .card .card-watched { background-color:#0d1015e0; }\nbody.cinema-pilot .cinema-rows .card-more .card-more__box { background-color:#ffffff0a; }\nbody.cinema-pilot .cinema-rows .bookmarks-folder .bookmarks-folder__layer { background:linear-gradient(160deg,#243041,#151b25); }\nbody.cinema-pilot .cinema-rows .register { background-color:#ffffff0d; }\nbody.cinema-pilot .cinema-rows .register.focus { background-color:#ffffff1c; }\nbody.cinema-pilot .cinema-rows .items-line__more, body.cinema-pilot-home .cinema-home .items-line__more { background-color:#ffffff0f; }\nbody.cinema-pilot .cinema-rows .items-line__more.focus, body.cinema-pilot .cinema-rows .items-line__more.hover,\nbody.cinema-pilot-home .cinema-home .items-line__more.focus, body.cinema-pilot-home .cinema-home .items-line__more.hover { background-color:#ffffff2e; }\nbody.cinema-pilot .menu { background:#171c25f0; border:1px solid #ffffff1c; border-radius:1.4em; }\n.cinema-rows .full-episode__img { border-radius:.9em; }\n.cinema-rows .full-episode:not(.full-episode--loaded) .full-episode__img { background-color:#ffffff0d; }\n.cinema-rows .full-episode__img img { border-radius:.9em; object-fit:cover; }\n.cinema-rows .full-episode__body { padding:.8em .9em; border-radius:.9em; background:linear-gradient(0deg,#0d1015f0,#0d101580 55%,#0d101510); }\n.cinema-rows .full-episode__num { margin-bottom:.25em; font-size:1.5em; font-weight:600; line-height:1; color:#f4f5f7; }\n.cinema-rows .full-episode__name { font-size:13px; font-size:max(13px,1.05em); font-weight:500; color:#eef1f5; }\n.cinema-rows .full-episode__date { margin-top:.3em; font-size:11px; font-size:max(11px,.8em); color:#a1aaba; }\n.cinema-rows .full-episode--next .full-episode__body { background:none; }\n.cinema-rows .card-more--first { display:flex; width:6.4em!important; align-self:center; }\n.cinema-rows .card-more--first .card-more__box { height:6.4em!important; border-radius:50%; }\n.cinema-rows .card-more--first .card-more__title { top:50%; left:0; right:0; margin:0; transform:translateY(-50%); font-size:1em; line-height:1.1; }\n.cinema-rows .card-more--first .card-more__title:after { content:\'\\203A\'; display:block; font-size:1.8em; line-height:.9; color:#f4f5f7; }\n.cinema-rows .card-more--first.focus .card-more__box:after { border-radius:50%; }\n.cinema-rows .full-episode--next .full-episode__img:after { border:.15em dashed #ffffff38; border-radius:.9em; }\n.cinema-rows .full-episode.focus:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-rows .items-line__body .full-person { padding:.45em 1.3em .45em .45em; font-size:1em; color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff17; border-radius:1em; }\n.cinema-rows .items-line__body .full-person + .full-person { margin-left:var(--cp-gap); }\n.cinema-rows .items-line__body .full-person__photo { width:4.8em; height:4.8em; margin-right:.9em; border-radius:.75em; background-color:#1e2630; }\n.cinema-rows .items-line__body .full-person__photo img[src$="actor.svg"] { filter:invert(1); opacity:.55; }\n.cinema-rows .items-line__body .full-person__name { font-size:14px; font-size:max(14px,1.15em); font-weight:500; }\n.cinema-rows .items-line__body .full-person__role { margin-top:.3em; font-size:12px; font-size:max(12px,.9em); color:#aab5c5; }\n.cinema-rows .items-line__body .full-person.focus, .cinema-rows .items-line__body .full-person.hover { color:#fff; background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .full-review { color:#e6ebf2; background:#ffffff0a; border:1px solid #ffffff17; border-radius:1em; }\n.cinema-rows .full-review__user-email, .cinema-rows .full-review__like { color:#bdc8d8; }\n.cinema-rows .full-review.focus, .cinema-rows .full-review.hover { color:#fff; background:#ffffff1c; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-rows .full-review.focus .full-review__user-email, .cinema-rows .full-review.focus .full-review__like { color:#fff; }\n.cinema-rows .full-review-add { background:#ffffff05; border:.15em dashed #ffffff40; border-radius:1em; }\n.cinema-rows .full-review-add.focus:after { top:-.35em; left:-.35em; right:-.35em; bottom:-.35em; border-width:.22em; border-color:#f2f4f6; border-radius:1.2em; }\n.cinema-detail .tag-count { background:#ffffff0d; border:1px solid #ffffff1a; }\n.cinema-detail .tag-count__count { color:#f4f5f7; background:#ffffff24; }\n.cinema-detail .tag-count.focus, .cinema-detail .tag-count.hover { color:#fff; background:#ffffff26; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:2px; }\n.cinema-detail .tag-count.focus .tag-count__count { color:#0d1015; background:#f2f4f6; }\n.cinema-detail .full-start-new__title.cinema-title--logo { font-size:1em; line-height:1; display:block; overflow:visible; -webkit-line-clamp:unset; margin:.35em 0 .8em; }\n.cinema-detail .full-start-new__title .cinema-logo { max-width:min(30em,100%); max-height:7em; object-position:left center; }\n@media(max-width:580px) { .cinema-detail .full-start-new__title .cinema-logo { max-height:4.6em; } }\n.cinema-rows .person-start { box-sizing:border-box; padding:1.6em; color:#f4f5f7; border:1px solid #ffffff20; border-radius:1.7em; background:linear-gradient(100deg,#101620ed,#101620b8 65%,#10162072); }\n@supports (container-type:inline-size) { .cinema-rows .person-start { width:calc(100cqw - var(--cp-pad,1.5em) * 2); } }\n.cinema-rows .person-start__img { border-radius:1em; object-fit:cover; box-shadow:0 1em 3em #0005; background:#1e2630; }\n.cinema-rows .person-start__left { min-width:0; }\n.cinema-rows .person-start__tags { margin-bottom:1em; }\n.cinema-rows .person-start__tag { padding:.3em .75em; color:#d3dbe5; background:#ffffff12; border:1px solid #ffffff25; border-radius:.6em; }\n.cinema-rows .person-start__tag > img { filter:invert(1); opacity:.8; }\n.cinema-rows .person-start__name { font-size:2.8em; font-weight:600; line-height:1.1; letter-spacing:-.025em; overflow-wrap:anywhere; }\n.cinema-rows .person-start__place { font-size:1.25em; font-weight:400; color:#bbc4d1; }\n.cinema-rows .person-start__descr, .cinema-rows .person-start__descr-mobile { color:#d3dbe5; font-weight:400; }\n.cinema-rows .person-start__bottom { flex-wrap:wrap; gap:.65em; }\n.cinema-rows .person-start .full-start__button { height:auto; min-height:44px; margin:0; padding:.75em 1em; font-size:1.05em; color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; }\n.cinema-rows .person-start .full-start__button.focus, .cinema-rows .person-start .full-start__button.hover { color:#fff; background:#525e70; outline:2px solid #fff; outline-offset:3px; }\n@media(max-width:580px) {\n .cinema-rows .person-start { padding:1.2em; border-radius:1.4em; }\n .cinema-rows .person-start__img { width:7.5em; height:10em; }\n .cinema-rows .person-start__left { padding-left:1.2em; }\n .cinema-rows .person-start__name { font-size:1.9em; }\n .cinema-rows .person-start__place { font-size:1.1em; }\n}\nbody.cinema-pilot .settings__content { background:linear-gradient(145deg,#1d2127,#121418); border-left:1px solid #ffffff24; box-shadow:0 1em 4em #0006; color:#f4f5f7; }\nbody.cinema-pilot .settings__head { padding-bottom:.6em; }\nbody.cinema-pilot .settings__title { font-weight:500; }\nbody.cinema-pilot .settings-folder, body.cinema-pilot .settings-param { margin:.35em .8em; padding:1em 1.1em; min-height:44px; background:#ffffff07; border:1px solid #ffffff13; border-radius:.85em; }\nbody.cinema-pilot .settings-folder__icon { opacity:.85; }\nbody.cinema-pilot .settings-folder__name { font-size:1.25em; }\nbody.cinema-pilot .settings-param__name { font-size:1.2em; color:#f4f5f7; }\nbody.cinema-pilot .settings-param__value { color:#bdc8d8; }\nbody.cinema-pilot .settings-param__descr { opacity:1; color:#aab5c5; }\nbody.cinema-pilot .settings-param-title { padding:1.2em 1.9em .4em; }\nbody.cinema-pilot .settings-param-title > span { font-size:.95em; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#8f9bad; }\nbody.cinema-pilot .settings-folder.focus, body.cinema-pilot .settings-param.focus, body.cinema-pilot .settings-folder.hover, body.cinema-pilot .settings-param.hover { color:#fff; background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .settings-folder.focus .settings-folder__icon, body.cinema-pilot .settings-param.focus .settings-folder__icon { opacity:1; }\nbody.cinema-pilot .feed-head { border-radius:1.2em; }\nbody.cinema-pilot .feed-head.focus, body.cinema-pilot .feed-head.hover { outline:2px solid #f2f4f6; outline-offset:.5em; }\nbody.cinema-pilot .feed-head__info { color:#bdc8d8; }\nbody.cinema-pilot .feed-item__label { border-radius:.45em; font-weight:500; }\nbody.cinema-pilot .feed-item__descr { color:#d3dbe5; }\nbody.cinema-pilot .feed-item__info { color:#a1aaba; }\nbody.cinema-pilot .feed-item__image-img, body.cinema-pilot .feed-item__poster-img { border-radius:1em; object-fit:cover; }\nbody.cinema-pilot .feed-item__minicard-poster { filter:drop-shadow(0 1em 2em #0009); }\nbody.cinema-pilot .feed-item__buttons { flex-wrap:wrap; gap:.65em; }\nbody.cinema-pilot .feed-item__buttons .simple-button { margin:0; height:auto; min-height:44px; padding:.6em 1.3em; font-size:1.05em; color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; }\nbody.cinema-pilot .feed-item__buttons .simple-button:first-child { background:#de3041; border-color:#ee4151; }\nbody.cinema-pilot .feed-item__buttons .simple-button.focus, body.cinema-pilot .feed-item__buttons .simple-button.hover { color:#fff; background:#525e70; outline:2px solid #fff; outline-offset:3px; }\nbody.cinema-pilot .feed-item__buttons .simple-button:first-child.focus, body.cinema-pilot .feed-item__buttons .simple-button:first-child.hover { background:#ef4051; }\nbody.cinema-pilot .explorer__card { padding:1em 1em 1.5em 1.5em; }\nbody.cinema-pilot .explorer-card { position:relative; padding:1.3em; overflow:hidden; border:1px solid #ffffff1f; border-radius:1.4em; background:linear-gradient(180deg,#0d101520 0,#0d101580 9em,#0d1015f2 17em,#0d1015f5 100%),var(--cinema-backdrop,none) center top/100% auto no-repeat,#151b25; }\nbody.cinema-pilot .explorer-card__head { margin-bottom:1.6em; }\nbody.cinema-pilot .explorer-card__head-img > img { border-radius:.7em; box-shadow:0 .8em 2em #0008; object-fit:cover; }\nbody.cinema-pilot .explorer-card__head-img.focus::after { border-color:#f2f4f6; border-width:.22em; border-radius:1em; }\nbody.cinema-pilot .explorer-card__head-create { color:#d3dbe5; }\nbody.cinema-pilot .explorer-card__head-rate > svg { color:#f1d59a; }\nbody.cinema-pilot .explorer-card__head-rate > span { color:#f1d59a; }\nbody.cinema-pilot .explorer-card__head-age { border-color:#ffffff40; border-radius:.45em; color:#d3dbe5; }\nbody.cinema-pilot .explorer-card__title { font-weight:600; letter-spacing:-.02em; }\nbody.cinema-pilot .explorer-card__title.cinema-title--logo { font-size:1em; line-height:1; margin-bottom:.8em; }\nbody.cinema-pilot .explorer-card__title .cinema-logo { max-width:100%; max-height:6em; object-position:left center; }\nbody.cinema-pilot .explorer-card__genres { color:#bdc8d8; margin-bottom:1.2em; }\nbody.cinema-pilot .explorer-card__descr { color:#c7cdd5; }\nbody.cinema-pilot .explorer__files .torrent-filter { gap:.6em; margin-bottom:.4em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button { margin:0; height:auto; min-height:44px; padding:.35em .5em .35em .9em; font-size:1em; color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.8em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > span { margin:0 .6em 0 0; font-size:.8em; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#8f9bad; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > div:not(.hide) { margin:0; padding:.35em .75em; font-size:.95em; color:#f4f5f7; background:#ffffff17; border-radius:.55em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button > svg { margin-right:.5em; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button.focus, body.cinema-pilot .explorer__files .torrent-filter .simple-button.hover { color:#fff; background:#ffffff18; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .explorer__files .torrent-filter .simple-button.focus > span { color:#f4f5f7; }\nbody.cinema-pilot .explorer .watched-history { background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .explorer .watched-history.focus, body.cinema-pilot .explorer .watched-history.hover { background:#ffffff14; border-color:#f2f4f6; }\nbody.cinema-pilot .explorer .watched-history.focus:after { top:-.3em; left:-.3em; right:-.3em; bottom:-.3em; border:.2em solid #f2f4f6; border-radius:1.25em; }\nbody.cinema-pilot .explorer .torrent-item { padding:1.1em 1.2em; background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .explorer .torrent-item + .torrent-item { margin-top:.7em; }\nbody.cinema-pilot .explorer .torrent-item__title { font-size:1.15em; font-weight:500; line-height:1.35; color:#eef1f5; word-break:normal; overflow-wrap:anywhere; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div { background:#ffffff12; border:1px solid #ffffff1f; border-radius:.5em; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general { font-size:1em; outline:none; border-color:#ffffff30; border-radius:.6em; overflow:hidden; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general > div:nth-child(1) { padding:.45em .65em; font-size:1em; font-weight:700; background:#ffffff26; border-radius:0; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-general > div:nth-child(2) { padding:.45em .7em; }\nbody.cinema-pilot .explorer .torrent-item__ffprobe > div.m-resolution { background:#ffffff1c; box-shadow:none; }\nbody.cinema-pilot .explorer .torrent-item__details { color:#a1aaba; font-weight:500; }\nbody.cinema-pilot .explorer .torrent-item__seeds > span { color:#7ee2a8; background:#1f7a4d4d; border-radius:.4em; }\nbody.cinema-pilot .explorer .torrent-item__grabs > span { color:#d3dbe5; background:#ffffff17; border-radius:.4em; }\nbody.cinema-pilot .explorer .torrent-item__size { color:#fff; background:#ffffff1f; border:1px solid #ffffff38; border-radius:.5em; }\nbody.cinema-pilot .explorer .torrent-item.focus, body.cinema-pilot .explorer .torrent-item.hover { background:#ffffff12; border-color:#f2f4f6; }\nbody.cinema-pilot .explorer .torrent-item.focus:after { top:-.3em; left:-.3em; right:-.3em; bottom:-.3em; border:.2em solid #f2f4f6; border-radius:1.25em; }\nbody.cinema-pilot .explorer .torrent-item__viewed { background:#de3041; color:#fff; }\nbody.cinema-pilot .modal__content { color:#f4f5f7; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1.4em; box-shadow:0 1em 4em #0008; }\nbody.cinema-pilot .modal__title { font-weight:500; letter-spacing:-.01em; }\nbody.cinema-pilot .torrent-files .torrent-serial, body.cinema-pilot .torrent-files .torrent-file { overflow:hidden; background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot .torrent-files .torrent-serial + .torrent-serial, body.cinema-pilot .torrent-files .torrent-file + .torrent-file { margin-top:.7em; }\nbody.cinema-pilot .torrent-files .torrent-serial__img { border-radius:0; object-fit:cover; }\nbody.cinema-pilot .torrent-files .torrent-serial__episode { left:.45em; top:.45em; padding:.2em .55em; font-size:1.15em; background:#0d1015d0; border:1px solid #ffffff24; border-radius:.5em; }\nbody.cinema-pilot .torrent-files .torrent-serial__title { font-size:1.4em; font-weight:500; color:#eef1f5; }\nbody.cinema-pilot .torrent-files .torrent-serial__line { color:#aab5c5; font-weight:400; }\nbody.cinema-pilot .torrent-files .torrent-serial__line b { color:#d3dbe5; }\nbody.cinema-pilot .torrent-files .torrent-serial__size, body.cinema-pilot .torrent-files .torrent-file__size { font-size:1.1em; color:#fff; background:#ffffff1c; border:1px solid #ffffff30; border-radius:.5em; }\nbody.cinema-pilot .torrent-files .torrent-serial__exe { font-size:1em; color:#8f9bad; }\nbody.cinema-pilot .torrent-files .time-line { background-color:#ffffff30; }\nbody.cinema-pilot .torrent-files .time-line > div { background-color:#de3041; }\nbody.cinema-pilot .torrent-files .torrent-serial.focus, body.cinema-pilot .torrent-files .torrent-serial.hover, body.cinema-pilot .torrent-files .torrent-file.focus, body.cinema-pilot .torrent-files .torrent-file.hover { background:#ffffff14; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .torrent-files .torrnet-folder-name { color:#bdc8d8; opacity:1; }\n@supports (aspect-ratio:16/9) {\n body.cinema-pilot .torrent-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(14em,1fr)); gap:1em; }\n body.cinema-pilot .torrent-files .torrnet-folder-name, body.cinema-pilot .torrent-files .torrent-file { grid-column:1/-1; padding:.4em 0 0; }\n body.cinema-pilot .torrent-files .tracks-metainfo, body.cinema-pilot .torrent-files .tracks-loading { grid-column:1/-1; }\n body.cinema-pilot .torrent-files .torrent-serial + .torrent-serial { margin-top:0; }\n body.cinema-pilot .torrent-files .torrent-serial { display:block; position:relative; padding-bottom:0; aspect-ratio:16/9; background:#1e2630; }\n body.cinema-pilot .torrent-files .torrent-serial__img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border-radius:0; }\n body.cinema-pilot .torrent-files .torrent-serial__content { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-end; padding:.7em .8em .65em; overflow:hidden; background:linear-gradient(0deg,#0d1015f0 0%,#0d1015a0 38%,#0d101500 70%); }\n body.cinema-pilot .torrent-files .torrent-serial__body { float:none; max-width:none; margin:0; }\n body.cinema-pilot .torrent-files .torrent-serial__title { font-size:1.1em; line-height:1.25; font-weight:600; color:#fff; white-space:normal; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; text-shadow:0 1px .6em #000a; }\n body.cinema-pilot .torrent-files .torrent-serial__line, body.cinema-pilot .torrent-files .torrent-serial__exe, body.cinema-pilot .torrent-files .torrent-serial__clear { display:none; }\n body.cinema-pilot .torrent-files .torrent-serial__detail { position:absolute; top:.5em; right:.5em; float:none; margin:0; }\n body.cinema-pilot .torrent-files .torrent-serial__size { font-size:.85em; padding:.15em .5em; background:#0d1015c8; border-color:#ffffff30; }\n body.cinema-pilot .torrent-files .torrent-serial__size:empty { display:none; }\n body.cinema-pilot .torrent-files .torrent-serial__episode { left:.5em; top:.5em; font-size:.95em; }\n body.cinema-pilot .torrent-files .torrent-serial .time-line { position:static; width:auto; top:auto; left:auto; margin-top:.5em; height:.25em; }\n body.cinema-pilot .torrent-files .torrent-serial .time-line > div { height:.25em; }\n}\nbody.cinema-pilot .modal:has(.torrent-files):not(.cinema-files-logo) .modal__head { display:none; }\nbody.cinema-pilot .modal.cinema-files-logo .modal__title.cinema-title--logo { font-size:1em; line-height:1; }\nbody.cinema-pilot .modal.cinema-files-logo .modal__title .cinema-logo { max-width:min(24em,70%); max-height:3.6em; object-position:left center; }\nbody.cinema-pilot .torrent-files .torrnet-folder-name { font-size:1em; line-height:1.35; padding:0 0 .2em; color:#8f9bad; }\n@media screen and (max-width:480px) {\n body.cinema-pilot .modal:has(.torrent-files) .modal__content { display:flex; flex-direction:column; box-sizing:border-box; max-height:calc(100vh - max(2.5em, env(safe-area-inset-top) + 1em)); max-height:calc(100dvh - max(2.5em, env(safe-area-inset-top) + 1em)); }\n body.cinema-pilot .modal:has(.torrent-files) .modal__head { flex:none; }\n body.cinema-pilot .modal:has(.torrent-files) .modal__body, body.cinema-pilot .modal:has(.torrent-files) .modal__body > .scroll { display:flex; flex-direction:column; flex:1 1 auto; min-height:0; }\n body.cinema-pilot .modal:has(.torrent-files) .modal__body .scroll__content { flex:1 1 auto; min-height:0; max-height:none !important; }\n}\nbody.cinema-pilot .tracks-metainfo__label { font-size:.85em; letter-spacing:.08em; text-transform:uppercase; color:#8f9bad; opacity:1; }\nbody.cinema-pilot .tracks-metainfo__info > div { color:#e6ebf2; background:#ffffff08; border:1px solid #ffffff14; border-radius:.8em; }\nbody.cinema-pilot .tracks-metainfo__info > div.focus, body.cinema-pilot .tracks-metainfo__info > div.hover { background:#ffffff14; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; }\nbody.cinema-pilot .tracks-metainfo__column--num, body.cinema-pilot .tracks-metainfo__column--rate, body.cinema-pilot .tracks-metainfo__column--channels, body.cinema-pilot .tracks-metainfo__column--codec { color:#aab5c5; }\nbody.cinema-pilot .tracks-metainfo__column--lang { font-weight:600; }\nbody.cinema-pilot .tracks-metainfo__item[data-cinema-track] > [class*="tracks-metainfo__column"] { display:none; }\nbody.cinema-pilot .tracks-metainfo__line + .tracks-metainfo__line { margin-top:1.4em; }\nbody.cinema-pilot .tracks-metainfo__info { padding-top:.6em; }\nbody.cinema-pilot .tracks-metainfo__info > div + div { margin-top:.5em; }\nbody.cinema-pilot .tracks-metainfo__info > .tracks-metainfo__item[data-cinema-track] { display:flex; flex-wrap:nowrap; }\nbody.cinema-pilot .cinema-track { display:flex; align-items:center; gap:.7em; width:100%; min-width:0; padding:.8em 1em; }\nbody.cinema-pilot .cinema-track__name { flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:1.1em; font-weight:500; color:#fff; }\nbody.cinema-pilot .cinema-track__meta { flex-shrink:0; font-size:.9em; color:#8f9bad; white-space:nowrap; }\nbody.cinema-pilot .cinema-track__pick { display:none; flex-shrink:0; padding:.15em .55em; font-size:.75em; font-weight:700; letter-spacing:.04em; color:#fff; background:#de3041; border-radius:.4em; }\nbody.cinema-pilot .cinema-track--chosen .cinema-track__pick { display:inline-block; }\nbody.cinema-pilot .tracks-metainfo__info > .cinema-track--chosen { background:#de30411f; border-color:#de304199; }\nbody.cinema-pilot .cinema-track__hint { margin-left:.8em; font-weight:400; letter-spacing:0; text-transform:none; color:#8f9bad; opacity:.8; }\n@media(max-width:580px) {\n body.cinema-pilot .cinema-track { flex-wrap:wrap; row-gap:.25em; }\n body.cinema-pilot .cinema-track__meta { flex-basis:100%; padding-left:calc(3.6em * .75 / .9 + .7em); }\n}\nbody.cinema-pilot.cinema-nova:not(.nova-plus-fade) .nova-plus-root .nova-hero { border:1px solid #ffffff20; border-radius:1.4em; background:#151b25; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__season, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__hint { color:#bdc8d8; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__meta > div:not(.nova-badge) { color:#d3dbe5; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-badge { color:#d3dbe5; background:#ffffff1c!important; border-radius:.45em; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn { color:#f4f5f7; background:#ffffff13; border:1px solid #ffffff30; border-radius:.8em; box-shadow:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main { color:#fff!important; background:#de3041!important; border-color:#ee4151; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-btn.hover { color:#fff!important; background:#525e70!important; outline:2px solid #fff; outline-offset:3px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-btn--main.hover { background:#ef4051!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-toolbar__label, body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__label { font-weight:600; letter-spacing:.1em; color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__total { font-weight:400; color:#8f9bad; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group { color:#f4f5f7; background:#ffffff0a; border:1px solid #ffffff1a; border-radius:.8em; box-shadow:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip__sub, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group__count { color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip__badge { color:#d3dbe5; background:#ffffff1c; border-radius:.45em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip--active, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group--open { color:#fff; background:#ffffff1c; border-color:#ffffff59; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-chip.focus, body.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-group.focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova-chip.hover, body.cinema-pilot.cinema-nova .nova-plus-root .nova-group.hover { color:#fff!important; background:#ffffff18!important; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova-chip.focus .nova-chip__badge { color:#d3dbe5!important; background:#ffffff1c!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__thumb { border-radius:1em; background:#1e2630; box-shadow:inset 0 0 0 1px #ffffff14; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__tag, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__strip > span, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__tags > span:not(.nova-card__voice), body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__num > span { color:#fff; background:#0d1015d0!important; border-radius:.5em; box-shadow:inset 0 0 0 1px #ffffff24!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__title { color:#eef1f5; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__meta, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__date, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card__time { color:#8f9bad; opacity:1; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__rate { color:#f1d59a; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__line, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__progress { background:#ffffff30!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card__line .time-line > div, body.cinema-pilot.cinema-nova .nova-plus-root .nova-hero__progress .time-line > div, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card.focus .nova-card__line .time-line > div { background:#de3041!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.focus .nova-card__thumb, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.hover .nova-card__thumb, body.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova__list--grid .nova-card.focus .nova-card__thumb { box-shadow:0 0 0 2px #f2f4f6, inset 0 0 0 1px #ffffff14!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.focus .nova-card__title { color:#fff; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide) { background:#ffffff08; border:1px solid #ffffff14; border-radius:1em; }\nbody.cinema-pilot.cinema-nova.nova-plus-focus-ring .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide).focus, body.cinema-pilot.cinema-nova .nova-plus-root .nova__list:not(.nova__list--grid) .nova-card:not(.nova-card--wide).hover { color:#fff!important; background:#ffffff14!important; border-color:#f2f4f6; outline:2px solid #f2f4f6; outline-offset:-2px; box-shadow:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) { position:relative; padding-bottom:1.1em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__thumb:before { content:""; position:absolute; inset:0; z-index:1; pointer-events:none; background:linear-gradient(0deg,#0d1015f0 0%,#0d1015b0 34%,#0d101500 66%); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__body { position:static; margin:0; padding:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__head { height:0; margin:0; padding:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__head > *, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__tags, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__descr, body.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__meta { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide:not(.nova-card--wide-nav) .nova-card__title { position:absolute; z-index:2; left:1.29em; right:1.29em; bottom:3.29em; margin:0; font-size:1.05em; font-weight:600; line-height:1.25; color:#fff; -webkit-line-clamp:2; text-shadow:0 1px .6em #000a; pointer-events:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-card--wide.nova-card--file .nova-card__head > .nova-card__quality { display:block; position:absolute; z-index:3; top:.47em; left:1.18em; margin:0; padding:.12em .4em; font-size:.85em; font-weight:600; line-height:1.4; color:#fff; background:#0d1015d0!important; border-radius:.5em; box-shadow:inset 0 0 0 1px #ffffff24!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__row:has(> .nova-chip--stack) > .nova-chip { box-sizing:border-box; min-height:2.95em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__group--scroll { -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 2.5em),transparent); mask-image:linear-gradient(90deg,#000 calc(100% - 2.5em),transparent); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-chip > .cinema-voice { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold { position:relative; overflow:visible!important; -webkit-mask-image:none!important; mask-image:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row { height:auto!important; flex-direction:row!important; flex-wrap:wrap!important; transform:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold:not(.cinema-voice-open) .nova-plus__row > .nova-chip:not(.nova-chip--active) { display:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row > .nova-chip > :not(.cinema-voice) { display:none!important; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-plus__row > .nova-chip { min-height:0; margin:0 .45em .45em 0; padding:.45em .8em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-chip > .cinema-voice { display:flex; align-items:center; gap:.55em; white-space:nowrap; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type { flex-shrink:0; min-width:3.2em; padding:.15em .45em; text-align:center; font-size:.72em; font-weight:700; letter-spacing:.06em; color:#e6ebf2; background:#ffffff1c; border-radius:.4em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type--dub { color:#fff; background:#de3041; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__type--orig { color:#0d1015; background:#f2f4f6; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__part, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__more { font-size:.8em; color:#8f9bad; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__more:empty, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .nova-chip:not(.nova-chip--active) .cinema-voice__caret, body.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .cinema-voice__more { display:none; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold .cinema-voice__caret { width:.45em; height:.45em; margin:0 .15em 0 .1em; border-right:2px solid currentColor; border-bottom:2px solid currentColor; transform:translateY(-.15em) rotate(45deg); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .cinema-voice__caret { transform:translateY(.1em) rotate(225deg); }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open { z-index:8; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .cinema-voice-fold.cinema-voice-open .nova-plus__row { position:absolute; left:0; right:0; z-index:8; padding:.7em .6em .25em .7em; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1em; box-shadow:0 1em 3em #000a; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__panel--overlay { z-index:6; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__panel > .nova-drop, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-drop { padding:.7em .6em .2em .8em!important; background:linear-gradient(145deg,#1d2127,#121418); border:1px solid #ffffff24; border-radius:1em; box-shadow:0 1em 3em #000a; }\n@media screen and (max-width:640px) {\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar { flex-wrap:nowrap!important; overflow-x:auto; overflow-y:hidden; scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-top:1px; padding-bottom:1px; -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 2em),transparent); mask-image:linear-gradient(90deg,#000 calc(100% - 2em),transparent); }\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar::-webkit-scrollbar, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar::-webkit-scrollbar { display:none; }\n body.cinema-pilot.cinema-nova .nova-plus-root .nova-plus__bar > *, body.cinema-pilot.cinema-nova .nova-plus-root > .nova__rows > .nova-toolbar > * { flex-shrink:0; }\n}\nbody.cinema-pilot.cinema-nova .nova-plus-scope .explorer__files-body .scroll__body { padding-left:.95em; padding-right:.95em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root .nova-hero { margin-left:.55em; margin-right:.55em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus > .nova__rows { padding-left:.55em; padding-right:.55em; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus > .nova-plus__strip:not(.nova-plus__strip--clip) { padding-left:0; }\nbody.cinema-pilot.cinema-nova .nova-plus-root.nova-plus .nova__list--grid:not(.nova__list--row) { margin-left:0; margin-right:0; }\n@media (orientation:landscape) and (min-width:700px) {\n .cinema-home .cinema-hero { min-height:15em; margin-bottom:1.3em; }\n .cinema-home .cinema-copy { padding:3.2em 2em 1.5em; }\n .cinema-home .cinema-kicker { margin-bottom:.6em; }\n .cinema-home .cinema-title { margin-bottom:.25em; }\n .cinema-home .cinema-title--logo { margin-bottom:.6em; }\n .cinema-home .cinema-logo { max-height:4em; }\n .cinema-home .cinema-desc { -webkit-line-clamp:2; margin:.7em 0 1em; }\n}\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item { display:flex; align-items:center; gap:.7em; margin:.3em .8em; padding:.7em .9em; min-height:44px; }\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item__title { display:flex; align-items:center; gap:.6em; flex:1; min-width:0; font-size:1.1em; font-weight:500; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type, body.cinema-pilot .cinema-track .cinema-audio__type { flex-shrink:0; min-width:3.6em; padding:.2em .5em; text-align:center; font-size:.75em; font-weight:700; letter-spacing:.06em; color:#e6ebf2; background:#ffffff1c; border-radius:.45em; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type--dub, body.cinema-pilot .cinema-track .cinema-audio__type--dub { color:#fff; background:#de3041; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__type--orig, body.cinema-pilot .cinema-track .cinema-audio__type--orig { color:#0d1015; background:#f2f4f6; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__note, body.cinema-pilot .cinema-track .cinema-audio__note { flex-shrink:0; font-size:.75em; color:#8f9bad; }\nbody.cinema-pilot .selectbox.cinema-audio .cinema-audio__last { flex-shrink:0; padding:.1em .45em; font-size:.72em; color:#d3dbe5; background:#ffffff14; border-radius:.4em; }\nbody.cinema-pilot .selectbox.cinema-audio .selectbox-item__subtitle { flex-shrink:0; margin:0; font-size:.85em; color:#8f9bad; white-space:nowrap; }\n@media(max-width:580px) {\n body.cinema-pilot .selectbox.cinema-audio .selectbox-item { flex-wrap:wrap; row-gap:.25em; }\n body.cinema-pilot .selectbox.cinema-audio .selectbox-item__subtitle { flex-basis:100%; padding-left:calc(3.6em * .75 / .85 + .6em); }\n}\n';
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
            c.cinema = CinemaCatalog(c.original);
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
        function enabled() {
            return Lampa.Storage.value(KEY, "true") !== "false";
        }
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
            document.body.classList.toggle("cinema-nova", enabled() && option("cinema_nova"));
            Lampa.Component.add("main", enabled() && option("cinema_banner") ? Cinema : Original);
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
        function CinemaCatalog(OriginalCatalog) {
            return function(object) {
                var comp = new OriginalCatalog(object);
                if (!comp.use) return comp;
                comp.cinemaCatalog = true;
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
        function Cinema(object) {
            var comp = new Original(object);
            if (!comp.use || !comp.scroll || !Array.isArray(comp.items)) return comp;
            comp.cinemaPilot = true;
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
            name: "Lampa Cinema",
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
    if (window.appready) authorized(boot); else if (window.Lampa) Lampa.Listener.follow("app", function(e) {
        if (e.type === "ready") authorized(boot);
    });
})();