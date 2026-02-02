# 🦸 DIO — Desafio Classificador de Nível de Herói (JavaScript / Node.js)

Resolução do desafio **"Classificador de nível de Herói"** usando **JavaScript no terminal (Node.js)**.  
O programa solicita o **nome** e a **XP** do herói, classifica o **nível** conforme as faixas do desafio e exibe a saída no console.

Além do requisito principal, esta solução permite avaliar **vários heróis** em sequência (extra).

---

## 🎯 Objetivo do Desafio

Criar variáveis para armazenar:
- Nome do herói
- Quantidade de experiência (XP)

E usar **estrutura de decisão** para apresentar a mensagem:

> **O Herói de nome {nome} está no nível de {nivel}**

---

## 📌 Regras de Classificação (XP → Nível)

- XP **≤ 1000** → **Ferro**
- XP **entre 1001 e 2000** → **Bronze**
- XP **entre 2001 e 5000** → **Prata**
- XP **entre 5001 e 7000** → **Ouro**
- XP **entre 7001 e 8000** → **Platina**
- XP **entre 8001 e 9000** → **Ascendente**
- XP **entre 9001 e 10000** → **Imortal**
- XP **≥ 10001** → **Radiante**

---

## 🧠 Conceitos Utilizados

✅ Variáveis (`let`, `const`)  
✅ Operadores (comparação e atribuição)  
✅ Laço de repetição (`for`)  
✅ Estruturas de decisão (`if / else if / else`)  
✅ Conversão de tipos (`parseInt`)  
✅ Entrada e saída no terminal (`prompt-sync` + `console.log`)

---

## ✅ Pré-requisitos

- **Node.js** instalado (recomendado: versão 18+)
- Terminal: CMD / PowerShell / Bash

Para verificar:
```bash
node -v
npm -v
```

---

## ▶️ Como Executar (Terminal)

1) Clonar o repositório
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd dio-desafio-nivel-heroi
```
2) Instalar dependência para entrada no terminal

- Como o Node não tem prompt() nativo, usamos prompt-sync para ler dados do usuário.
```bash
npm init -y
npm i prompt-sync
```
3) Executar o projeto

- Se o seu arquivo principal for script.js:
```bash
node script.js
```

---

## 🧪 Exemplo de Uso

Entradas:

- Total de heróis: 2
- Herói 1: Nome = Arthur, XP = 950
- Herói 2: Nome = Diana, XP = 10500

Saída esperada:
```bash
O Herói de nome Arthur está no nível de Ferro
XP do heroi: 950XP
O Herói de nome Diana está no nível de Radiante
XP do heroi: 10500XP
Fim da avaliação! Total de Avaliações: 2
Obrigado por usar o sistema de avaliação de Herois!
```

---

## 📂 Estrutura Sugerida do Projeto
```bash
.
├── script.js
├── package.json
└── README.md

```

---

## 🚀 Ideias de Melhorias Futuras

1) Validação de entradas (robustez)

- Impedir XP vazio, negativo ou texto inválido (NaN)

- Repetir o prompt até o usuário digitar um valor válido

- Validar nome vazio (não permitir string vazia)

2) Mostrar resumo final

- Guardar os heróis em um array e exibir ao final:

- total por classe (quantos Ferro, Bronze, etc.)

- maior XP e menor XP

- lista de resultados

3) Refatorar para ficar escalável

- Transformar as faixas de XP em uma estrutura (array de objetos) e evitar múltiplos else if

- Separar responsabilidades:

- - `getHeroData()`

- - `getNivelByXp(xp)`

- - `printResultado(hero)`

4) Versão sem dependências externas

- Trocar prompt-sync por readline nativo do Node (sem instalar nada)

5) Testes automatizados (nível portfólio)

- Criar testes com Jest para validar todas as faixas de XP

6) Interface opcional

- Criar uma versão web simples com HTML/CSS (para praticar front-end)

---

## 👨‍💻 Autor

Gabriel Alves Varella da Costa
GitHub: [https://github.com/Gabriel1000000](https://github.com/Gabriel1000000)


