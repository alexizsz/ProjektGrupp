import React from 'react';

function Products() {
  const products = [
    {
      id: 0,
      name: "Beef",
      price: 110,
      instock: 100,
      description:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.",
      imgSrc: "./george/images/t1.png",
    },
    {
      id: 1,
      name: "Lamb",
      price: 299,
      instock: 43,
      description:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.",
      imgSrc: "./george/images/t2.png",
    },
    {
      id: 2,
      name: "Pasta",
      price: 149,
      instock: 10,
      description:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
      imgSrc: "./george/images/t3.png",
    },
    {
      id: 3,
      name: "Pork",
      price: 160,
      instock: 5,
      description:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.",
      imgSrc: "./george/images/t4.png",
    },
    {
      id: 4,
      name: "Seafood",
      price: 169,
      instock: 4,
      description:
        "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term \"seafood\" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.",
      imgSrc: "./george/images/t5.png",
    },
    {
      id: 5,
      name: "Vegan",
      price: 185,
      instock: 40,
      description:
        "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced \/ˈviːɡən\/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
      imgSrc: "./george/images/t6.png",
    },
  ];

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}

export default Products;
