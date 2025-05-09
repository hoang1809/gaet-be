import type { Attribute, Schema } from '@strapi/strapi';

export interface AboutAchievement extends Schema.Component {
  collectionName: 'components_about_achievements';
  info: {
    displayName: 'achievement';
  };
  attributes: {
    description: Attribute.Text;
    time: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface AboutBanner extends Schema.Component {
  collectionName: 'components_about_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    url: Attribute.String;
  };
}

export interface AboutFeature extends Schema.Component {
  collectionName: 'components_about_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface AboutHistory extends Schema.Component {
  collectionName: 'components_about_histories';
  info: {
    displayName: 'history';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
    year: Attribute.String & Attribute.Required;
  };
}

export interface AboutLeader extends Schema.Component {
  collectionName: 'components_about_leaders';
  info: {
    displayName: 'leader';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface AboutNameCard extends Schema.Component {
  collectionName: 'components_about_name_cards';
  info: {
    displayName: 'Name card';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface AboutPartner extends Schema.Component {
  collectionName: 'components_about_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    name: Attribute.String;
  };
}

export interface AboutValue extends Schema.Component {
  collectionName: 'components_about_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

export interface BusinessActivity extends Schema.Component {
  collectionName: 'components_business_activities';
  info: {
    displayName: 'activity';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.achievement': AboutAchievement;
      'about.banner': AboutBanner;
      'about.feature': AboutFeature;
      'about.history': AboutHistory;
      'about.leader': AboutLeader;
      'about.name-card': AboutNameCard;
      'about.partner': AboutPartner;
      'about.value': AboutValue;
      'business.activity': BusinessActivity;
    }
  }
}
