export const artist = {
  name: 'artists',
  title: 'Artists',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(25),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => [Rule.required().error('A value is required!')],
      description:
        'Slutet på url, exempelvis: liljaartstudio.se/tatuerare/SLUG',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'instructions',
      title: 'How to contact',
      type: 'blockContentNoImage',
      description: 'Specifika instruktioner om hur man kontaktar för bokning',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      description:
        'Försök hålla filen så liten som möjligt för snabbare laddning. Bra sida för optimering av bilder: https://squoosh.app',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'shortText',
      title: 'Short Text',
      type: 'string',
      description: "Syns i 'våra tatuerare'",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContentNoImage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'object',
          name: 'galleryObject',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description:
                'Enligt WCAG2 måste bilder ha en text som beskriver bilden för de som inte kan se. https://bernskioldmedia.com/sv/sa-skriver-du-bra-alt-texter-till-bilder-for-battre-seo-och-tillganglighet',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description:
                'Försök hålla filen så liten som möjligt för snabbare laddning. Bra sida för optimering av bilder: https://squoosh.app',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
