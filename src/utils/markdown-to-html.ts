import Markdown from 'markdown-it';
import hljs from 'highlight.js';

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(remarkHtml, { sanitize: false }).process(markdown);
  const md: Markdown = new Markdown({
    html: true,
    linkify: true,
    highlight: (str: string, lang: string) => {
      const code =
        lang && hljs.getLanguage(lang)
          ? hljs.highlight(str, {
              language: lang,
              ignoreIllegals: true,
            }).value
          : md.utils.escapeHtml(str);
      return `<pre><code class="hljs">${code}</code></pre>`;
    },
  });
  const result = md.render(markdown);

  return result;
}
