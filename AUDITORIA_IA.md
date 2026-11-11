## LOG de auditoria da IA

### PR001 - Prompt Header
```md
### Atuação:
Atue como designer front-end Sênior, especialista me Bootstrap(versão 5.3.8), e siga as diretrizes de reconstrução 
de código base solicitado.

### Objetivo:
Dado o código abaixo, reestruture e reestilize o header da minha página, que será comum a todas, utilizando-se do bootstrap e css externo.
- Mantenha o núcleo do código/ideia: não altere nomes, redirecionamentos, etc;
- Coloque um drop-down para o item interatividade, com páginas linkando para calculadora_tempo.html && relogio_foco.html;
- Crie um design responsivo, ao qual nos dispositivos móveis mantenha o nome do site e um menu 'hamburguer" lateral, com os items-links e seus respectivos redirecionamentos.
- Lembre-se, você está utilizando Bootstrap, portanto, utilize o CSS externo para estilizações pontuais.

### Código base:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/global.css">
    <link rel="stylesheet" href="./css/header.css">
    <title>Onlife | Inicio</title>
    <!-- páginas html(fora index), localizam-sem em: `./pages/` -->
</head>
<body>
    <header class="mt-3 mx-4">
        <nav class="nav-bar d-flex justify-content-between align-items-center">
            <div>
                <!-- Colocar um H1 com redirecionamento para o index.html -->
                <a href="./index.html">OnLife</a>
            </div>
            <div>
                <ul class="navbar-nav d-flex flex-row gap-4">
                    <li class="nav-item"><a class="nav-link" href="./pages/">Impacto</a></li>
                    <li class="nav-item"><a class="nav-link" href="./pages/">Recupere-se</a></li>
                    <li class="nav-item"><a class="nav-link" href="./pages/">Relatório de Saúde Mental</a></li>
                    <!-- Menu drop-down aqui para páginas: calculadora_tempo.html && relogio_foco.html -->
                    <li class="nav-item"><a class="nav-link" href="./pages/">Interatividade</a></li>
                    <li class="nav-item"><a class="nav-link" href="./pages/">Sobre</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
</body>
</html>



### Estrutura de pastas:

PROJETO-1/
│
├── assets/
│   └── imgs/
│       └── (imagens utilizadas no projeto)
│
├── CSS/
│   ├── global.css
│   └── header.css
│
├── js/
│   └── (scripts e funcionalidades JavaScript)
│
├── pages/
│   ├── calculadora_tempo.html
│   ├── impacto.html
│   ├── recupere_se.html
│   ├── relatorio.html
│   ├── relogio_foco.html
│   └── sobre.html
│
├── AUDITORIA_IA.md
├── index.html
└── README.md

### Resposta esperado:
- Fornece somente o código `html` e `css` externo;
- É estritramente proibido colocar comentário no código;
- Forneça, ao fim da conversa, um curto dossiê de 4 linhas, no máximo, do que foi implementado.	

```

#### Dossiê técnico
- Estrutura: Navbar responsiva do Bootstrap 5.3.8.
- Desktop: navegação horizontal com dropdown funcional.
- Mobile: menu lateral Offcanvas com submenu expansível.
- Estilização: CSS externo, preservando a utilização dos componentes nativos do Bootstrap.
<br>
O prompt trouxe resultados satisfatórios em virtude da "generalização" que foi dada, porém precisou ajustar os redirecionamentos.

---

### PR002 - Prompt Footer
```
### Atuação:
Atue como designer front-end Sênior, especialista me Bootstrap(versão 5.3.8), e siga as diretrizes de reconstrução 
de código base solicitado.

### Objetivo:
Reconstruir footer da página


### Código base:
    ```html
        <footer>
            <div class="row">
            <div class="col-4">
                <a class="navbar-brand" href="./index.html">
                        OnLife
                </a>
                <p>&copy; OnLife 2026 Todos os direitos reservados</p>
            </div>
            <div class="col-8">
                <ul>
                    <li><a href="#"></a>paginas</li>
                    <li><a href="#"></a>paginas</li>
                    <li><a href="#"></a>paginas</li>
                    <li><a href="#"></a>paginas</li>
                    <li><a href="#"></a>paginas</li>
                </ul>
            </div>         
            </div>
            <div>
                <!-- Colocar um A HREF para cada integrante, redirecionar github -->
                <p>Desenvolvido por Thiago & Victor</p>
            </div>
        </footer>
    ```
### Resposta esperado:
- Fornece somente o código `html` e `css` externo;
- É estritramente proibido colocar comentário no código;
- Forneça, ao fim da conversa, um curto dossiê de 4 linhas, no máximo, do que foi implementado.	
```
#### Dossiê técnico
- Estrutura: Grid responsivo do Bootstrap 5.3.8.
- Design: footer com identidade visual, navegação e créditos.
- Responsividade: três colunas no desktop e organização adaptável no mobile.
- Personalização: cores, espaçamentos, tipografia e efeitos de hover via CSS externo.
<br>
<br>
A estrutura base foi essencial para a construção do footer, afinal, o objetivo foi vago e generalista. Precisou arrumar os links externos(github), e o footer não se encaixa perfeitamente no final da página.


---

### PR003 Seção principal da página `inicial`
```
### Atuação:
Atue como designer front-end Sênior, especialista me Bootstrap(versão 5.3.8), e siga as diretrizes de reconstrução 
de código base solicitado.

### Objetivo:
Construir o body/main da página inicial:
- conter um carrosel de imagens que ocupe 100% da largura e uma parcela significativa de altura;
- Conter uma section com titulo e local apropriado para colocar um longo texto;
- Article de cards com redirecionamento para as páginas, dando um destaque visual, proposital, em páginas de interatividade: `calculadora` e `relogio`, esses CARDS apareceram primeiro e não terão nenhuma IMAGEM!.
- Utilize extritamente as bibliotecas de estilização Bootstrap, sem CSS externo.

### Código base:
    <main>
        <!-- Carrosel de Imagens que ocupe 100% da largura e tenha tamanho de 15-20% do body(conteúdo) -->
        <section>
            <article>
                <h1></h1>
                <p>conteúdo, texto longo(não é necessário cria-lo)</p>
            </article>
            <article>
                <!-- Carrosel de CARDS com link para as demais páginas páginas -->
            </article>
        </section>
    </main>


### Resposta esperado:
- Fornece somente o código `html`;
- É estritramente proibido colocar comentário no código;
- Forneça, ao fim da conversa, um curto dossiê de 1 paragrafo,no máximo, do que foi realizado, em forma de texto corrido.	
```
---
#### Dossiê técnico
Implementado um carrossel principal em largura total, uma seção institucional preparada para textos extensos e um carrossel de cards organizado em três grupos. Calculadora de Tempo e Relógio de Foco aparecem primeiro, sem imagens, com maior destaque por meio de cores, tipografia, badges e botões diferenciados. Os demais cards também não utilizam imagens. Toda a estrutura visual utiliza exclusivamente classes nativas do Bootstrap 5.3.8, sem CSS externo.
<br>
<br>

---
### PR004 - Prompt página `calculadora_tempo`

```
### Atuação:
Atue como designer front-end Sênior, especialista me Bootstrap(versão 5.3.8), e siga as diretrizes de construção de código.

### Objetivo:
Construir o body/main da página calculadora_tempo:
- Construe uma calculadora do tempo gasto com HTMl, CSS e Js, que pegue a média diária de telas do usuário e exiba o tempo gasto: dia, semana, mes, ano, 5 anos, 10 anos.
- Um quadro de comparação com o mesmo tempo dedicado a atividades úteis, por exemplo: quantidade de livros, aquisição de habilidades, proficiência em idiomas, condicionamento físico, hábitos, graduação,especialização e etc.

### Complemento:
para embasar a sua resposta quanto ao quadro comparativo, utilize estes estudos:
-Escala FSI (Foreign Service Institute Language Learning Standards):
- Condicionamento Físico e Mudança Corporal (ACSM / CDC)
- Aprendizado e Domínio de Habilidades Complexas (Teoria das 20 Horas)
- Aquisição de Idiomas e Proeficiência (FSI - Foreign Service Institute)
- Artigo de Referência: "In the Time You Spend on Social Media Each Year, You Could Read 200 Books" (Shane Parrish / Quartz / Farnam Street).

### Código base:
<main> .. <main>

### Resposta esperado:
- Fornece somente o código `html`, `css`, `js`;
- É estritramente proibido colocar comentário no código;
- Forneça, ao fim da conversa, um curto dossiê de 1 paragrafo,no máximo, do que foi realizado, em forma de texto corrido.	
```
---
#### Dossiê técnico
Desenvolvida uma calculadora interativa e responsiva que projeta o tempo de tela em seis períodos, de um dia a dez anos, e compara as horas acumuladas com possibilidades de leitura, aquisição de habilidades, aprendizado de idiomas, atividade física, formação acadêmica e construção de hábitos. Foram incorporadas referências do FSI, CDC, ACSM, Josh Kaufman e Charles Chu, com ressalvas para evitar tratar equivalências matemáticas como garantias de resultados.


---

### PR005 - Página Timer

```
### Atuação:
Atue como designer front-end Sênior, especialista me Bootstrap(versão 5.3.8), e siga as diretrizes de construção de código.

### Objetivo:
desenvolver um relógio interativo para foco total/descanso:
- Um único time de tempo ajustável em horas/minutos/segundos, com padrão de 30 minutos prédefinido;
- Um circulo de tempo em volta desse timer, que evidência o tempo se esvaindo;
- Esse único timer deve preencher o `body` por completo;

### Código base:
<main> .. <main>

### Resposta esperado:	
- Fornece somente o código `html`, `css`, `js`;
- É estritramente proibido colocar comentário no código;
- Forneça, ao fim da conversa, um curto dossiê de 1 paragrafo,no máximo, do que foi realizado, em forma de texto corrido.	
```
#### Dossiê técnico
Relógio de foco com temporizador único configurável em horas, minutos e segundos, padrão inicial de 30 minutos, círculo SVG de progresso, controles de iniciar, pausar, continuar e reiniciar. O temporizador ocupa a área principal do body, adapta-se a dispositivos móveis e utiliza contagem baseada no horário real para evitar imprecisões causadas por atrasos do navegador.
<br>
<br>
Houveram probemas na implementação do relógio, com o time circunscrito sobrepondo o `SVG`. Precisou de uma refatoração pelo promtp:
```
O `timer` está inscrito no circulo, porém o tamanho do circulo demonstra-se imcompatível, invandind o espaço do `timer`. Verifique também, se é responsivo!
```
## PR006 — Página Impacto

### Prompt utilizado

```md
### Atuação:
Atue como desenvolvedor front-end, especialista em Bootstrap 5.3.8.

### Objetivo:
Construir o conteúdo principal (body/main) da página impacto do projeto OnLife.

### Requisitos:
- Apresentar o tema dos impactos do uso excessivo da internet.
- Abordar possíveis consequências relacionadas à saúde mental.
- Explicar os efeitos sobre a qualidade do sono, convivência social e concentração.
- Utilizar componentes do Bootstrap 5.3.8.
- Organizar as consequências em cards responsivos.
- Finalizar com uma reflexão sobre a importância do equilíbrio digital.

### Restrições:
- Não alterar o header e o footer existentes.
- Não adicionar gráficos ou imagens.
- Não criar CSS externo adicional.
- Manter uma linguagem simples e informativa.

### Código base:
Inserir o conteúdo entre o fechamento do header e a abertura do footer.

### Resposta esperada:
Fornecer o código HTML do conteúdo principal, sem comentários no código.
```

### Dossiê técnico

Foi desenvolvida uma seção informativa sobre os impactos do uso excessivo da internet, abordando saúde emocional, sono, convivência social e concentração. A organização utiliza cards responsivos e componentes nativos do Bootstrap 5.3.8, preservando o cabeçalho e o rodapé existentes.

A estrutura atendeu ao objetivo, mas os cards seguiram um padrão semelhante ao de outras páginas do projeto.

---

## PR007 — Página Recupere-se

### Prompt utilizado

```md
### Atuação:
Atue como desenvolvedor front-end, especialista em Bootstrap 5.3.8.

### Objetivo:
Construir o conteúdo principal da página Recupere-se do projeto OnLife.

### Requisitos:
- Apresentar a importância do equilíbrio no uso da internet.
- Explicar por que fazer pausas no ambiente digital.
- Oferecer dicas práticas para melhorar os hábitos digitais.
- Abordar limites de utilização, pausas, atividades offline e qualidade do sono.
- Organizar as dicas utilizando cards responsivos do Bootstrap.

### Restrições:
- Não alterar o header e o footer existentes.
- Não adicionar gráficos.
- Não inserir imagens neste primeiro momento.
- Não criar CSS externo adicional.
- Utilizar uma linguagem simples e acessível.

### Código base:
Inserir o conteúdo entre o fechamento do header e a abertura do footer.

### Resposta esperada:
Fornecer o código HTML do conteúdo principal, sem comentários no código.
```

### Dossiê técnico

Foi criada uma página com orientações para melhorar os hábitos digitais, incluindo estabelecimento de limites, realização de pausas, atividades fora das telas e cuidados com o sono. A estrutura utiliza cards do Bootstrap 5.3.8 e uma mensagem final de conscientização. A inclusão de imagens foi deixada para uma etapa posterior.

---

## PR008 — Página Sobre

### Prompt utilizado

```md
### Atuação:
Atue como desenvolvedor front-end, especialista em Bootstrap 5.3.8.

### Objetivo:
Construir o conteúdo principal da página Sobre do projeto OnLife.

### Requisitos:
- Apresentar o projeto e sua finalidade.
- Explicar os objetivos de conscientização sobre o uso da internet.
- Apresentar o que os visitantes encontram no site.
- Utilizar componentes e recursos do Bootstrap 5.3.8.
- Manter uma linguagem simples e institucional.

### Restrições:
- Não alterar o header e o footer existentes.
- Não adicionar gráficos ou imagens.
- Não criar CSS externo adicional.
- Manter o conteúdo organizado e responsivo.

### Código base:
Inserir o conteúdo entre o fechamento do header e a abertura do footer.

### Resposta esperada:
Fornecer o código HTML do conteúdo principal, sem comentários no código.
```

### Dossiê técnico

Inicialmente, foi criada uma estrutura baseada em cards, semelhante às páginas anteriores. Após uma solicitação de revisão para evitar repetição visual, a estrutura foi modificada para uma apresentação institucional, utilizando colunas, uma área de destaque, lista de princípios e mensagem final. A alteração manteve o Bootstrap 5.3.8 e preservou a estrutura geral do site.

### PR009 — Página Relatório de Saúde Mental

**Prompt utilizado pela IA (reconstruído):**

Atue como um desenvolvedor front-end e ajude a estruturar a página “Relatório de Saúde Mental” do site OnLife. Organize o conteúdo de forma informativa, apresentando dados e informações relacionados ao uso da internet e seus possíveis impactos na saúde mental. Utilize HTML, Bootstrap 5.3.8 e gráficos com Chart.js para facilitar a visualização dos dados. Mantenha a responsividade e respeite o cabeçalho e o rodapé já existentes no projeto.

**Resultado e análise no dossiê:**

Foi desenvolvida uma página de relatório com textos explicativos e gráficos produzidos com a biblioteca Chart.js, permitindo apresentar os dados de maneira mais visual e facilitar a compreensão das informações. A estrutura manteve o padrão visual do restante do site e utilizou os recursos do Bootstrap para organização e responsividade.

A utilização dos gráficos tornou a página mais dinâmica e ajudou a complementar o conteúdo informativo. Foi necessário conferir a apresentação dos gráficos e sua integração com a estrutura HTML da página.

