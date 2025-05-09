
import { factories } from '@strapi/strapi';
import localizedFindOneUtil from '../../../utils/localized-find-one';

export default factories.createCoreController(
  'api::member.member',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { localizedFindOne } = localizedFindOneUtil({ strapi });
      return await localizedFindOne(ctx, 'api::member.member');
    },
  })
);