"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("recipe_management", [
      {
        title: "Macarons",
        description:
          "This easy French macaron recipe makes a batch of the most dainty, delicate, and delicious cookies that will float right into your mouth and disappear.",
        ingredients:
          "100g egg whites (usually between 3-4 large egg whites), 1/4 teaspoon (1g) cream of tartar, 1/2 teaspoon extract such as vanilla, almond, coconut, etc. (optional), 80g superfine sugar (aka caster sugar), 1-2 drops gel food coloring (optional), 125g almond flour, 125g confectioners' sugar, desired macaron filling",
        instructions:
          "Wipe down a large glass or metal mixing bowl with lemon juice or vinegar. Add egg whites. Cover and refrigerate for 24 hours, then bring to room temperature, Line 3 large baking sheets with silicone baking mats or parchment paper. Set aside. Add cream of tartar and extract (if using) to egg whites. Using a handheld mixer or stand mixer fitted with a whisk attachment, beat together on medium speed until very soft peaks form. This takes a few minutes of beating. At first the egg white and cream of tartar mixture will be foamy, then the bubbles will begin to tighten and the beaters will leave tracks as the egg whites build volume. Once they begin leaving tracks, you likely have soft peaks. Stop beating. Add about 1/3 of the superfine sugar. Beat on medium-high speed for 5 seconds, then with the mixer continuing to run, add another 1/3 of the sugar. Beat for 5 seconds, then with the mixer continuing to run, add the remaining sugar. Beat on medium-high speed until stiff glossy peaks form. (This means the whites have stiff, smooth, and sharp points in the bowl or on the lifted whisk attachment/beaters. Stiff peaks do not droop down. You can turn the bowl upside down and the egg whites will not move or spill out.) Using a rubber spatula, slowly and gently fold the food coloring (if using) into the egg whites.,Sift the almond flour and confectioners’ sugar together in a large glass or metal mixing bowl. Use a spoon to help work any larger pieces through the sieve. You don’t want to discard a lot of that because then you won’t have enough dry ingredients in the batter.Slowly fold the beaten egg whites into the almond flour mixture in 3 separate additions, folding until combined before adding the next addition. After you add all of the egg whites, pay very close attention to the consistency of your macaron batter. Continue folding the batter (which deflates air) until it thins out into the consistency of honey. What’s a more helpful cue is the figure 8 test. Drop the macaron batter off of your spatula in the form of a figure 8. The figure 8 should take no more than 10 seconds to sink back into itself. If it takes less, your batter was overmixed and is too thin. If it takes longer, continue slowly folding the batter to deflate more air, then perform the figure 8 test again. It’s best to go very slow so you don’t accidentally overmix.,Spoon the macaron batter into a piping bag fitted with a medium round piping tip, such as Wilton 12, Wilton 1A, or even Ateco 806. The macaron batter is very drippy, so transferring to the piping bag can be messy.,Holding the piping bag at a 90 degree angle over the baking sheet, pipe batter in 1.5 – 2 inch rounds about 1-2 inches apart on prepared baking sheets. I usually pipe little mounds—see video tutorial above. The piped macaron batter flattens out. Bang the pan a couple times on the counter to pop any air bubbles, then use a toothpick to pop any remaining air bubbles.,Let the piped macarons sit out until they are dry and no longer tacky on top, usually 30-60 minutes. This time allows the top to firm up and form a skin, which helps the macarons rise UP and form their trademark ruffly “feet.” Do not let them sit out for longer than they need to because they could begin to deflate.,Meanwhile, preheat the oven to 325°F (163°C).,Bake for 13 minutes. As the macaron shells bake, they should form feet. To test for doneness, lightly touch the top of a macaron with a spoon or your finger (careful, it’s hot). If the macaron seems wobbly, it’s not done and needs another 1-2 minutes. If it seems set, it’s done. Basically, bake until the macarons don’t move around when touched.,Let the shells cool on the baking sheet for 15 minutes, then transfer to a cooling rack to continue cooling. The macaron shells may stick to the parchment paper/baking sheet if you try to remove them too early. If this is happening, let them cool on the baking sheet a little longer before removing.,After cooling, the shells are ready to fill and sandwich together. I have plenty of filling suggestions in the recipe notes below. You can spread filling with a knife or pipe it using the same round tip you used for the macaron batter.,You can eat right away or, as some professionals prefer, cover and refrigerate them 12-24 hours so the macarons and flavors can mature. Bring to room temperature before serving. (I usually just serve them right away!),Cover leftover macarons and refrigerate for up to 5 days.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "World's Best Lasagna",
        description:
          "This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!",
        ingredients:
          "1 pound sweet Italian sausage, 3/4 pound lean ground beef, 1/2 cup minced onion, 2 cloves garlic, crushed, 1 can crushed tomatoes, 2 cans canned tomato sauce, 2 cans tomato paste, 1/2 cup water, 2 tablespoons white sugar, 4 tablespoons chopped fresh parsley, divided, 1 1/2 teaspoons dried basil leaves, 1 1/2 teaspoons salt, divided, or to taste, 1 teaspoon Italian seasoning, 1/2 teaspoon fennel seeds, 1/4 teaspoon ground black pepper, 12 lasagna noodles, 16 ounces ricotta cheese, 1 egg, 3/4 pound mozzarella cheese, sliced, 3/4 cup grated Parmesan cheese",
        instructions:
          "Gather all your ingredients. Cook sausage, ground beef, onion, and garlic in a Dutch oven over medium heat until well browned. Stir in crushed tomatoes, tomato sauce, tomato paste, and water. Season with sugar, 2 tablespoons parsley, basil, 1 teaspoon salt, Italian seasoning, fennel seeds, and pepper. Simmer, covered, for about 1 1/2 hours, stirring occasionally. Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, and 1/2 teaspoon salt. Preheat the oven to 375 degrees F (190 degrees C). To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with 1/2 of the ricotta cheese mixture. Top with 1/3 of the mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray or make sure the foil does not touch the cheese. Bake in the preheated oven for 25 minutes. Remove the foil and bake for an additional 25 minutes. Rest lasagna for 15 minutes before serving.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Chicken Pot Pie",
        description:
          "A delicious chicken pie made from scratch with carrots, peas, and celery in a pre-made crust. Add thyme and poultry seasoning for more flavor.",
        ingredients:
          "1 pound skinless, boneless chicken breast halves - cubed, 1 cup sliced carrots, 1 cup forzen green peas, 1/2 cup sliced celery, 1/3 cup butter, 1/3 cup chopped onion, 1/3 cupp all-purpose flour, 1/2 teaspoon salt, 1/4 teaspoon black pepper, 1/4 teaspoon celery seed, 1 3/4 cups chicken broth, 2/3 cup milk, 2 (9 inch) unbaked pie crusts",
        instructions:
          "Gather all ingredients and preheat the oven to 425 degrees F (220 degrees C.). Combine chicken, carrots, peas, and celery in a saucepan; add water to cover and bring to a boil. Boil for 15 minutes, then remove from the heat and drain. While the chicken is cooking, melt butter in another saucepan over medium heat. Add onion and cook until soft and translucent, 5 to 7 minutes. Stir in flour, salt, pepper, and celery seed. Slowly stir in chicken broth and milk. Reduce heat to medium-low and simmer until thick, 5 to 10 minutes. Remove from heat and set aside. Place chicken and vegetables in the bottom pie crust. Pour hot liquid mixture over top. Cover with top crust, seal the edges, and cut away any excess dough. Make several small slits in the top crust to allow steam to escape. Bake in the preheated oven until pastry is golden brown and filling is bubbly, 30 to 35 minutes. Cool for 10 minutes before serving. Serve immediately and enjoy!",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("recipe_management", null, {});
  },
};
