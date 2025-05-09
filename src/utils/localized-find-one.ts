'use strict';

export default ({ strapi }) => ({
  async localizedFindOne(ctx, contentType) {
    // Validate and sanitize all query parameters
    await strapi.controller(contentType).validateQuery(ctx);
    const sanitizedQueryParams = await strapi.controller(contentType).sanitizeQuery(ctx);

    const { id } = ctx.params;
    const { locale = 'vi', ...otherQueryParams } = sanitizedQueryParams; // Extract locale, preserve other params

    // Prepare query with all parameters (populate, filters, fields, etc.)
    const query = {
      ...otherQueryParams,
      populate: otherQueryParams.populate || ['localizations'], // Ensure localizations is always populated
    };

    // Fetch the entity with all query parameters
    let entity = await strapi.entityService.findOne(contentType, id, query);

    // If entity exists and matches the requested locale, return it
    if (entity && entity.locale === locale) {
      const sanitizedEntity = await strapi.controller(contentType).sanitizeOutput(entity, ctx);
      return strapi.controller(contentType).transformResponse(sanitizedEntity);
    }

    // Check for the requested locale in localizations
    if (entity && entity.localizations && entity.localizations.length > 0) {
      const localizedEntry = entity.localizations.find((loc) => loc.locale === locale);
      if (localizedEntry) {
        // Fetch the localized entity with the same query parameters
        entity = await strapi.entityService.findOne(contentType, localizedEntry.id, query);
        const sanitizedEntity = await strapi.controller(contentType).sanitizeOutput(entity, ctx);
        return strapi.controller(contentType).transformResponse(sanitizedEntity);
      }
    }

    // Fallback: Return the original entity (assumed to be in 'vi') if it exists
    if (entity) {
      const sanitizedEntity = await strapi.controller(contentType).sanitizeOutput(entity, ctx);
      return strapi.controller(contentType).transformResponse(sanitizedEntity);
    }

    // Return 404 if no entity is found
    return { error: { status: 404, name: 'NotFoundError', message: 'Not found' } };
  },
});