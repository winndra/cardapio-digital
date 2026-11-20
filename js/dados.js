// Dados idênticos nas três versões (escopo congelado).
const PRATOS = [
  { id: 1, nome: "Bruschetta de Tomate", categoria: "Entradas", preco: 24.9, desc: "Pão italiano, tomate fresco, manjericão e azeite.", emoji: "🍅" },
  { id: 2, nome: "Caldinho de Feijão", categoria: "Entradas", preco: 18, desc: "Servido com torresmo crocante e cebolinha.", emoji: "🍲" },
  { id: 3, nome: "Feijoada da Casa", categoria: "Pratos", preco: 49.9, desc: "Feijão preto, carnes selecionadas, arroz, couve e laranja.", emoji: "🍛" },
  { id: 4, nome: "Filé à Parmegiana", categoria: "Pratos", preco: 54.9, desc: "Filé empanado, molho de tomate, queijo, arroz e batata frita.", emoji: "🥩" },
  { id: 5, nome: "Risoto de Cogumelos", categoria: "Pratos", preco: 46, desc: "Arroz arbóreo cremoso com mix de cogumelos.", emoji: "🍄" },
  { id: 6, nome: "Pudim de Leite", categoria: "Sobremesas", preco: 16.5, desc: "Receita tradicional com calda de caramelo.", emoji: "🍮" },
  { id: 7, nome: "Suco de Laranja", categoria: "Bebidas", preco: 12, desc: "Natural, 400 ml.", emoji: "🍊" },
  { id: 8, nome: "Limonada Suíça", categoria: "Bebidas", preco: 13.5, desc: "Limão, leite condensado e gelo, 400 ml.", emoji: "🍋" }
];
const CATEGORIAS = ["Todos", "Entradas", "Pratos", "Sobremesas", "Bebidas"];
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
