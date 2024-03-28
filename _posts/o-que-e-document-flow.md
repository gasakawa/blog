---
title: 'O que é document flow?'
date: '2021-02-03T00:00:00'
excerpt: 'Um resumo sobre o document flow em documentos HTML'
category: frontend
tags: 'html'
authors: 'Gabriel Asakawa'
---

Todo desenvolvedor frontend, deve dominar muito bem `HTML`, `CSS` e `Javascript`. Então para entender de uma vez por todas o que é o raio de **Document Flow** que tanto se fala por ai, resolvi fazer este post explicando o que é o Document Flow dentro de um documento HTML.

Um documento HTML está composto por duas partes o **HEAD** e **BODY**, dentro do BODY a composição do layout é feita de cima para baixo seguindo um _"flow"_. Este _flow_ está representado na imagem abaixo.

![Document Flow](https://gasakawa-blog.s3.amazonaws.com/document_flow_900f05ac67.jpg)

Então o layout da página é composto por elementos (tags), os quais podem ser de dois tipos:

- Block
- Inline

#### Block

Os elementos de tipo block, sempre iniciam uma _nova linha_ dentro do viewport, por tanto um elemento block ocupará toda a largura do viewport (janela do navegador).

![block-elements-html](https://gasakawa-blog.s3.amazonaws.com/block_elements_html_a12a152fe4.jpg)

Os elementos de tipo block são:

```html
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset>
<figcaption> <figure> <footer> <form> <h1> <h6> <header> <hr> <li> <main> <nav>
<noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>
```

#### Inline

Os elementos de tipo inline, não iniciam uma nova linha dentro da página. Cada elemento inline, será posicionado _lado a lado_ até ocupar a largura total do viewport.

![Inline Elements](https://gasakawa-blog.s3.amazonaws.com/inline_elements_html_11fbc57bd4.jpg)

Os elementos de tipo inline são:

```html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i>
<img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script>
<select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>
```

#### Conclusão

Compreender a diferença desses tipos e seu comportamento ajudará demais no desenvolvimento e composição das páginas web. Com isto em mente, entender as propriedades CSS será muito mais fácil.
