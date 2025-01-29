import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
  };
}

export interface ComponentsProduct extends Struct.ComponentSchema {
  collectionName: 'components_components_products';
  info: {
    displayName: 'Product';
    icon: 'shoppingCart';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    contents: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.Component<'components.link', false>;
    tes: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.link': ComponentsLink;
      'components.product': ComponentsProduct;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
