import { factories } from '@strapi/strapi';
import localizedFindOneUtil from '../../../utils/localized-find-one';

export default factories.createCoreController(
  'api::news-item.news-item',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { localizedFindOne } = localizedFindOneUtil({ strapi });
      return await localizedFindOne(ctx, 'api::news-item.news-item');
    },
  })
);