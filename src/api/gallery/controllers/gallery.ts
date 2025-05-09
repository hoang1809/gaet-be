import { factories } from '@strapi/strapi';
import localizedFindOneUtil from '../../../utils/localized-find-one';

export default factories.createCoreController(
  'api::gallery.gallery',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { localizedFindOne } = localizedFindOneUtil({ strapi });
      return await localizedFindOne(ctx, 'api::gallery.gallery');
    },
  })
);