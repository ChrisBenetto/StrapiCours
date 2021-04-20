'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByCategory: async ctx => {
    const { name } = ctx.params;
    return await strapi.query('article').find({ "categories.name_contains": name });
  }
};
