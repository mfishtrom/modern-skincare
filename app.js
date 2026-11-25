const steps = [...document.querySelectorAll('.step')];
let current = 0;
const progress = document.getElementById('progress');
const count = document.getElementById('stepCount');
const title = document.getElementById('stepLabel');
const back = document.getElementById('back');
const next = document.getElementById('next');

function showStep() { steps.forEach((s, i) => s.classList.toggle('active', i === current));
    progress.style.width = ((current + 1) / steps.length * 100) + '%';
    count.textContent = `${current+1} of ${steps.length}`;
    title.textContent = steps[current].dataset.title;
    back.classList.toggle('is-hidden', current === 0);
    next.textContent = current === steps.length - 1 ? 'Build my guide →' : 'Continue →';
    document.getElementById('navHint').textContent = current === steps.length - 1 ? 'Your answers stay on this device' : 'About 1 minute' }

function val(id) { return document.getElementById(id).value.trim() }

function selected(name) { const el = document.querySelector(`[name="${name}"]:checked`); return el ? el.value : '' }

function checked(group) { return [...document.querySelectorAll(`[data-name="${group}"] input:checked`)].map(x => x.value) }
back.onclick = () => { if (current > 0) { current--;
        showStep() } };
next.onclick = () => { document.getElementById('errClimate').classList.remove('show'); 
  if (current === 0 && !val('climate')) { document.getElementById('errClimate').classList.add('show'); return } 
  if (current < steps.length - 1) { current++;
        showStep() } else buildResult() };
const productCatalog = {
    'Gentle Cleanser': {
        names: ['ELF Daily Cleanser', 'CeraVe Foaming Face Wash', 'Youth to the People Cleanser'],
        urls: [
            'https://link.amazon/B0h0LVkkp',
            'https://link.amazon/B01sO4dxZ',
            'https://link.amazon/B08rsnhm8'
        ],
        why: 'A simple cleanse to anchor a low-fuss routine.'
    },
    'Ceramides': {
        names: ['Eucerin Advanced Repair', 'CeraVe Daily Moisturizing Cream', 'Tula Moisturizer'],
        urls: [
            'https://link.amazon/B0cafi4FI',
            'https://link.amazon/B03rtm8xl',
            'https://link.amazon/B0evaQVmX'
        ],
        why: 'A moisturizer option for everyday comfort and barrier support.'
    },
    'Glycerin': {
        names: ['365 Glycerin', '365 Glycerin', '365 Glycerin'],
        urls: [
            'https://link.amazon/B0aX49oo4',
            'https://link.amazon/B0aX49oo4',
            'https://link.amazon/B0aX49oo4'
        ],
        why: 'A humectant option for adding hydration.'
    },
    'Squalene': {
        names: ['The Ordinary Plant Derived Squalane', 'Biossance Squalane', 'The Outset Daily Moisturizer'],
        urls: [
            'https://link.amazon/B05ObvtvK',
            'https://link.amazon/B007QdZjO',
            'https://link.amazon/B0dblfu7q'
        ],
        why: 'A moisturizing option for dryness or a tight feeling.'
    },
    'Niacinamide': {
        names: ['The Ordinary Niacinamide 10% + Zinc', 'Farmacy 10% Niacinamide', 'Paula’s Choice Niacinamide 20%'],
        urls: [
            'https://link.amazon/B04EVe47s',
            'https://link.amazon/B08aCpTe0',
            'https://link.amazon/B0jeymBVT'
        ],
        why: 'A targeted serum option for oiliness or uneven tone.'
    },
    'Noncomedogenic Cream': {
        names: ['The Ordinary Natural Moisturizing Factors', 'Eucerin Daily Moisturizer', 'Honest Beauty Face Cream'],
        urls: [
            'https://link.amazon/B099oXMwf',
            'https://link.amazon/B0fXA6kpN',
            'https://link.amazon/B04uuItBE'
        ],
        why: 'A daily moisturizer option; check the label for non-comedogenic claims.'
    },
    'Hydrocolloid Patches': {
        names: ['Hero Mighty Patch', 'Rael Beauty Miracle Patch', 'Peace Out Acne Healing Dots'],
        urls: [
            'https://link.amazon/B0a82vcIx',
            'https://link.amazon/B0hpvlOO9',
            'https://link.amazon/B01quAOW8'
        ],
        why: 'A spot patch option for individual blemishes.'
    },
    'Benzoyl Peroxide': {
        names: ['PanOxyl Cleanser', 'CeraVe Acne Foaming Cleanser', 'Murad Deep Relief Acne Treatment'],
        urls: [
            'https://link.amazon/B0eGs0xc5',
            'https://link.amazon/B08Ilk4ij',
            'https://link.amazon/B0bpb13zb'
        ],
        why: 'An acne-treatment option from your list. Introduce one acne active at a time and follow the label; ask a clinician before use if you’re pregnant or trying to become pregnant.'
    },
    'Oats': {
        names: ['The Inkey List Oat Cleansing Balm', 'Aveeno Triple Therapy', 'Buttah Skin Oatmeal Kit'],
        urls: [
            'https://link.amazon/B0bsF6kUp',
            'https://link.amazon/B0eW1yeD2',
            'https://link.amazon/B0gOVJXCo'
        ],
        why: 'An oat-based option to consider for a comfort-focused routine; botanicals can still irritate some people.'
    },
    'Vitamin C': {
        names: ['Garnier Skin Active Vitamin C', 'The Inkey List 15% Vitamin C', 'Paula’s Choice C15 Vitamin C'],
        urls: [
            'https://link.amazon/B00Ldnchv',
            'https://link.amazon/B06B5PwO8',
            'https://link.amazon/B01SgItm1'
        ],
        why: 'A targeted serum option from your list for a brightening-focused routine.'
    },
    'Azelaic Acid': {
        names: ['The Ordinary 10% Azelaic Acid Cream', 'Paula’s Choice 10% Azelaic Acid Booster', 'Glytone Advanced Brightening Complex'],
        urls: [
            'https://link.amazon/B0cEEmU3g',
            'https://link.amazon/B02cd8OY3',
            'https://link.amazon/B0aJ8RMK5'
        ],
        why: 'A targeted option listed for uneven tone. Start cautiously and follow the product directions.'
    },
    'SPF 30': {
        names: ["Trader Joe’s Facial Sunscreen", 'Glossier Daily Sunscreen', 'Tula Daily Sunscreen'],
        urls: [
            '',
            'https://link.amazon/B00sFFFWd',
            'https://link.amazon/B08X38U52'
        ],
        why: 'Daily broad-spectrum sun protection is a useful foundation.'
    },
    'SPF 50+': {
        names: ['Sun Bum', 'Hawaiian Tropic Mineral', 'Supergoop'],
        urls: [
            'https://link.amazon/B06s9FxT5',
            'https://link.amazon/B05EgEjUv',
            'https://link.amazon/B0bBziMx2'
        ],
        why: 'A higher-SPF option from your list; check the label for broad-spectrum coverage.'
    },
    'Hydrolyzed Patches': {
        names: ['Hero Mighty Patch', 'Peace Out Acne Healing Dots', 'Starface'],
        urls: [
            'https://link.amazon/B0a82vcIx',
            'https://link.amazon/B01quAOW8',
            'https://link.amazon/B01Basppy'
        ],
        why: 'A spot patch option for individual blemishes.'
    }
};
const concernProducts = { 
  'Dryness': ['Ceramides', 'Squalene', 'Glycerin'], 
  'Oiliness': ['Niacinamide', 'Noncomedogenic Cream'], 
  'Breakouts': ['Hydrocolloid Patches', 'Benzoyl Peroxide'], 
  'Sensitivity': ['Ceramides', 'Oats', 'Gentle Cleanser'], 
  'Uneven tone': ['SPF 50+', 'Azelaic Acid', 'Vitamin C'], 
  'Texture': ['Gentle Cleanser', 'Ceramides'], 
  'Fine lines': ['SPF 50+', 'Vitamin C', 'Ceramides'], 
  'Prevention': ['SPF 30', 'Gentle Cleanser', 'Ceramides'] };

function getAmazonLink(value) {
    if (!value) return null;
    try {
        const url = new URL(value);
        const host = url.hostname.toLowerCase();
        const isAmazonHost = host === 'amazon.com' || host.endsWith('.amazon.com') || host === 'amzn.to' || host === 'link.amazon';
        if (url.protocol !== 'https:' || !isAmazonHost) return null;
        return { href: url.href, isAffiliate: host === 'amzn.to' || host === 'link.amazon' || url.searchParams.has('tag') };
    } catch { return null }
}

function recommendedProductCategories(concerns) {
    let categories = concerns.flatMap(c => concernProducts[c] || []);
    if (!categories.length) categories = ['Gentle Cleanser', 'Ceramides', 'SPF 30'];
    return [...new Set(categories)].slice(0, 3);
}

function productCards(concerns, budget) {
    const index = budget === '$50–$100' ? 1 : budget === '$100+' ? 2 : 0;
    return recommendedProductCategories(concerns).map(category => {
        const item = productCatalog[category];
        const name = escapeHtml(item.names[index]);
        const link = getAmazonLink(item.urls?.[index]);
        const content = `<span class="kind">${escapeHtml(category)}</span><strong>${name}</strong><p>${escapeHtml(item.why)}</p>`;
        return link ?
            `<a class="product-card product-card-link" href="${escapeHtml(link.href)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${content}</a>` :
            `<article class="product-card">${content}</article>`;
    }).join('');
}

function affiliateDisclosure(concerns, budget) {
    const index = budget === '$50–$100' ? 1 : budget === '$100+' ? 2 : 0;
    const hasAffiliateLink = recommendedProductCategories(concerns).some(category => getAmazonLink(productCatalog[category].urls?.[index])?.isAffiliate);
    return hasAffiliateLink ? '<p class="affiliate-disclosure">As an Amazon Associate, we earn a small commission from qualifying purchases.</p>' : '';
}

function buildResult() {
    const climate = val('climate'),
        concerns = checked('concerns'),
        type = selected('skinType'),
        budget = val('budget'),
        name = val('name');
    let moisture = 'Choose a simple, fragrance-free moisturizer that feels comfortable.';
    if (climate === 'Dry or arid' || type === 'Dry' || concerns.includes('Dryness')) moisture = 'Look for a richer cream with ingredients such as glycerin or ceramides to help reduce that tight, dry feeling.';
    else if (climate === 'Hot and humid' || type === 'Oily' || concerns.includes('Oiliness')) moisture = 'Try a light lotion or gel moisturizer; oily skin still benefits from comfortable hydration.';
    let focus = 'Keep the routine steady for a few weeks, and add only one new product at a time.';
    if (concerns.includes('Sensitivity')) focus = 'For sensitivity, keep the routine short and fragrance-free. Patch test new products and pause anything that stings or causes a rash.';
    else if (concerns.includes('Breakouts')) focus = 'For breakouts, avoid scrubbing and picking. A gentle cleanser and consistent routine are a good start; persistent or painful acne deserves professional care.';
    else if (concerns.includes('Uneven tone')) focus = 'Daily broad-spectrum SPF 30+ is the most useful first step for preventing dark spots from getting darker. Be patient with changes in tone.';
    else if (concerns.includes('Texture')) focus = 'Avoid rough scrubs. Once your skin is comfortable with the basics, consider introducing one gentle exfoliating product slowly.';
    else if (concerns.includes('Fine lines')) focus = 'Daily sun protection and a moisturizer are practical foundations. Introduce any active ingredient gradually and stop if irritation develops.';
    const stepsSummary = concerns.length ? concerns.slice(0, 3).join(' · ') : 'Everyday skin support';
    const routineName = type ? `${type.toLowerCase()} skin routine` : 'your simple starter routine';
    const lifestyle = [];
    if (['3–4 times a week', '5+ times a week'].includes(selected('exercise'))) lifestyle.push('After a workout, gently rinse or cleanse away sweat when you can.');
    if (['Less than 5 hours', '5–6 hours'].includes(val('sleep'))) lifestyle.push('On busy or short-sleep nights, keep your evening routine easy to follow.');
    if (val('diet')) lifestyle.push(`You noted: ${val('diet')}. Check ingredient labels against any known allergies or sensitivities.`);
    if (val('review')) lifestyle.push(`Your chosen check-in: ${val('review').toLowerCase()}. Change one thing at a time so you can tell what suits you.`);
    const res = document.getElementById('result');
    res.innerHTML = `<div class="result-head"><div><div class="eyebrow">Your personal guide</div><h2>${name?`A fresh start for ${escapeHtml(name)}`:'A fresh start for your skin'}</h2><p class="intro">A calm, practical place to begin with ${escapeHtml(routineName)}. 
      Choose a few basics and give them time to work.</p></div></div><div class="chips"><span class="chip">${escapeHtml(climate)} climate</span><span class="chip">${escapeHtml(budget||'Budget-friendly')}</span><span class="chip">Focus: ${escapeHtml(stepsSummary)}</span></div>
      <div class="routine-grid"><article class="routine"><h3><span>☼</span>Morning</h3><ol><li>Rinse or use a gentle cleanser.</li><li>${escapeHtml(moisture)}</li><li>Finish with broad-spectrum SPF 30 or higher.</li></ol></article>
      <article class="routine"><h3><span>☾</span>Evening</h3><ol><li>Cleanse gently to remove the day.</li><li>${escapeHtml(moisture)}</li><li>Keep it simple; skip steps that irritate your skin.</li></ol></article></div>
      <section class="product-recs"><h3>Product recommendations</h3><p class="product-lead">Options from our database, matched to your concerns and budget.</p>
      <div class="product-grid">${productCards(concerns,budget)}</div>${affiliateDisclosure(concerns,budget)}<p class="product-lead product-price-note">Prices and availability can change.</p></section>
      <div class="focus-card"><h3>A note for your routine</h3><p>${escapeHtml(focus)}${climate==='Cold or windy'?' In cold or windy weather, a richer moisturizer and protective clothing can help reduce dryness.':''}${climate==='Hot and humid'?' In heat and humidity, reapply sunscreen as directed, especially after sweating or swimming.':''}${lifestyle.length?' '+lifestyle.join(' '):''}</p></div>
      <p class="disclaimer">This guide offers general skincare education, not medical advice. Skin needs vary. Introduce one product at a time and patch test. For acne products during pregnancy, check with an obstetrician or dermatologist first. If you have a persistent rash, severe irritation, painful acne, or a changing skin lesion, talk with a qualified healthcare professional. If you have a known allergy or ingredient restriction, check product labels carefully. For more, see <a href="https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products/" target="_blank" rel="noopener noreferrer">AAD advice on testing products</a> and <a href="https://www.aad.org/public/diseases/acne/derm-treat/pregnancy" target="_blank" rel="noopener noreferrer">acne treatment during pregnancy</a>. Your answers are only used in this page and are not transmitted.</p>
      <div class="result-actions"><button class="btn" id="print">Save or print my guide</button><button class="btn secondary" id="restart">Start over</button></div>`;
    document.getElementById('quiz').style.display = 'none';
    res.classList.add('show');
    document.getElementById('print').onclick = () => window.print();
    document.getElementById('restart').onclick = () => { document.querySelectorAll('input').forEach(x => { if (x.type === 'checkbox' || x.type === 'radio') x.checked = false;
            else x.value = '' });
        document.querySelectorAll('select').forEach(x => x.selectedIndex = 0);
        document.getElementById('quiz').style.display = 'block';
        res.classList.remove('show');
        current = 0;
        showStep();
        window.scrollTo({ top: 0, behavior: 'smooth' }) };
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } [c])) } showStep();
