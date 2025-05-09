import { factories } from '@strapi/strapi';
import localizedFindOneUtil from '../../../utils/localized-find-one';

export default factories.createCoreController(
  'api::business.business',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { localizedFindOne } = localizedFindOneUtil({ strapi });
      return await localizedFindOne(ctx, 'api::business.business');
    },
  })
);