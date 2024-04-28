const pizzas = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    soldOut: true,
  },
  {
    id: 3,
    name: "Romana",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: true,
  },
  {
    id: 4,
    name: "Prosciutto e Rucola",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-4.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: true,
  },
  {
    id: 5,
    name: "Diavola",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-5.jpg",
    ingredients: ["tomato", "mozzarella", "spicy salami", "chili flakes"],
    soldOut: true,
  },
  {
    id: 6,
    name: "Vegetale",
    unitPrice: 13,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-6.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "bell peppers",
      "onions",
      "mushrooms",
    ],
    soldOut: true,
  },
  {
    id: 7,
    name: "Napoli",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-7.jpg",
    ingredients: ["tomato", "mozzarella", "fresh tomato", "basil"],
    soldOut: true,
  },
  {
    id: 8,
    name: "Siciliana",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-8.jpg",
    ingredients: ["tomato", "mozzarella", "anchovies", "olives", "capers"],
    soldOut: true,
  },
  {
    id: 9,
    name: "Pepperoni",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-9.jpg",
    ingredients: ["tomato", "mozzarella", "pepperoni"],
    soldOut: true,
  },
  {
    id: 10,
    name: "Hawaiian",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-10.jpg",
    ingredients: ["tomato", "mozzarella", "pineapple", "ham"],
    soldOut: true,
  },
  {
    id: 11,
    name: "Spinach and Mushroom",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-11.jpg",
    ingredients: ["tomato", "mozzarella", "spinach", "mushrooms"],
    soldOut: false,
  },
  {
    id: 12,
    name: "Mediterranean",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-12.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "sun-dried tomatoes",
      "olives",
      "artichoke",
    ],
    soldOut: true,
  },
  {
    id: 13,
    name: "Greek",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-13.jpg",
    ingredients: [
      "tomato",
      "mozzarella",
      "spinach",
      "feta",
      "olives",
      "pepperoncini",
    ],
    soldOut: true,
  },
  {
    id: 14,
    name: "Abruzzese",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-14.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
  {
    id: 15,
    name: "Pesto Chicken",
    unitPrice: 16,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-15.jpg",
    ingredients: [
      "pesto",
      "mozzarella",
      "chicken",
      "sun-dried tomatoes",
      "spinach",
    ],
    soldOut: true,
  },
  {
    id: 16,
    name: "Eggplant Parmesan",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-16.jpg",
    ingredients: ["marinara", "mozzarella", "eggplant", "parmesan"],
    soldOut: true,
  },
  {
    id: 17,
    name: "Roasted Veggie",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-17.jpg",
    ingredients: [
      "marinara",
      "mozzarella",
      "zucchini",
      "eggplant",
      "peppers",
      "onions",
    ],
    soldOut: true,
  },
  {
    id: 18,
    name: "Tofu and Mushroom",
    unitPrice: 15,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-18.jpg",
    ingredients: [
      "marinara",
      "mozzarella",
      "tofu",
      "mushrooms",
      "bell peppers",
    ],
    soldOut: true,
  },
];

export default pizzas;
