---
title: 'Salvando alterações locais com o DevTools do browser'
date: '2020-05-13'
excerpt: 'Como salvar mudanças no CSS ou HTML direto na sua máquina usando DevTools'
category: frontend
tags: ''
authors: 'Gabriel Asakawa'
---

Muitas vezes na hora de desenvolver um site ou uma página web, nos deparamos com a necessidade de testar algumas mudanças em propriedades **CSS**, código **HTML** ou inclusive no **Javascript** para validar rapidamente uma mudança.

Para isto podemos usar o **DevTools** no [Google Chrome](https://developers.google.com/web/tools/chrome-devtools) ou no [Mozilla Firefox](https://developer.mozilla.org/pt-BR/docs/Tools).

Esta ferramenta que vem junto com os browsers modernos, são uma "mão na roda" para os desenvolvedores na hora de analisar, criar, validar funcionalidades e comportamentos de HTML, CSS e Javascript nas páginas web.

Neste post, vou focar somente na alteração de propriedades CSS em arquivos locais e como salvar as mesmas diretamente do browser, sem necessidade de abrir o código fonte no seu editor favorito.

### _Isto somente funciona em arquivos locais da sua máquina, não é possível alterar CSS/HTML/Javascript de sites remotos_

# Google Chrome

Realizar alterações no Google Chrome pode parecer um pouco "complicado", mas não realidade não é, então vamos ao passo a passo.

## 1. Inclua os arquivos locais no workspace do navegador

No Google Chrome é necessário incluir o diretório com os arquivos do seu projeto web no workspace do navegador. Para isto abra o DevTools e na aba _"Sources"_ clique em _"Add folder to workspace"_

![gasakawa-devtools-chrome-workspace.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_chrome_workspace_66e0b01da2.png)

O navegador, vai solicitar acesso ao diretório que deseja incluir. Uma vez liberado o acesso os diretórios e arquivos devem aparecer no workspace.

![gasakawa-devtools-ask-permissions.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_ask_permissions_bd45ad6d6b.png)

![gasakawa-devtools-workspace-added.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_workspace_added_5077614fb4.png)

## 2. Selecione o elemento HTML para editar o seu estilo.

![gasakawa-devtools-element.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_element_dfa0119ac1.png)

## 3. Edite o CSS na aba _"Styles"_

Esta forma é mais simples é deve ser a mais utilizada pelos desenvolvedores (pelo menos é a que eu mais utilizo) ;)

![gasakawa-devtools-chrome-css-change.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_chrome_css_change_16d5a72b61.png)

## 4. Visualize e salve as alterações

As alterações são percebidas automaticamente na tela a cada mudança no código, mas é possível visualizar as alterações no código também, (como se fosse o git).

![gasakawa-devtools-local-modifications.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_local_modifications_7a375c5dc7.png)

Note que os arquivos alterados ficam com um asterisco (_) do lado esquerdo, então se clicar na opção _"Local modifications..."_, habilita uma nova aba chamada _"Changes"\*, onde é possível visualizar as alterações feitas em todos os arquivos do workspace.

![gasakawa-dev-tools-changes.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_dev_tools_changes_121e97f3bb.png)

Salve as mudanças com Ctrl + S e pronto as alterações serão refletidas no seu filesystem diretamente.

# Mozilla Firefox

Realizar estas alterações locais no Firefox é muito mais simples, vamos ver o passo a passo.

## 1. Selecione o elemento HTML para editar o seu estilo.

![gasakawa-devtools-firefox-element.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_firefox_element_8e03ad7bd4.png)

## 2. Edite o CSS

![gasakawa-devtools-firefox-css-change.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_firefox_css_change_89212c13fc.png)

Note que na propriedade do CSS que foi feita a alteraçao, fica uma marca da cor verde do lado esquerdo. Esta é a forma com a qual o Firefox sinaliza as alterações.

## 3. Salve as alterações

Salvar as alterações é muito simples, basta clicar na aba _"Editor de estilos"_ e na sequência clicar em _"Save"_ do lado de cada arquivo que foi modificado.

![gasakawa-devtools-firefox-save.png](https://gasakawa-blog.s3.amazonaws.com/gasakawa_devtools_firefox_save_c7e3780ba5.png)

# Conclusão

Editar CSS diretamente no navegador facilita muito a validação das alterações, poder salvar diretamente do navegador estas alterações no nosso computador local agiliza um pouco o desenvolvimento.

Se tiver dúvidas, elogios, sugestões, deixe seu comentário. Se também curtiu o conteúdo, compartilhe com os seus amigos.
