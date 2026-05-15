const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.kasiasiwosz.com/coaching', { waitUntil: 'networkidle2' });

  const result = await page.evaluate(() => {
    // Find absolute/fixed elements near bottom right
    const elements = Array.from(document.querySelectorAll('*'));
    const floating = elements.find(el => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (style.position === 'fixed' || style.position === 'absolute') &&
             rect.bottom > window.innerHeight - 200 &&
             rect.right > window.innerWidth - 200 &&
             rect.width > 20 && el.innerText;
    });
    
    if (floating) {
       const style = window.getComputedStyle(floating);
       return {
         text: floating.innerText.trim(),
         bg: style.backgroundColor,
         color: style.color,
         border: style.border,
         mixBlendMode: style.mixBlendMode,
         backdropFilter: style.backdropFilter
       };
    }
    return null;
  });

  console.log(result);
  await browser.close();
})();
