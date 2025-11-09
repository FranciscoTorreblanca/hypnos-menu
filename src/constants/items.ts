import {
    HOT_COFFEE,
    HOT_NO_COFFEE,
    TEA,
    COLD,
    MALTED,
    AUTHOR,
    FOOD,
} from "./categories.ts"
const ITEMS: Record<
    string,
    { name: string; description: string; category: string; price: number }
> = {
    // Cafés calientes
    "Café de especialidad": {
        name: "Café de especialidad",
        description: "Método a elección (V60, Chemex, Prensa, Sifón).",
        category: HOT_COFFEE,
        price: 90.0,
    },
    "Café turco": {
        name: "Café turco",
        description: "Molienda ultrafina, servicio tradicional.",
        category: HOT_COFFEE,
        price: 65.0,
    },
    "Turco Nox": {
        name: "Turco Nox",
        description: "Café turco con especias (canela, clavo y cardamomo).",
        category: HOT_COFFEE,
        price: 70.0,
    },
    Espresso: {
        name: "Espresso",
        description: "Shot intenso de 30 ml.",
        category: HOT_COFFEE,
        price: 35.0,
    },
    Doppio: {
        name: "Doppio",
        description: "Doble espresso de 60 ml.",
        category: HOT_COFFEE,
        price: 40.0,
    },
    Americano: {
        name: "Americano",
        description: "Espresso alargado con agua caliente.",
        category: HOT_COFFEE,
        price: 40.0,
    },
    "Cappuccino Italiano": {
        name: "Cappuccino Italiano",
        description: "1/3 espresso, 1/3 leche, 1/3 espuma.",
        category: HOT_COFFEE,
        price: 60.0,
    },
    "Cappuccino  Alquímico": {
        name: "Cappuccino  Alquímico",
        description: "Receta de la casa, toque alquímico.",
        category: HOT_COFFEE,
        price: 75.0,
    },
    Latte: {
        name: "Latte",
        description: "Espresso con leche cremosa al vapor.",
        category: HOT_COFFEE,
        price: 60.0,
    },
    "Latte Alquímico": {
        name: "Latte Alquímico",
        description: "Latte con sello de la casa.",
        category: HOT_COFFEE,
        price: 75.0,
    },
    "Mocaccino Monte Alban": {
        name: "Mocaccino Monte Alban",
        description: "Espresso con leche y chocolate de Oaxaca.",
        category: HOT_COFFEE,
        price: 95.0,
    },
    "Mocaccino Palenque": {
        name: "Mocaccino Palenque",
        description: "Espresso con leche y chocolate de Chiapas.",
        category: HOT_COFFEE,
        price: 85.0,
    },
    "Mocaccino Alquímico ": {
        name: "Mocaccino Alquímico ",
        description: "Mocaccino con toque de la casa.",
        category: HOT_COFFEE,
        price: 95.0,
    },

    // Chocolates calientes
    "Chocolate Monte Alban": {
        name: "Chocolate Monte Alban",
        description: "Chocolate caliente de Oaxaca.",
        category: HOT_NO_COFFEE,
        price: 80.0,
    },
    "Chocolate Palenque": {
        name: "Chocolate Palenque",
        description: "Chocolate caliente de Chiapas.",
        category: HOT_NO_COFFEE,
        price: 70.0,
    },
    "Chocolate Fusión": {
        name: "Chocolate Fusión",
        description: "Oaxaca + Chiapas con amaranto.",
        category: HOT_NO_COFFEE,
        price: 80.0,
    },

    // Tés y Tisanas
    "Tisana - Blue butterfly": {
        name: "Tisana - Blue butterfly",
        description: "Infusión herbal azul (clitoria) con notas florales.",
        category: TEA,
        price: 38.0,
    },
    "Tisana - Mil y una noches moon milk": {
        name: "Tisana - Mil y una noches moon milk",
        description: "Infusión especiada, estilo moon milk.",
        category: TEA,
        price: 60.0,
    },
    "Tisana - Fresh Pillow Moon Milk": {
        name: "Tisana - Fresh Pillow Moon Milk",
        description: "Infusión suave y reconfortante.",
        category: TEA,
        price: 52.0,
    },
    "Tisana - Golden Milk": {
        name: "Tisana - Golden Milk",
        description: "Cúrcuma y especias cálidas.",
        category: TEA,
        price: 35.0,
    },
    "Tisana - Jengibre Mandarin": {
        name: "Tisana - Jengibre Mandarin",
        description: "Jengibre cítrico con mandarina.",
        category: TEA,
        price: 52.0,
    },
    "Té - Oriental Spice": {
        name: "Té - Oriental Spice",
        description: "Té negro especiado tipo chai.",
        category: TEA,
        price: 42.0,
    },
    "Té - Campo de Moras": {
        name: "Té - Campo de Moras",
        description: "Té negro con moras, frambuesa y jamaica.",
        category: TEA,
        price: 55.0,
    },
    "Té - Milk Oolong": {
        name: "Té - Milk Oolong",
        description: "Oolong de cuerpo cremoso, estilo milk oolong.",
        category: TEA,
        price: 160.0,
    },
    "Té - Elixir Garden": {
        name: "Té - Elixir Garden",
        description: "Té verde con jazmín y pétalos florales.",
        category: TEA,
        price: 55.0,
    },
    "Té - Nox Tropica": {
        name: "Té - Nox Tropica",
        description: "Té con perfil frutal y cítrico.",
        category: TEA,
        price: 55.0,
    },

    // Frías
    "Chocolate frio": {
        name: "Chocolate frio",
        description: "Chocolate servido frío sobre hielo.",
        category: COLD,
        price: 60.0,
    },
    "Cold Brew": {
        name: "Cold Brew",
        description: "Extracción en frío de larga duración.",
        category: COLD,
        price: 70.0,
    },
    Affogato: {
        name: "Affogato",
        description: "Helado artesanal bañado en espresso.",
        category: COLD,
        price: 90.0,
    },
    "Soda Italiana": {
        name: "Soda Italiana",
        description: "Agua mineral con jarabe artesanal.",
        category: COLD,
        price: 60.0,
    },
    "Frappe Moka ": {
        name: "Frappe Moka ",
        description: "Frappé de café con cacao.",
        category: COLD,
        price: 90.0,
    },

    // Malteadas
    "Malteada de Vainilla": {
        name: "Malteada de Vainilla",
        description: "Helado de vainilla, cremosa y clásica.",
        category: MALTED,
        price: 70.0,
    },
    "Malteada de Chocolate": {
        name: "Malteada de Chocolate",
        description: "Helado de chocolate intenso.",
        category: MALTED,
        price: 70.0,
    },
    "Malteada de Triple Chocolate": {
        name: "Malteada de Triple Chocolate",
        description: "Tres chocolates para un antojo supremo.",
        category: MALTED,
        price: 140.0,
    },
    "Malteada de Pistache": {
        name: "Malteada de Pistache",
        description: "Pistache natural, textura aterciopelada.",
        category: MALTED,
        price: 125.0,
    },
    "Malteada de Frutos del Bosque": {
        name: "Malteada de Frutos del Bosque",
        description: "Frutos rojos con pulpa natural.",
        category: MALTED,
        price: 125.0,
    },
    "Malteada de Cookies & Cream": {
        name: "Malteada de Cookies & Cream",
        description: "Galleta triturada y helado cremoso.",
        category: MALTED,
        price: 125.0,
    },
    "Malteada de Horchata con Ron": {
        name: "Malteada de Horchata con Ron",
        description: "Horchata especiada con toque adulto.",
        category: MALTED,
        price: 125.0,
    },
    "Malteada de Masapan": {
        name: "Malteada de Masapan",
        description: "Mazapán de cacahuate con nueces y almendra.",
        category: MALTED,
        price: 125.0,
    },

    // Autor
    "Nox Tropica": {
        name: "Nox Tropica",
        description: "Bebida de autor tropical de la casa.",
        category: AUTHOR,
        price: 125.0,
    },
    "Elixir Garden": {
        name: "Elixir Garden",
        description: "Bebida floral de la casa, equilibrada y aromática.",
        category: AUTHOR,
        price: 125.0,
    },

    // Comida
    "Baguette de Jamon Serrano": {
        name: "Baguette de Jamon Serrano",
        description: "Pan baguette con jamón serrano.",
        category: FOOD,
        price: 125.0,
    },
    "Baguette de Arrachera ": {
        name: "Baguette de Arrachera ",
        description: "Baguette con arrachera jugosa.",
        category: FOOD,
        price: 125.0,
    },
    "Tarta - Calabaza especiada": {
        name: "Tarta - Calabaza especiada",
        description: "Rebanada de tarta de calabaza especiada.",
        category: FOOD,
        price: 65.0,
    },
    "Tarta - Jamón serrano con peras": {
        name: "Tarta - Jamón serrano con peras",
        description: "Tarta salada con jamón serrano y peras.",
        category: FOOD,
        price: 65.0,
    },
    "Brownie - Red Velvet con Cheescake": {
        name: "Brownie - Red Velvet con Cheescake",
        description: "Brownie red velvet con centro de cheesecake.",
        category: FOOD,
        price: 60.0,
    },
    Cupcake: {
        name: "Cupcake",
        description: "Del día, con betún suave.",
        category: FOOD,
        price: 40.0,
    },
}

export default ITEMS
